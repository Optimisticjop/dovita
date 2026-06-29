import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-yellow-50" />

      <div className="max-w-7xl mx-auto px-6 relative grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="uppercase tracking-[0.35em] text-yellow-500 font-semibold">
            Personalized Consultation
          </span>

          <h1 className="mt-6 text-5xl lg:text-7xl font-bold leading-tight text-green-900">
            Healthy Skin Starts
            <br />
            With The Right Advice.
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Every skin and hair journey is unique. Book a consultation and
            receive personalized recommendations tailored to your needs.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <Link
              href="#consultation-form"
              className="rounded-full bg-gradient-to-r from-green-700 to-yellow-500 px-8 py-4 font-semibold text-white shadow-lg"
            >
              Book Consultation
            </Link>

            <a
              href="https://wa.me/233241876182"
              target="_blank"
              className="rounded-full border border-green-700 px-8 py-4 font-semibold text-green-700"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="relative h-[600px] rounded-[40px] overflow-hidden shadow-2xl">
          <Image
            src="/ache.png"
            alt="Consultation"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
