import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type Patient = { id: string; full_name: string; date_of_birth: string | null; sex: string | null };
type Encounter = { id: string; patient_id: string; encounter_date: string; notes: string | null };
type Vital = { id: string; patient_id: string; recorded_at: string; systolic_bp: number | null; diastolic_bp: number | null; weight_kg: number | null; height_cm: number | null; waist_cm: number | null };
type Lab = { id: string; patient_id: string; recorded_at: string; fasting_glucose_mg_dl: number | null; fasting_insulin_uiu_ml: number | null; triglycerides_mg_dl: number | null; hdl_mg_dl: number | null; hba1c_percent: number | null; urine_protein_mg_dl: number | null; urine_creatinine_mg_dl: number | null };
type HealthIndex = { patient_id: string; bmi: number | null; homa_ir: number | null; tg_hdl_ratio: number | null; tyg_index: number | null; aip: number | null; eag_mg_dl: number | null; upcr: number | null; waist_height_ratio: number | null; computed_at: string };

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const [{ data: patients, error: patientsError }, { data: encounters, error: encountersError }, { data: vitals, error: vitalsError }, { data: labs, error: labsError }, { data: indices, error: indicesError }] = await Promise.all([
    supabase.from("patients").select("id,full_name,date_of_birth,sex").order("created_at", { ascending: false }).limit(20),
    supabase.from("encounters").select("id,patient_id,encounter_date,notes").order("encounter_date", { ascending: false }).limit(20),
    supabase.from("vitals").select("id,patient_id,recorded_at,systolic_bp,diastolic_bp,weight_kg,height_cm,waist_cm").order("recorded_at", { ascending: false }).limit(20),
    supabase.from("labs").select("id,patient_id,recorded_at,fasting_glucose_mg_dl,fasting_insulin_uiu_ml,triglycerides_mg_dl,hdl_mg_dl,hba1c_percent,urine_protein_mg_dl,urine_creatinine_mg_dl").order("recorded_at", { ascending: false }).limit(20),
    supabase.from("health_indices").select("patient_id,bmi,homa_ir,tg_hdl_ratio,tyg_index,aip,eag_mg_dl,upcr,waist_height_ratio,computed_at").order("computed_at", { ascending: false }).limit(20),
  ]);

  const errors = [patientsError, encountersError, vitalsError, labsError, indicesError].filter(Boolean);

  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl space-y-6 px-4">
        <div className="rounded-xl bg-gradient-to-r from-[#005eb8] to-[#00a499] p-6 text-white"><h1 className="text-3xl font-bold">EMR Dashboard</h1></div>
        {errors.length > 0 ? <p className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">Some records could not be loaded.</p> : null}
        <Grid title="Patients" rows={(patients ?? []) as Patient[]} render={(p) => <><td className='p-2'>{p.full_name}</td><td className='p-2'>{p.date_of_birth ?? "-"}</td><td className='p-2'>{p.sex ?? "-"}</td></>} headers={["Name","DOB","Sex"]} />
        <Grid title="Encounters" rows={(encounters ?? []) as Encounter[]} render={(e) => <><td className='p-2'>{e.patient_id.slice(0,8)}</td><td className='p-2'>{e.encounter_date}</td><td className='p-2'>{e.notes ?? "-"}</td></>} headers={["Patient","Date","Notes"]} />
        <Grid title="Vitals" rows={(vitals ?? []) as Vital[]} render={(v) => <><td className='p-2'>{v.patient_id.slice(0,8)}</td><td className='p-2'>{v.recorded_at}</td><td className='p-2'>{v.systolic_bp ?? "-"}/{v.diastolic_bp ?? "-"}</td><td className='p-2'>{v.weight_kg ?? "-"}</td></>} headers={["Patient","Recorded","BP","Weight"]} />
        <Grid title="Labs" rows={(labs ?? []) as Lab[]} render={(l) => <><td className='p-2'>{l.patient_id.slice(0,8)}</td><td className='p-2'>{l.recorded_at}</td><td className='p-2'>{l.fasting_glucose_mg_dl ?? "-"}</td><td className='p-2'>{l.hba1c_percent ?? "-"}</td></>} headers={["Patient","Recorded","Glucose","HbA1c"]} />
        <Grid title="Health indices" rows={(indices ?? []) as HealthIndex[]} render={(i) => <><td className='p-2'>{i.patient_id.slice(0,8)}</td><td className='p-2'>{i.bmi?.toFixed(2) ?? "-"}</td><td className='p-2'>{i.homa_ir?.toFixed(2) ?? "-"}</td><td className='p-2'>{i.tg_hdl_ratio?.toFixed(2) ?? "-"}</td><td className='p-2'>{i.tyg_index?.toFixed(2) ?? "-"}</td></>} headers={["Patient","BMI","HOMA-IR","TG/HDL","TyG"]} />
      </div>
    </section>
  );
}

function Grid<T>({ title, headers, rows, render }: { title: string; headers: string[]; rows: T[]; render: (row: T) => React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <h2 className="border-b border-slate-100 bg-slate-50 px-4 py-3 text-lg font-semibold text-[#005eb8]">{title}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead><tr>{headers.map((h) => <th key={h} className="p-2 text-left text-slate-600">{h}</th>)}</tr></thead>
          <tbody>{rows.length ? rows.map((row, idx) => <tr key={idx} className="border-t border-slate-100">{render(row)}</tr>) : <tr><td colSpan={headers.length} className="p-3 text-slate-500">No data yet.</td></tr>}</tbody>
        </table>
      </div>
    </div>
  );
}
