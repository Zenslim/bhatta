import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Resources | Dr N D Bhatta 103 Medicentre",
  description:
    "Patient rights and hand hygiene information to help you stay informed, safe, and involved in your healthcare.",
};

const rights = [
  "A healthy and safe environment.",
  "Participation in decisions about your own care.",
  "Access to healthcare services, including emergency care.",
  "Knowledge of available health insurance or medical aid options.",
  "Choice of health services and provider.",
  "Confidentiality and privacy of your health information.",
  "Informed consent before treatment and procedures.",
  "The right to refuse treatment.",
  "The right to request a second opinion.",
  "Continuity of care and clear referrals when needed.",
  "The right to lodge a complaint and receive feedback.",
];

const responsibilities = [
  "Respect the rights of other patients and healthcare workers.",
  "Follow agreed treatment and rehabilitation plans.",
  "Ask questions if anything is unclear.",
  "Take care of healthcare records and medication instructions.",
  "Keep appointments, or notify the practice if you need to change them.",
  "Provide accurate medical information for safe treatment.",
];

const handWashSteps = [
  {
    title: "Wet and soap",
    body: "Wet hands with clean running water and apply soap.",
    icon: "🚰",
  },
  { title: "Palm to palm", body: "Rub palms together.", icon: "👐" },
  {
    title: "Backs of hands",
    body: "Rub one palm over the back of the other hand, then switch.",
    icon: "↔️",
  },
  { title: "Between fingers", body: "Rub between fingers.", icon: "🤲" },
  {
    title: "Knuckles",
    body: "Rub fingers and knuckles together.",
    icon: "✊",
  },
  {
    title: "Thumbs",
    body: "Rub each thumb with the opposite palm, then switch.",
    icon: "👍",
  },
  {
    title: "Fingertips and nails",
    body: "Rub fingertips and nails against the opposite palm, then switch.",
    icon: "💅",
  },
  {
    title: "Rinse and dry",
    body: "Rinse with clean water and dry with a clean paper towel.",
    icon: "🧻",
  },
  {
    title: "Close tap safely",
    body: "Use the paper towel to close the tap and avoid shared towels.",
    icon: "✅",
  },
];

export default function PatientResourcesPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-[#005eb8] to-[#00a499] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Patient Resources
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/90">
            Important information for patients and families: your rights,
            responsibilities, and practical hand hygiene guidance.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          <article className="rounded-3xl bg-white p-8 shadow-md sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_240px] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Patients&apos; Rights Charter</h2>
                <p className="mt-4 text-slate-600">
                  We support patient-centered care. Every person using our services should
                  feel respected, informed, and safe.
                </p>
              </div>
              <div className="mx-auto w-full max-w-[220px] rounded-2xl border-2 border-[#00a499]/30 bg-[#00a499]/5 p-4 text-center">
                <svg viewBox="0 0 120 120" className="mx-auto h-28 w-28" role="img" aria-label="Patient rights visual">
                  <circle cx="60" cy="60" r="54" fill="#e6f7f5" stroke="#00a499" strokeWidth="4" />
                  <path d="M60 26l8 16 18 3-13 13 3 18-16-9-16 9 3-18-13-13 18-3z" fill="#005eb8" />
                  <circle cx="60" cy="60" r="10" fill="#00a499" />
                </svg>
                <p className="mt-2 text-sm font-semibold text-[#005eb8]">Respect. Dignity. Choice.</p>
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-[#005eb8]">Your rights</h3>
                <ul className="mt-4 space-y-3">
                  {rights.map((right) => (
                    <li key={right} className="flex gap-3 text-slate-700">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#00a499]" />
                      <span>{right}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#005eb8]">Your responsibilities</h3>
                <ul className="mt-4 space-y-3">
                  {responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 text-slate-700">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#005eb8]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <article className="rounded-3xl bg-slate-50 p-8 shadow-md sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-3xl font-bold text-slate-900">How to wash your hands</h2>
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#00a499] text-center text-sm font-bold text-white">
                40-60
                <br />
                sec
              </div>
            </div>
            <p className="mt-4 text-slate-600">
              Clean hands help prevent infection. Follow each step clearly and dry with a
              clean paper towel.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {handWashSteps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-[#00a499]/20 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-[#005eb8]">Step {index + 1}</p>
                    <span className="text-2xl" aria-hidden>
                      {step.icon}
                    </span>
                  </div>
                  <p className="mt-2 font-semibold text-slate-900">{step.title}</p>
                  <p className="mt-1 text-slate-700">{step.body}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl bg-white p-8 shadow-md sm:p-10">
            <h2 className="text-3xl font-bold text-slate-900">
              Remember the 5 moments for hand hygiene
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Before touching a patient.",
                "Before doing a procedure.",
                "After exposure to body fluids.",
                "After touching a patient.",
                "After touching patient surroundings.",
              ].map((moment, index) => (
                <li key={moment} className="flex items-start gap-4 rounded-xl bg-slate-50 p-4 list-none">
                  <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#005eb8] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="text-lg text-slate-700">{moment}</span>
                </li>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
