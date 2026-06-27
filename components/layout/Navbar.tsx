"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Luxury Glass Layer */}
      <div className="backdrop-blur-xl bg-white/80 shadow-sm border-b border-brand-cream">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            {/* Logo Container */}
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg ring-2 ring-brand-cream bg-white flex items-center justify-center">
              <img
                src="/img/Dovita.jpeg"
                alt="Dovita Organics"
                className="w-full h-full object-contain scale-110"
              />
            </div>

            {/* Brand Text */}
            <div className="leading-tight">
              <p className="text-base font-semibold text-brand-dark tracking-wide">
                Dovita
              </p>
              <p className="text-[10px] text-brand-gold tracking-[0.3em] uppercase">
                Organics
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10 text-sm text-gray-700 font-medium">
            {["Shop", "Results", "Consultation", "About", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="relative group transition"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-brand-green group-hover:w-full transition-all"></span>
                </Link>
              ),
            )}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/shop"
              className="bg-brand-green text-white px-6 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition"
            >
              Shop Now
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span className="w-6 h-[2px] bg-brand-dark"></span>
            <span className="w-6 h-[2px] bg-brand-dark"></span>
            <span className="w-6 h-[2px] bg-brand-dark"></span>
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden px-6 pb-5 pt-3 bg-white border-t border-brand-cream">
            <div className="flex flex-col gap-5 text-sm font-medium text-gray-700">
              <Link onClick={() => setOpen(false)} href="/shop">
                Shop
              </Link>
              <Link onClick={() => setOpen(false)} href="/results">
                Results
              </Link>
              <Link onClick={() => setOpen(false)} href="/consultation">
                Consultation
              </Link>
              <Link onClick={() => setOpen(false)} href="/about">
                About
              </Link>
              <Link onClick={() => setOpen(false)} href="/contact">
                Contact
              </Link>

              <Link
                onClick={() => setOpen(false)}
                href="/shop"
                className="mt-3 bg-brand-green text-white px-4 py-3 rounded-full text-center shadow-md"
              >
                Shop Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
