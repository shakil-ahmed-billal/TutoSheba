
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import AuthProvider from "@/provider/AuthProvider";

import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tutor Sheba",
  description: "Best Tutoring Platformfor Home & Online Tuitions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <header>
            <Header />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
