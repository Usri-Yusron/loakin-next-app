"use client";
import { React, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Player } from "@lottiefiles/react-lottie-player";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import styled from 'styled-components';

import Form from "../components/Form";

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        displayName: "",
        photoURL: "https://example.com/avatar.jpg"
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/register", formData, {
                headers: { "Content-Type": "application/json" },
            });

            setMessage("Registrasi berhasil!");
        } catch (error) {
            console.error("Error:", error);
            setMessage(
                error.response?.data?.error || "Terjadi kesalahan saat registrasi."
            );
        }
    };


    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ">
                <div className="w-svw">
                    <div className="sm:flex justify-evenly">
                        <div className="">
                            <Form formBody={
                                <div className="">
                                    {/* <div className="mb-2 flex justify-center" /> */}
                                    <h2 className="text-center text-2xl font-bold leading-tight text-black">
                                        Buat akun <span className='font-mono'>Loakin<span className='text-orange-500/100'>.</span>id</span>
                                    </h2>
                                    <p className="mt-2 text-center text-sm text-gray-600">
                                        Kamu sudah punya akun? <span className="font-bold"><Link href="/login">Kenapa tidak login saja disini</Link></span>
                                    </p>
                                    <form className="mt-8" onSubmit={handleSubmit}>
                                        <div className="space-y-5">
                                            <div>
                                                <label className="text-base font-medium text-gray-900">
                                                    Username
                                                </label>
                                                <div className="mt-2">
                                                    <input placeholder="Username" name="displayName" value={formData.displayName} onChange={handleChange} type="text" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-base font-medium text-gray-900">
                                                    Email
                                                </label>
                                                <div className="mt-2">
                                                    <input placeholder="Email" name="email" value={formData.email} onChange={handleChange} type="email" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <label className="text-base font-medium text-gray-900">
                                                        Password
                                                    </label>
                                                </div>
                                                <div className="mt-2">
                                                    <input placeholder="Password" name="password" value={formData.password} onChange={handleChange} type="password" autoComplete="new-password" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                                </div>
                                            </div>
                                            <div>
                                                <button className="inline-flex w-full items-center justify-center rounded-md bg-orange-500/100 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-orange-500/90" type="submit">
                                                    Daftar akun baru
                                                </button>
                                                {message && <p>{message}</p>}
                                            </div>
                                        </div>
                                    </form>
                                    <StyledWrapper>
                                        <div className="separator">
                                            <hr className="line" />
                                            <span>Atau</span>
                                            <hr className="line" />
                                        </div>
                                    </StyledWrapper>
                                    <div className="mt-3 space-y-3">
                                        <button className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none" type="button">
                                            <span className="mr-2 inline-block">
                                                <FcGoogle />
                                            </span>
                                            Daftar dengan Google
                                        </button>
                                        <button className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none" type="button">
                                            <span className="mr-2 inline-block">
                                                <SiFacebook />
                                            </span>
                                            Daftar dengan Facebook
                                        </button>
                                    </div>
                                </div>
                            } />
                        </div>
                        <div className="hidden md:grid grid-col">
                            <Player
                                autoplay
                                loop
                                src="/logo.json"
                            />
                            <div>
                                <p className="text-center text-4xl font-extrabold font-mono">Loakin<span className='text-orange-500/100'>.</span>id</p>
                                <p className="text-center text-sm text-gray-600">Marketplace untuk barang preloved terpercaya</p></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

const StyledWrapper = styled.div`
.separator {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  color: #8B8E98;
  margin-top: 15px;
}

.separator .line {
  display: block;
  width: 100%;
  height: 1px;
  border: 0;
  background-color: #e8e8e8;
}
`;

