import Image from "next/image";

export default function OurStory() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-yellow-500 uppercase tracking-[0.3em] font-semibold">
            Our Story
          </span>

          <h2 className="mt-4 text-5xl font-bold text-green-900">
            More Than Beauty.
            <br />A Journey To Confidence.
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Dovita Organics was founded, to provide skincare and haircare
            products that truly understand the needs of African skin and hair.
            Every formulation is carefully developed using premium botanical
            ingredients and scientifically inspired actives that promote
            healthier skin, stronger hair and long lasting confidence.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We believe beauty isn't about changing who you are, it's about
            helping you become the healthiest version of yourself.
          </p>
        </div>
        {/* <div className="rounded-[40px] bg-gradient-to-br from-green-100 via-white to-yellow-100 h-[550px]" /> */}
        

        <div className="relative w-[430px] h-[550px] overflow-hidden rounded-[40px] shadow-2xl">
          <Image
            src="/about.png"
            alt="African woman using Dovita Organics skincare"
            fill
            className="object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-green-950/30 via-transparent to-transparent" />

          {/* Floating Badge */}
          <div className="absolute bottom-8 left-8 rounded-2xl bg-white/90 backdrop-blur px-6 py-5 shadow-xl">
            <p className="text-sm text-slate-500">Helping clients embrace</p>

            <h3 className="mt-1 text-xl font-bold text-green-900">
              Natural Beauty Since Day One
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
