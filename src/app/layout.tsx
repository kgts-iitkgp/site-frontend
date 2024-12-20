import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The Kgpain Game Theory Society",
  description: "The KGPian Game Theory Society (KGTS) is the IIT Kharagpur Chapter of The Indian Game Theory Socieity (IGTS). We are a student body founded by Mr Manoj Gadia on 19th August, 2010, dedicated to spreading awareness, knowledge and application of Game Theory.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
