import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-yellow-50">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold">
          Start Your Skin Transformation Today
        </h2>

        <p className="text-gray-600 mt-3">
          Book a consultation or explore our best-selling products.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <Link
            href="/consultation"
            className="bg-green-800 text-white px-6 py-3 rounded-full"
          >
            Book Consultation
          </Link>

          <Link
            href="/shop"
            className="border border-green-800 text-green-800 px-6 py-3 rounded-full"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
