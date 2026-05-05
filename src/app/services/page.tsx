import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Dr N D Bhatta 103 Medicentre",
  description: "Comprehensive healthcare services including general consultations, vaccinations, chronic disease management, and family medicine in Durban.",
};

const services = [
  {
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "General Consultations",
    description: "Comprehensive health assessments and treatment for all general ailments and medical conditions. Our experienced GP provides thorough examinations, accurate diagnoses, and effective treatment plans tailored to your individual needs.",
    features: [
      "Health check-ups and screenings",
      "Diagnosis and treatment of common illnesses",
      "Preventive care and health education",
      "Referrals to specialists when needed",
    ],
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Vaccinations & Immunizations",
    description: "Professional immunization services to protect you and your family from preventable diseases. We provide a comprehensive range of vaccinations for all age groups.",
    features: [
      "Flu vaccinations",
      "Childhood immunizations",
      "Travel vaccinations",
      "COVID-19 vaccinations",
    ],
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: "Chronic Disease Management",
    description: "Ongoing care and support for patients with chronic health conditions. We work with you to manage your condition and improve your quality of life.",
    features: [
      "Diabetes management",
      "Hypertension (high blood pressure) care",
      "Asthma management",
      "Cholesterol monitoring",
    ],
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Walk-in Appointments",
    description: "We understand that medical needs don't always wait for scheduled appointments. That's why we welcome walk-in patients for urgent medical concerns.",
    features: [
      "No appointment necessary",
      "Quick turnaround for urgent cases",
      "Flexible healthcare access",
      "Same-day consultations available",
    ],
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Contraception & Family Planning",
    description: "Professional family planning services and contraception options. We provide confidential advice and services to help you plan your family.",
    features: [
      "Contraception injections",
      "Family planning advice",
      "Pregnancy testing",
      "Pre-conception counseling",
    ],
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Family Medicine",
    description: "Comprehensive healthcare for patients of all ages, from children to seniors. We provide complete care for the whole family.",
    features: [
      "Pediatric care",
      "Geriatric health",
      "Women's health",
      "Men's health",
    ],
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
    title: "Medical Aid & Billing",
    description: "We strive to make healthcare accessible and affordable. Our practice works with most major medical aid schemes in South Africa.",
    features: [
      "Most medical aids accepted",
      "Direct billing available",
      "Transparent pricing",
      "Assistance with medical aid queries",
    ],
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Minor Procedures",
    description: "Our practice is equipped to handle various minor medical procedures in a safe and comfortable environment.",
    features: [
      "Wound care and suturing",
      "Removal of stitches",
      "Cryotherapy for skin lesions",
      "Injection therapy",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#005eb8] to-[#00a499] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Our Services
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Comprehensive healthcare services tailored to meet the needs of
              our diverse community in Durban and surrounding areas
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid gap-8 lg:grid-cols-2 lg:items-start"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#005eb8]/10 text-[#005eb8]">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg text-slate-600">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-[#00a499]"
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
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`mt-8 lg:mt-0 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200">
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center p-8">
                        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#005eb8]/10 text-[#005eb8]">
                          {service.icon}
                        </div>
                        <p className="font-medium text-slate-600">
                          {service.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Need Medical Assistance?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Contact us today to discuss your healthcare needs or schedule an
            appointment with Dr Bhatta.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+27313098128"
              className="inline-flex items-center rounded-full bg-[#005eb8] px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#004a90] hover:shadow-xl"
            >
              <svg
                className="mr-2 h-5 w-5"
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
              Call +27 31 309 8128
            </a>
            <a
              href="/contact"
              className="inline-flex items-center rounded-full border-2 border-[#005eb8] bg-transparent px-8 py-3 text-base font-semibold text-[#005eb8] transition-all hover:bg-[#005eb8] hover:text-white"
            >
              Visit Us
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
