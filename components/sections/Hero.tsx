// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="bg-white">
//       <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
//         <div>
//           <h1 className="text-5xl font-bold leading-tight text-brand-dark">
//             Transform Your Skin. <br />
//             Restore Your Hair. <br />
//             <span className="text-brand-green">Reveal Your Confidence.</span>
//           </h1>

//           <p className="mt-5 text-gray-600">
//             Premium skincare and haircare solutions designed for real results.
//           </p>

//           <div className="flex gap-4 mt-8">
//             <Link
//               href="/consultation"
//               className="bg-brand-green text-white px-6 py-3 rounded-full"
//             >
//               Book Consultation
//             </Link>

//             <Link
//               href="/shop"
//               className="border border-brand-green text-brand-green px-6 py-3 rounded-full"
//             >
//               Shop Products
//             </Link>
//           </div>
//         </div>

//         <div className="h-[420px] rounded-2xl bg-gradient-to-br from-brand-cream to-white border flex items-center justify-center">
//           <p className="text-brand-green font-semibold">
//             Product Visual Placeholder
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-yellow-50" />

      {/* Glow Effects */}
      <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-200/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-green-100 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              <span className="text-sm font-medium text-green-800">
                Premium Beauty • Made With Love
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight">
              Transform Your{" "}
              <span className="block bg-gradient-to-r from-green-700 via-green-600 to-yellow-500 bg-clip-text text-transparent">
                Skin & Hair
              </span>
              Naturally.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Premium skincare and haircare solutions formulated with carefully
              selected active ingredients and botanical extracts, specially
              designed for African skin and hair.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/consultation"
                className="rounded-full bg-gradient-to-r from-green-700 via-green-600 to-yellow-500 px-8 py-4 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Book Consultation
              </Link>

              <Link
                href="/shop"
                className="rounded-full border border-green-200 bg-white px-8 py-4 font-semibold text-green-800 hover:bg-green-50 transition"
              >
                Shop Products
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 flex flex-wrap gap-10 border-t border-green-100 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-green-800">500+</h3>
                <p className="text-sm text-slate-500">Happy Clients</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-800">98%</h3>
                <p className="text-sm text-slate-500">Positive Reviews</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-800">100%</h3>
                <p className="text-sm text-slate-500">Premium Care</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center items-center min-h-[650px]">
            {/* Glow */}
            <div className="absolute h-[550px] w-[550px] rounded-full bg-gradient-to-br from-green-200/40 via-transparent to-yellow-200/40 blur-3xl" />

            {/* Rings */}
            <div className="absolute h-[420px] w-[420px] rounded-full border border-yellow-300/40" />
            <div className="absolute h-[520px] w-[520px] rounded-full border border-yellow-200/20" />

            {/* MODEL PLACEHOLDER */}
            <div className="relative z-20 h-[520px] w-[350px] rounded-[40px] bg-gradient-to-b from-green-50 via-white to-yellow-50 border border-green-100 shadow-2xl flex items-center justify-center">
              <div className="text-center">
                {/* <p className="text-green-700 font-semibold text-lg">
                  African Beauty Model
                </p> */}
                {/* <p className="text-sm text-slate-500 mt-2">
                  Replace with hero image
                </p> */}
                <Image
                  src="/model2.png"
                  alt="Model"
                  width={420}
                  height={160}
                />
              </div>
            </div>

            {/* PRODUCT 1 */}
            <div className="absolute top-12 left-0 lg:left-10 z-30 animate-float">
              <div className="rounded-3xl bg-white p-4 shadow-xl border border-green-100">
                <Image
                  src="/p1.png"
                  alt="Product 1"
                  width={120}
                  height={160}
                />
              </div>
            </div>

            {/* PRODUCT 2 */}
            <div className="absolute bottom-20 right-0 lg:right-8 z-30 animate-float-slow">
              <div className="rounded-3xl bg-white p-4 shadow-xl border border-green-100">
                <Image
                  src="/p2.png"
                  alt="Product 2"
                  width={80}
                  height={60}
                />
              </div>
            </div>

            {/* CONSULT CARD */}
            <div className="absolute bottom-0 left-8 z-40 rounded-2xl bg-white/95 backdrop-blur border border-green-100 p-5 shadow-xl animate-float-fast">
              <p className="text-sm text-slate-500">
                Professional Consultation
              </p>
              <h4 className="text-xl font-bold text-green-800">
                Personalized Care
              </h4>
              <p className="mt-1 text-sm text-slate-500">
                Skin • Hair • Wellness
              </p>
            </div>

            {/* DECOR */}
            <div className="absolute top-16 right-20 h-6 w-6 rounded-full bg-yellow-400 shadow-lg animate-pulse" />
            <div className="absolute bottom-32 left-16 h-4 w-4 rounded-full bg-green-500 shadow-lg animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}