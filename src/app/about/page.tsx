import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Practice | Dr. Bhatta - 103 Medicentre Durban",
  description: "Learn about our dedicated medical team and quality healthcare services in Durban Central. Welcoming both walk-ins and scheduled appointments.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#005eb8] to-[#00a499] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              About Our Practice
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Providing comprehensive, accessible, and compassionate healthcare to the Durban community.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Our Medical Team
              </h2>
              <p className="mt-4 text-lg font-medium text-[#005eb8]">
                Patient-Centered General & Integrative Practice
              </p>
              <div className="mt-6 space-y-4 text-slate-600">
                <p>
                  Operating from our primary facility at Ismail C Meer Street, our practice is 
                  built on a foundation of quality medical services tailored for patients 
                  of all ages. We understand that clinical excellence goes hand-in-hand 
                  with accessibility, which is why we structure our care around the 
                  dynamic needs of the Durban Central community.
                </p>
                <p>
                  To ensure that reliable medical attention is available when you need it 
                  most, our doors are open to both pre-booked appointments and walk-in 
                  visitors. We work diligently to reduce barriers to care by accepting 
                  the majority of medical aid schemes in South Africa, alongside competitive 
                  private rates.
                </p>
                <p>
                  Our clinical approach looks past isolated symptoms to treat the individual 
                  as a whole, recognizing underlying mechanisms to support systemic health. 
                  By balancing meticulous medical expertise with genuine empathy, we maintain 
                  a welcoming environment where you can discuss your health concerns with 
                  complete confidence.
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[#005eb8] to-[#00a499]">
                  <div className="flex h-full items-center justify-center p-8">
                    <div className="text-center text-white">
                      <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <svg
                          className="h-16 w-16"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>
                      </div>
                      <p className="text-2xl font-bold">Room 103 Medicentre</p>
                      <p className="mt-2 text-white/80">Dr. Bhatta</p>
                      <p className="mt-4 text-sm text-white/60">
                        Comprehensive Family Medicine & Primary Healthcare
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why Choose Our Practice
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600 mx-auto">
              We are dedicated to delivering reliable, professional healthcare standards for you and your family.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#005eb8]/10 text-[#005eb8]">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Patient-Centered Care
              </h3>
              <p className="mt-3 text-slate-600">
                We spend individual time listening to our patients to accurately track history 
                and construct custom healthcare tracks.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#005eb8]/10 text-[#005eb8]">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Opening Hours
              </h3>
              <p className="mt-3 text-slate-600">
                Serving the community Monday through Friday from 9:30 AM to 3:30 PM, with dedicated 
                weekend availability by scheduled appointment.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#005eb8]/10 text-[#005eb8]">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Quality Assured
              </h3>
              <p className="mt-3 text-slate-600">
                We stringently maintain rigorous hygiene, diagnostic tracking, and clean diagnostic 
                environments for pristine local healthcare delivery.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#005eb8]/10 text-[#005eb8]">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Medical Aid Accepted
              </h3>
              <p className="mt-3 text-slate-600">
                Direct integration with key South African medical aids ensures seamless claim submissions 
                and minimal stress for families.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#005eb8]/10 text-[#005eb8]">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Accessible Facility
              </h3>
              <p className="mt-3 text-slate-600">
                Fully optimized wheelchair access combined with secure, multi-story street accessibility 
                right in the medical district.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#005eb8]/10 text-[#005eb8]">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Family Medicine
              </h3>
              <p className="mt-3 text-slate-600">
                Comprehensive therapeutic coverage spanning early pediatrics to senior lifestyle care and 
                chronic illness management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Our Values
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#005eb8] text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Compassion
                    </h3>
                    <p className="mt-1 text-slate-600">
                      We treat every patient with empathy and understanding, creating a supportive environment for healing.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#005eb8] text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Excellence
                    </h3>
                    <p className="mt-1 text-slate-600">
                      We are committed to maintaining the highest standards of medical care and continuously improving our services.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#005eb8] text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Respect
                    </h3>
                    <p className="mt-1 text-slate-600">
                      We respect the dignity and privacy of every patient, providing confidential and personalized care.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#005eb8] text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Accessibility
                    </h3>
                    <p className="mt-1 text-slate-600">
                      We strive to make healthcare accessible to all, offering flexible appointment options and a convenient location.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="rounded-2xl bg-gradient-to-br from-[#005eb8] to-[#00a499] p-8 text-white">
                <h3 className="text-2xl font-bold">Practice Information</h3>
                <p className="mt-4 text-white/90">
                  We welcome both appointments and walk-in patients. Contact us via phone, WhatsApp, or email to schedule your consultation.
                </p>
                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <div className="text-sm leading-relaxed">
                      <p className="font-semibold text-base">Our Address:</p>
                      <p>First Floor, Room 103</p>
                      <p>74-78 Ismail C Meer St</p>
                      <p>Durban Central, 4001</p>
                      <p>South Africa</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25Z"
                      />
                    </svg>
                    <div className="text-sm">
                      <p className="font-semibold text-base">Contact Numbers:</p>
                      <p>Phone: +27 31 309 8128</p>
                      <p>WhatsApp: 079 687 8086</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                    <div className="text-sm">
                      <p className="font-semibold text-base">Email Address:</p>
                      <p className="underline">drbhatta.nd@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-white/20 pt-4">
                    <svg
                      className="h-6 w-6 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div className="text-sm">
                      <p className="font-semibold text-base">Opening Hours:</p>
                      <p>Monday - Friday: 9:30 AM - 3:30 PM</p>
                      <p>Saturday: With appointment only</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
