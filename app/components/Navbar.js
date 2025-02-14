import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Navbar() {
    return (
        <nav className="fixed top-0 right-0 left-0 bg-orange-500/100">
            <div className="px-8">
                <div className="py-3 flex justify-between text-white text-sm">
                    <div className="hidden md:flex gap-x-2">
                        <Link href="#" className="font-normal hover:opacity-85">Panduan <span className="m-3 opacity-60">|</span></Link>
                        <Link href="#" className="font-normal hover:opacity-85">Mulai Berjualan <span className="m-3 opacity-60">|</span></Link>
                        <ul className="flex">
                        <p href="#" className="font-normal">Ikuti Kami di</p>
                            <Link href="" className="mr-1"><Facebook size={15}/></Link>
                            <Link href="" className="mr-1"><Instagram size={15}/></Link>
                            <Link href="" className="mr-1"><Twitter size={15}/></Link>
                        </ul>
                    </div>
                    <div className="flex gap-x-2">
                        <Link href="/" className="font-normal hover:opacity-85">Tentang Loakin <span className="m-3 opacity-60">|</span></Link>
                        <Link href="/" className="font-normal hover:opacity-85">Our Team <span className="m-3 opacity-60">|</span></Link>
                        <Link href="/" className="font-normal hover:opacity-85">Bantuan <span className="m-3 opacity-60">|</span></Link>
                        <Link href="/" className="font-normal hover:opacity-85">Promo</Link>
                    </div>
                </div>
                <div className="">
                    <p>ini apa</p>
                </div>
            </div>
        </nav>
    )
}