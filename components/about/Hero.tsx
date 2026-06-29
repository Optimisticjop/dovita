import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-700" />

      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-300/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
        <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur">
          About Dovita Organics
        </span>

        <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-tight">
          Beauty That Begins
          <span className="block text-yellow-400">With Confidence</span>
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-green-100">
          At Dovita Organics, we create premium skincare and haircare solutions
          inspired by nature and designed to help every individual embrace
          healthy skin, stronger hair and renewed confidence.
        </p>

        <div className="mt-12">
          <Link
            href="/consultation"
            className="inline-flex rounded-full bg-yellow-500 px-8 py-4 font-semibold text-green-950 shadow-xl hover:scale-105 hover:text-white/95 transition"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
