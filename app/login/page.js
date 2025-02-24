"use client";
import React from "react";

import { Player } from "@lottiefiles/react-lottie-player";

import Form from "../components/Form";

export default function LoginPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ">
        <div className="w-svw">
          <div className="sm:flex justify-evenly">
            <div className="hidden md:grid grid-col">
              <Player
                autoplay
                loop
                src="/logo.json" // Pastikan JSON valid
              />
              {/* <DotLottieReact
                src="/logo.json"
                height={300}
                width={300}
                loop
                autoplay
              /> */}
              <div>
                <p className="text-center text-4xl font-extrabold font-mono">Loakin<span className='text-orange-500/100'>.</span>id</p>
                <p className="text-center text-sm text-gray-600">Marketplace untuk barang preloved terpercaya</p></div>
            </div>
            <div className="">
              <Form />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
