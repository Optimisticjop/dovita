"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Results", href: "/results" },
  { name: "Consultation", href: "/consultation" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* NAVBAR */}
        <div className="bg-green/95 backdrop-blur-xl border-b border-green-100 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-5 lg:px-8 py-4">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-4">
              <img
                src="/Dov.png"
                alt="Dovita Organics"
                className="h-14 w-auto object-contain"
              />

              <div className="leading-none">
                <h1 className="text-2xl font-bold tracking-tight text-green-800">
                  Dovita
                </h1>

                <p className="mt-1 text-xs font-medium tracking-[0.35em] uppercase text-yellow-500">
                  ORGANICS
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    relative
                    text-[15px]
                    font-semibold
                    text-green-800
                    hover:text-yellow-500
                    transition-colors
                    group
                  "
                >
                  {item.name}

                  <span
                    className="
                      absolute
                      left-0
                      -bottom-1
                      h-[2px]
                      w-0
                      bg-yellow-500
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link
                href="/shop"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-r
                  from-green-700
                  via-green-600
                  to-yellow-500
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-xl
                "
              >
                Shop Now
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="
                lg:hidden
                p-2.5
                rounded-xl
                bg-green-50
                border
                border-green-100
                shadow-sm
              "
            >
              <Menu size={22} className="text-green-800" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`lg:hidden fixed inset-0 z-[100] transition-all duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Slide Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          {/* <div className="flex items-center justify-between p-5 border-b"> */}
          <div className="flex items-center justify-between p-5 border-b border-green-100">
            <div>
              <h3 className="text-xl font-bold text-green-800">Dovita</h3>

              <p className="text-xs uppercase tracking-[0.3em] text-yellow-500">
                Organics
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100"
            >
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col p-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  py-4
                  px-4
                  rounded-xl
                  font-medium
                  text-green-800
                  hover:bg-green-50
                  hover:text-yellow-500
                  transition-all
                
                "
              >
                {item.name}
              </Link>
            ))}

            {/* <div className="mt-6 pt-6 border-t"> */}
            <div className="mt-6 pt-6 border-t border-green-100">
              <Link
                href="/shop"
                onClick={() => setOpen(false)}
                className="
                  block
                  w-full
                  text-center
                  rounded-full
                  bg-gradient-to-r
                  from-green-700
                  via-green-600
                  to-yellow-500
                  py-3
                  font-semibold
                  text-white
                  shadow-lg
                "
              >
                Shop Now
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
