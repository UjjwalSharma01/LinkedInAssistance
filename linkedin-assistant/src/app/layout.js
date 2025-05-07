import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LinkedIn Assistant - AI-Powered LinkedIn Engagement Tool",
  description: "Enhance your LinkedIn experience with AI-powered comments and personalized engagement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-gradient-to-b from-background to-black`}
      >
        <div className="fixed inset-0 bg-[url('/assets/grid-pattern.svg')] bg-repeat opacity-5 pointer-events-none"></div>
        <Header />
        <main className="flex-grow relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
