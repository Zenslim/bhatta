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
  "Wet hands with clean running water and apply soap.",
  "Rub palms together.",
  "Rub one palm over the back of the other hand, then switch.",
  "Rub between fingers.",
  "Rub fingers and knuckles together.",
  "Rub each thumb with the opposite palm, then switch.",
  "Rub fingertips and nails against the opposite palm, then switch.",
  "Rinse with clean water and dry with a clean paper towel.",
  "Use the paper towel to close the tap and avoid shared towels.",
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
            <h2 className="text-3xl font-bold text-slate-900">Patients&apos; Rights Charter</h2>
            <p className="mt-4 text-slate-600">
              We support patient-centered care. Every person using our services should
              feel respected, informed, and safe.
            </p>
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
            <h2 className="text-3xl font-bold text-slate-900">Hand hygiene</h2>
            <p className="mt-4 text-slate-600">
              Clean hands help prevent infection. Wash your hands for
              <span className="font-semibold text-slate-900"> 40-60 seconds </span>
              using the steps below.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {handWashSteps.map((step, index) => (
                <div key={step} className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold text-[#005eb8]">Step {index + 1}</p>
                  <p className="mt-2 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl bg-white p-8 shadow-md sm:p-10">
            <h2 className="text-3xl font-bold text-slate-900">
              The 5 key moments for hand hygiene
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                "Before touching a patient.",
                "Before doing a procedure.",
                "After exposure to body fluids.",
                "After touching a patient.",
                "After touching patient surroundings.",
              ].map((moment, index) => (
                <li key={moment} className="flex items-start gap-4 rounded-xl bg-slate-50 p-4">
                  <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#005eb8] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="text-lg text-slate-700">{moment}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
