import {  Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/componants/Navbar";
import Footer from "@/componants/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});
export const metadata = {
  title: "Care.xyz | Trusted Home Care Services",
  description: "Reliable babysitting, elderly care, and nursing services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
       <Navbar />
        <main className="min-h-[calc(100vh-350px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
