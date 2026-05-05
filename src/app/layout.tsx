import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dr N D Bhatta 103 Medicentre | GP Practice Durban",
  description: "Dr Nirjhar Dev Bhatta - Professional General Practitioner in Durban Central. Quality healthcare services including general consultations, vaccinations, and chronic disease management.",
  keywords: "GP Practice, Doctor, Medical Centre, Dr N D Bhatta, Durban, Healthcare, General Practitioner",
  openGraph: {
    title: "Dr N D Bhatta 103 Medicentre | GP Practice Durban",
    description: "Professional General Practitioner in Durban Central. Quality healthcare services for the whole family.",
    type: "website",
    locale: "en_ZA",
    siteName: "Dr N D Bhatta 103 Medicentre",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
