"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="p-4 bg-red-600 text-white flex items-center justify-between">
      
      {/* Logo with animation */}
      <div className="pokemon-logo cursor-pointer">
        <Image
          src="/pokemon-logo.png"
          alt="Pokemon Logo"
          width={180}
          height={80}
          priority
        />
      </div>

      {/* Navigation links */}
      <div className="space-x-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>

        <Link href="/about" className="hover:underline">
          About
        </Link>
      </div>
    </nav>
  );
}
