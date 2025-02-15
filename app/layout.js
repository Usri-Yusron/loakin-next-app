import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Loakin.id",
  description: "Loakin.id | Marketplace untuk barang preloved terpercaya",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <main>{children}</main>
          <Footer/>
      </body>
    </html>
  );
}
