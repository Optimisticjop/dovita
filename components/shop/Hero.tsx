import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-700 py-28">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
        <span className="uppercase tracking-[0.35em] text-yellow-400 font-semibold">
          Dovita Organics
        </span>

        <h1 className="mt-5 text-5xl lg:text-6xl font-bold">
          Healthy Skin Begins Here
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-green-100 leading-8">
          Discover premium skincare and haircare products formulated to address
          your unique beauty concerns.
        </p>

        <Link
          href="/consultation"
          className="inline-block mt-10 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-green-950 hover:scale-105 hover:text-white/95 transition"
        >
          Need Expert Advice?
        </Link>
      </div>
    </section>
  );
}
