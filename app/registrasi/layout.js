import "../globals.css"; // Sesuaikan path jika perlu
import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Daftar di Loakin.id",
  description: "Buat akun di Loakin.id untuk mulai jual beli barang preloved.",
};

export default function RegistasiLayout({ children }) {
  return <main>{children}</main>;
}

