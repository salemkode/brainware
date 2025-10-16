"use client";
import React from "react";
import Image from "next/image";

export default function TopNav() {
  return (
    <nav className="sticky z-10 top-0 right-0 w-full border-b-2 bg-background">
      <div className="container max-w-6xl px-4 lg:px-0 mx-auto">
        <div className="flex justify-center items-center h-16">
          {/* Logo Section */}
          <div className="text-black font-head text-2xl flex items-end">
            <Image
              src="/images/logo.svg"
              alt="retro ui logo"
              className="mr-2"
              height={30}
              width={30}
            />
            <div className="text-foreground">BrainWare</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
