import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-green-50" />

      {/* Glow Effects */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-green-200/20 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <span className="inline-flex rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
          Personalized Beauty Care
        </span>

        {/* Heading */}
        <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-green-900">
          Not Sure Where To Start?
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
          Book a personalized consultation and receive expert guidance tailored
          to your skin and hair concerns.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/233241876182"
            target="_blank"
            rel="noopener noreferrer"
            className="
      inline-flex
      items-center
      gap-2
      rounded-full
      bg-gradient-to-r
      from-yellow-500
      to-yellow-400
      px-6
      py-3
      font-semibold
      text-green-950
      shadow-lg
      hover:scale-105
      transition-all
      duration-300
    "
          >
            <FaWhatsapp size={18} />
            Chat on WhatsApp
          </a>

          <Link
            href="/contact"
            className="
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    border-green-200
    bg-white
    px-6
    py-3
    font-semibold
    text-green-800
    shadow-lg
    hover:bg-green-50
    hover:border-green-400
    hover:scale-105
    transition-all
    duration-300
  "
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Trust Line */}
        <p className="mt-8 text-sm text-slate-500">
          Trusted by hundreds of clients seeking healthier skin and stronger
          hair.
        </p>
      </div>
    </section>
  );
}
