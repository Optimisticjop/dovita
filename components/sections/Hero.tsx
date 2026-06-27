import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight text-brand-dark">
            Transform Your Skin. <br />
            Restore Your Hair. <br />
            <span className="text-brand-green">Reveal Your Confidence.</span>
          </h1>

          <p className="mt-5 text-gray-600">
            Premium skincare and haircare solutions designed for real results.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              href="/consultation"
              className="bg-brand-green text-white px-6 py-3 rounded-full"
            >
              Book Consultation
            </Link>

            <Link
              href="/shop"
              className="border border-brand-green text-brand-green px-6 py-3 rounded-full"
            >
              Shop Products
            </Link>
          </div>
        </div>

        <div className="h-[420px] rounded-2xl bg-gradient-to-br from-brand-cream to-white border flex items-center justify-center">
          <p className="text-brand-green font-semibold">
            Product Visual Placeholder
          </p>
        </div>
      </div>
    </section>
  );
}
