import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Emergency Banner */}
      <div className="bg-[#ef4444] px-4 py-3">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-medium text-white">
            <span className="font-bold">Medical Emergency?</span> Call{" "}
            <a href="tel:10177" className="underline hover:text-slate-100">
              10177
            </a>{" "}
            or visit your nearest hospital immediately.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About Column */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white">Dr N D Bhatta</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Operating from First Floor, Room 103 Medicentre, our practice provides 
              quality primary healthcare and integrative services to the Durban community. 
              Dr. Bhatta and team are committed to delivering compassionate, professional 
              medical care tailored for you and your family.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <svg
                  className="h-5 w-5 text-[#facc15]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold text-white">4.4/5</span>
              </div>
              <span className="text-sm text-slate-400">from 17 Google reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm transition-colors hover:text-white"
                >
                  About Dr Bhatta
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm transition-colors hover:text-white"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm transition-colors hover:text-white"
                >
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00a499]"
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
                <span className="text-sm leading-relaxed">
                  First Floor, Room 103
                  <br />
                  74-78 Ismail C Meer St
                  <br />
                  Durban Central, 4001
                </span>
              </li>
              <li>
                <a
                  href="tel:+27313098128"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25Z"
                    />
                  </svg>
                  Phone: +27 31 309 8128
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/27796878086"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
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
                      d="M12 20.25c4.556 0 8.25-3.694 8.25-8.25S16.556 3.75 12 3.75 3.75 7.444 3.75 12c0 1.63.473 3.15 1.285 4.437l-1.163 3.487 3.58-.1.948.56A8.211 8.211 0 0012 20.25z"
                    />
                  </svg>
                  WhatsApp: 079 687 8086
                </a>
              </li>
              <li>
                <a
                  href="mailto:drbhatta.nd@gmail.com"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  drbhatta.nd@gmail.com
                </a>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <div className="flex gap-2 text-sm text-slate-400">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-[#00a499] mt-0.5"
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
                  <div className="leading-tight">
                    <p className="font-semibold text-slate-300">Opening Hours:</p>
                    <p className="mt-1">Mon - Fri: 9:30 AM - 3:30 PM</p>
                    <p>Sat: Appointment only</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-center text-sm text-slate-400">
            &copy; {currentYear} Dr N D Bhatta Room 103 Medicentre. All rights
            reserved. | Professional General & Integrative Practitioner Services in Durban
          </p>
        </div>
      </div>
    </footer>
  );
}
