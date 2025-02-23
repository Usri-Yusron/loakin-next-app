"use client";
import React from "react";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import Form from "../components/Form";

export default function LoginPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ">
        <div className="w-svw">
        <div className="sm:flex justify-evenly">
          <div className="hidden md:grid grid-col">
            <DotLottieReact
            className=""
              src="https://lottie.host/513726e4-cc77-41da-be0b-3302f74aca6d/FFGIqF1myG.lottie"
              loop
              autoplay
            />
            <p className="text-center text-2xl">Loakin.id</p>
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
