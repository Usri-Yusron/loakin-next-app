"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation";

import { FiShoppingCart } from "react-icons/fi";
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Tooltip from "./Tooltip";


const navigationLeft = [
    { name: 'Panduan', href: '/' },
    { name: 'Mulai Berjualan', href: '/' },
]

const product = [
    'Baju Renang',
    'Sepatu Joging',
    'Kerudung Pasmina',
    'Laptop Asus',
    'Smartwatch',
    'Mouse Gaming',
]

const productCatalog = [
    'boneka',
    'boneka',
    'boneka',
    'boneka',
    'boneka',
    'boneka',
    'boneka',
    'boneka',
    'boneka',
    'boneka',
    'boneka',
    'boneka',
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()
    const router = useRouter();

    return (
        <nav className="fixed top-0 right-0 left-0  bg-orange-500/100">
            {/* header on top */}
            <div className="flex justify-between py-2 px-9 text-white text-sm bg-orange-700/50">
                <div className="hidden md:flex gap-x-2">
                    {navigationLeft.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="font-normal hover:opacity-85"
                        >
                            {item.name} <span className="m-3 opacity-60">|</span>
                        </Link>
                    ))}
                    <div className="flex items-center">
                        <Tooltip triggerElement={<p href="#" className="font-normal">Ikuti Kami</p>} href={'/'} />
                    </div>
                </div>
                <div className="flex items-center gap-x-9">
                    <Link href="/" className="font-normal hover:opacity-75">Tentang Loakin </Link>
                    <Link href="/" className="font-normal hover:opacity-75">Tim Kami</Link>
                    <Link href="/" className="font-normal hover:opacity-75">Bantuan </Link>
                </div>
            </div>
            {/* header on top selesai */}

            {/* navbar with searchbar */}
            <div className="flex justify-between items-center px-9 py-4 md:py-0">
                {/* logo */}
                <div className="hidden md:flex justify-between items-center py-5">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Loakin.id</span>
                        <Image src="/real_new.png" alt="Loakin Logo" className="h-14 w-auto" width={56} height={56} />
                    </Link>
                </div>
                {/* searchbar */}
                <div className="flex items-center border w-2/3 pr-3 gap-2 bg-white border-gray-500/30 h-[46px] rounded-[5px] overflow-hidden">
                    <input className="w-full h-full pl-5 outline-none placeholder-gray-500 text-sm" placeholder="Carinya disini aja" type="text" />
                    <svg fill="#6B7280" viewBox="0 0 30 30" height={22} width={22} y="0px" x="0px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
                    </svg>
                    <div className="h-6 w-px bg-gray-500/50" />
                    <svg fill="#6B7280" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32.00 32.00" width="20px">
                        <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                        <g strokeWidth="0.064" stroke="#CCCCCC" strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" />
                        <g id="SVGRepo_iconCarrier">
                            <title>microphone</title>
                            <desc>Created with Sketch Beta.</desc>
                            <defs />
                            <g fillRule="evenodd" fill="none" strokeWidth="0.00032" id="Page-1">
                                <g fill="#6B7280" transform="translate(-105.000000, -307.000000)" id="Icon-Set">
                                    <path id="microphone" d="M111,314 C111,311.238 113.239,309 116,309 C118.761,309 121,311.238 121,314 L121,324 C121,326.762 118.761,329 116,329 C113.239,329 111,326.762 111,324 L111,314 L111,314 Z M116,331 C119.866,331 123,327.866 123,324 L123,314 C123,310.134 119.866,307 116,307 C112.134,307 109,310.134 109,314 L109,324 C109,327.866 112.134,331 116,331 L116,331 Z M127,326 L125,326 C124.089,330.007 120.282,333 116,333 C111.718,333 107.911,330.007 107,326 L105,326 C105.883,330.799 110.063,334.51 115,334.955 L115,337 L114,337 C113.448,337 113,337.448 113,338 C113,338.553 113.448,339 114,339 L118,339 C118.552,339 119,338.553 119,338 C119,337.448 118.552,337 118,337 L117,337 L117,334.955 C121.937,334.51 126.117,330.799 127,326 L127,326 Z" />
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                {/* kerangjang */}
                <div className="flex items-center ">
                    <div className="flex items-center gap-2">
                        <Link href={'/'}>
                            <FiShoppingCart size={23} color="white" />
                        </Link>

                        {productCatalog.length === 0 ? (
                            <></>
                        ) : (
                            <>
                                <p className="text-white">{productCatalog.length}</p>
                            </>
                        )}
                    </div>
                </div>
                {/* sekat */}
                {productCatalog.length === 0 ? (
                    <></>
                ) : (
                    <>
                        <div className="h-6 w-px md:hidden bg-gray-500/50" />
                    </>
                )}
                {/* login */}
                <div className="hidden lg:flex">
                    {pathname === "/" ? (
                        <Link href="/login" className="font-normal text-white hover:underline">Masuk / Daftar</Link>
                    ) : (
                        <Link href="/" className="font-normal text-white hover:underline">Back to Home</Link>
                    )}                    
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
            </div>
            {/* product under searchbar */}
            <div className="hidden md:flex justify-around items-center pb-2">
                <div className="flex gap-x-5">
                    {product.map((item, index) => (
                        <Link href={'/'} className="text-sm text-white font-light opacity-80" key={index}>{item}</Link>
                    ))}
                </div>
            </div>
            {/* navbar with searchbar selesai */}

            {/* mini device */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-2/3 h-full overflow-y-auto bg-white shadow-md px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image
                                alt=""
                                src="/logo1.png"
                                className="h-8 w-auto"
                                width={32}
                                height={32}
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {/* {navigationLeft.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="font-normal hover:opacity-85"
                                    >
                                        {item.name} <span className="m-3 opacity-60">|</span>
                                    </Link>
                                ))} */}
                            </div>
                            <div className="py-6">
                                {pathname === "/" ? (
                                    <button
                                        onClick={() => router.push("/")}
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        Login  <span aria-hidden="true">&rarr;</span>
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => router.push("/")}
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        Logout
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
            {/* mini device selesai */}
        </nav >
    )
}