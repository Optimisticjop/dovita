import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-700 py-28">
      {/* Glow */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
        <span className="uppercase tracking-[0.35em] text-yellow-400 font-semibold">
          Contact Us
        </span>

        <h1 className="mt-6 text-5xl lg:text-6xl font-bold">
          We'd Love To Hear From You
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-green-100">
          Whether you have questions about our skincare solutions, need help
          choosing products, or want a personalized consultation, our team is
          here to help.
        </p>

        <Link
          href="https://wa.me/233241876182"
          target="_blank"
          className="inline-flex items-center gap-3 mt-10 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-green-950 hover:scale-105 hover:text-white/95 transition"
        >
          <MessageCircle size={20} />
          Chat on WhatsApp
        </Link>
      </div>
    </section>
  );
}
