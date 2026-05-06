create extension if not exists pgcrypto;

create table if not exists public.patients (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  full_name text not null,
  date_of_birth date,
  sex text,
  created_at timestamptz not null default now()
);

create table if not exists public.encounters (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  patient_id uuid not null references public.patients(id) on delete cascade,
  encounter_date date not null default current_date,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.vitals (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  patient_id uuid not null references public.patients(id) on delete cascade,
  recorded_at timestamptz not null default now(),
  systolic_bp numeric,
  diastolic_bp numeric,
  weight_kg numeric,
  height_cm numeric,
  waist_cm numeric,
  hip_cm numeric
);

create table if not exists public.labs (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  patient_id uuid not null references public.patients(id) on delete cascade,
  recorded_at timestamptz not null default now(),
  fasting_glucose_mg_dl numeric,
  fasting_insulin_uiu_ml numeric,
  triglycerides_mg_dl numeric,
  hdl_mg_dl numeric,
  hba1c_percent numeric,
  urine_protein_mg_dl numeric,
  urine_creatinine_mg_dl numeric,
  serum_creatinine_mg_dl numeric,
  alt_u_l numeric,
  ast_u_l numeric,
  ggt_u_l numeric
);

create or replace view public.health_indices
with (security_invoker = true) as
select
  p.owner_id,
  p.id as patient_id,
  v.recorded_at as computed_at,
  case when v.height_cm > 0 and v.weight_kg is not null then v.weight_kg / power(v.height_cm / 100.0, 2) end as bmi,
  case when l.fasting_glucose_mg_dl is not null and l.fasting_insulin_uiu_ml is not null then (l.fasting_glucose_mg_dl * l.fasting_insulin_uiu_ml) / 405.0 end as homa_ir,
  case when l.triglycerides_mg_dl is not null and l.hdl_mg_dl > 0 then l.triglycerides_mg_dl / l.hdl_mg_dl end as tg_hdl_ratio,
  case when l.triglycerides_mg_dl > 0 and l.fasting_glucose_mg_dl > 0 then ln((l.triglycerides_mg_dl * l.fasting_glucose_mg_dl) / 2.0) end as tyg_index,
  case when l.triglycerides_mg_dl > 0 and l.hdl_mg_dl > 0 then log(l.triglycerides_mg_dl / l.hdl_mg_dl) end as aip,
  case when l.hba1c_percent is not null then (28.7 * l.hba1c_percent) - 46.7 end as eag_mg_dl,
  case when l.urine_creatinine_mg_dl > 0 and l.urine_protein_mg_dl is not null then l.urine_protein_mg_dl / l.urine_creatinine_mg_dl end as upcr,
  case when v.height_cm > 0 and v.waist_cm is not null then v.waist_cm / v.height_cm end as waist_height_ratio,
  case when l.serum_creatinine_mg_dl > 0 and p.date_of_birth is not null and p.sex in ('male','female') then
    142 * power(least(l.serum_creatinine_mg_dl / (case when p.sex='female' then 0.7 else 0.9 end), 1), case when p.sex='female' then -0.241 else -0.302 end)
        * power(greatest(l.serum_creatinine_mg_dl / (case when p.sex='female' then 0.7 else 0.9 end), 1), -1.2)
        * power(0.9938, extract(year from age(current_date, p.date_of_birth)))
        * (case when p.sex='female' then 1.012 else 1 end)
  end as egfr,
  case when v.hip_cm > 0 and v.height_cm > 0 then ((v.hip_cm / power(v.height_cm / 100.0, 1.5)) - 18) end as bai,
  case when v.waist_cm > 0 and l.triglycerides_mg_dl > 0 and l.hdl_mg_dl > 0 and p.sex='female' then ((v.waist_cm / (36.58 + (1.89 * (v.weight_kg / power(v.height_cm/100.0,2))))) * (l.triglycerides_mg_dl / 0.81) * (1.52 / l.hdl_mg_dl)) end as vai_female,
  case when v.waist_cm > 0 and l.triglycerides_mg_dl > 0 and l.hdl_mg_dl > 0 and p.sex='male' then ((v.waist_cm / (39.68 + (1.88 * (v.weight_kg / power(v.height_cm/100.0,2))))) * (l.triglycerides_mg_dl / 1.03) * (1.31 / l.hdl_mg_dl)) end as vai_male,
  case when p.sex='male' and v.waist_cm > 65 and l.triglycerides_mg_dl is not null then (v.waist_cm - 65) * l.triglycerides_mg_dl end as lap_male,
  case when p.sex='female' and v.waist_cm > 58 and l.triglycerides_mg_dl is not null then (v.waist_cm - 58) * l.triglycerides_mg_dl end as lap_female,
  case when l.triglycerides_mg_dl > 0 and (v.weight_kg / power(v.height_cm/100.0,2)) > 0 and l.ggt_u_l is not null and v.waist_cm is not null then
    (exp(0.953 * ln(l.triglycerides_mg_dl) + 0.139 * (v.weight_kg / power(v.height_cm/100.0,2)) + 0.718 * ln(l.ggt_u_l) + 0.053 * v.waist_cm - 15.745) / (1 + exp(0.953 * ln(l.triglycerides_mg_dl) + 0.139 * (v.weight_kg / power(v.height_cm/100.0,2)) + 0.718 * ln(l.ggt_u_l) + 0.053 * v.waist_cm - 15.745))) * 100
  end as fli
from public.patients p
left join lateral (
  select * from public.vitals v where v.patient_id = p.id order by v.recorded_at desc limit 1
) v on true
left join lateral (
  select * from public.labs l where l.patient_id = p.id order by l.recorded_at desc limit 1
) l on true;

create index if not exists idx_patients_owner on public.patients(owner_id);
create index if not exists idx_encounters_owner_patient_date on public.encounters(owner_id, patient_id, encounter_date desc);
create index if not exists idx_vitals_owner_patient_recorded on public.vitals(owner_id, patient_id, recorded_at desc);
create index if not exists idx_labs_owner_patient_recorded on public.labs(owner_id, patient_id, recorded_at desc);

alter table public.patients enable row level security;
alter table public.encounters enable row level security;
alter table public.vitals enable row level security;
alter table public.labs enable row level security;

create policy "patients_owner_all" on public.patients for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
create policy "encounters_owner_all" on public.encounters for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
create policy "vitals_owner_all" on public.vitals for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
create policy "labs_owner_all" on public.labs for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

grant select on public.health_indices to authenticated;
