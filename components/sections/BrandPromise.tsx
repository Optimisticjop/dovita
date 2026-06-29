export default function BrandPromise() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-900 to-green-800" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
        <span className="text-yellow-400 font-semibold uppercase tracking-[0.3em]">
          Our Promise
        </span>

        <h2 className="mt-6 text-5xl font-bold leading-tight">
          Beauty Rooted In Confidence
        </h2>

        <p className="mt-8 text-lg leading-8 text-green-100">
          At Dovita Organics, we believe beauty is more than appearance. It is
          confidence, self care and feeling comfortable in your own skin. Every
          product we create is designed to help you glow naturally, nourish
          deeply and embrace your beauty with confidence.
        </p>

        <div className="mt-12 flex justify-center">
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600" />
        </div>
      </div>
    </section>
  );
}
