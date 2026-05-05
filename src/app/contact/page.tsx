import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact & Location | Dr N D Bhatta 103 Medicentre",
  description: "Contact Dr N D Bhatta 103 Medicentre in Durban Central. Find our location, phone number, opening hours, and get directions.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#005eb8] to-[#00a499] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Contact & Location
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Find us at 103 Medicentre in Durban Central. We're here to provide
              you with quality healthcare services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We welcome both appointments and walk-in patients. Contact us
                today to schedule your consultation.
              </p>

              <div className="mt-10 space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#005eb8]/10 text-[#005eb8]">
                    <svg
                      className="h-7 w-7"
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
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Our Address
                    </h3>
                    <p className="mt-1 text-slate-600">
                      First Floor, Room 103
                      <br />
                      74-78 Ismail C Meer St
                      <br />
                      Durban Central, 4001
                      <br />
                      South Africa
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#005eb8]/10 text-[#005eb8]">
                    <svg
                      className="h-7 w-7"
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
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Phone Number
                    </h3>
                    <p className="mt-1 text-slate-600">
                      <a
                        href="tel:+27313098128"
                        className="text-[#005eb8] hover:underline"
                      >
                        +27 31 309 8128
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Click to call directly
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#005eb8]/10 text-[#005eb8]">
                    <svg
                      className="h-7 w-7"
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
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Opening Hours
                    </h3>
                    <div className="mt-1 space-y-1 text-slate-600">
                      <p>
                        <span className="font-medium">Monday - Friday:</span>{" "}
                        8:00 AM - 4:00 PM
                      </p>
                      <p>
                        <span className="font-medium">Saturday - Sunday:</span>{" "}
                        Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="flex gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#005eb8]/10 text-[#005eb8]">
                    <svg
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Additional Information
                    </h3>
                    <div className="mt-1 space-y-2 text-slate-600">
                      <p>Wheelchair accessible entrance</p>
                      <p>Parking available at City Hospital across the street</p>
                      <p>Most medical aid schemes accepted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-12 lg:mt-0">
              <div className="h-[500px] overflow-hidden rounded-2xl shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.4567890123456!2d31.0213!3d-29.8579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjk4NDgyNy!5e0!3m2!1sen!2sza!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr N D Bhatta 103 Medicentre Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              How to Find Us
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600 mx-auto">
              Our practice is conveniently located in Durban Central
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* By Car */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#005eb8]/10 text-[#005eb8]">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">By Car</h3>
              <p className="mt-3 text-slate-600">
                Located on Ismail C Meer Street (formerly Commercial Road) in
                Durban Central. Parking is available at City Hospital across
                the street from our practice.
              </p>
            </div>

            {/* By Public Transport */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#005eb8]/10 text-[#005eb8]">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                By Public Transport
              </h3>
              <p className="mt-3 text-slate-600">
                The practice is easily accessible by taxi and bus. Several public
                transport routes operate along Ismail C Meer Street and the
                surrounding area.
              </p>
            </div>

            {/* Accessibility */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#005eb8]/10 text-[#005eb8]">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
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
                Accessibility
              </h3>
              <p className="mt-3 text-slate-600">
                Our practice is fully wheelchair accessible with a dedicated
                entrance. If you require any special assistance, please let us
                know when booking your appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Information */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#ef4444] p-8 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold">Medical Emergency?</h3>
                <p className="mt-2 text-white/90">
                  For life-threatening emergencies, please call{" "}
                  <span className="font-bold">10177</span> or visit your nearest
                  hospital immediately.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <a
                  href="tel:10177"
                  className="inline-flex items-center rounded-full bg-white px-8 py-3 text-base font-semibold text-[#ef4444] shadow-lg transition-all hover:bg-slate-100"
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
                  Call 10177
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#005eb8] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Visit Us?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            We look forward to welcoming you to our practice. Contact us today
            to schedule your appointment.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+27313098128"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 text-base font-semibold text-[#005eb8] shadow-lg transition-all hover:bg-slate-100 hover:shadow-xl"
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
          </div>
        </div>
      </section>
    </div>
  );
}
