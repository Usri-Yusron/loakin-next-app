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
  title: "Login | Loakin.id",
  description: "Masuk ke akun Loakin.id untuk mulai jual beli barang preloved.",
};

export default function LoginLayout({ children }) {
  return <main>{children}</main>;
}

