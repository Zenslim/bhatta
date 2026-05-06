import type { Metadata } from "next";
import Image from "next/image";

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

export default function PatientResourcesPage() {
  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#005eb8] to-[#00a499] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Patient Resources
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/90">
            Important information for patients and families: your rights,
            responsibilities, and official hand hygiene guidelines.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: Charter of Rights & Responsibilities */}
          <article className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_240px] lg:items-center border-b border-slate-100 pb-8">
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
                <h3 className="text-xl font-bold text-[#005eb8] flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#005eb8]" /> Your Rights
                </h3>
                <ul className="mt-4 space-y-3">
                  {rights.map((right) => (
                    <li key={right} className="flex gap-3 text-slate-700 text-sm sm:text-base">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00a499]" />
                      <span>{right}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-slate-100 pt-8 lg:border-t-0 lg:pt-0 lg:pl-8 lg:border-l">
                <h3 className="text-xl font-bold text-[#005eb8] flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#00a499]" /> Your Responsibilities
                </h3>
                <ul className="mt-4 space-y-3">
                  {responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 text-slate-700 text-sm sm:text-base">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#005eb8]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          {/* Section 2: How to Wash Hands Infographic Block */}
          <article className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">How to Wash Your Hands</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Clean hands help prevent infection. Follow the standard clinical sequence step-by-step to maintain proper clinical field safety.
                </p>
                <div className="mt-6 space-y-4 rounded-2xl bg-[#00a499]/5 p-5 border border-[#00a499]/10 text-sm text-slate-700">
                  <p>• Wash visibly soiled hands with soap and water, otherwise use an alcohol-based hand rub.</p>
                  <p>• Keep nails short and clean. Avoid artificial nails as they inhibit effective sanitation.</p>
                  <p>• Thoroughly rub all areas for at least <strong>40-60 seconds</strong>.</p>
                </div>
              </div>
              
              {/* Infographic Container */}
              <div className="lg:col-span-7 flex justify-center">
                <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-inner">
                  <Image
                    src="/images/hand-hygiene/how-to-wash-hands.jpg"
                    alt="Official reference diagram for washing hands step by step"
                    width={800}
                    height={1131}
                    className="h-auto w-full object-contain rounded-xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </article>

          {/* Section 3: The 5 Moments Framework Infographic Block */}
          <article className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
              {/* Infographic Container (Ordered first on large viewports for visual layout variation) */}
              <div className="lg:col-span-7 order-last lg:order-first flex justify-center">
                <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-inner">
                  <Image
                    src="/images/hand-hygiene/5-moments-hand-hygiene.jpg"
                    alt="Official reference diagram for the 5 moments of hand hygiene workflow"
                    width={800}
                    height={1131}
                    className="h-auto w-full object-contain rounded-xl"
                  />
                </div>
              </div>

              <div className="lg:col-span-5">
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                  The 5 Moments for Hand Hygiene
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Our clinic strictly complies with standard clinical point-of-care frameworks to minimize cross-contamination pathways within the immediate patient zone:
                </p>
                <ol className="mt-6 space-y-3.5">
                  {[
                    "Before touching a patient.",
                    "Before doing a procedure.",
                    "After exposure to body fluids.",
                    "After touching a patient.",
                    "After touching patient surroundings.",
                  ].map((moment, index) => (
                    <li key={index} className="flex items-center gap-4 text-slate-700 font-medium bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                      <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#005eb8] text-xs font-bold text-white shadow-sm">
                        {index + 1}
                      </span>
                      <span>{moment}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}
