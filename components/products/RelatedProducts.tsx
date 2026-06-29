// import Link from "next/link";
// import Image from "next/image";
// import { ArrowRight } from "lucide-react";

// const relatedProducts = [
//   {
//     name: "Radiance Cream",
//     slug: "radiance-cream",
//     image: "/p2.png",
//     price: "GH₵180",
//     concern: "Dry Skin",
//   },
//   {
//     name: "Hair Growth Oil",
//     slug: "hair-growth-oil",
//     image: "/p1.png",
//     price: "GH₵250",
//     concern: "Hair Growth",
//   },
//   {
//     name: "Acne Repair Gel",
//     slug: "acne-repair-gel",
//     image: "/p2.png",
//     price: "GH₵170",
//     concern: "Acne",
//   },
// ];

// export default function RelatedProducts() {
//   return (
//     <section className="py-24 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex items-end justify-between">
//           <div>
//             <span className="uppercase tracking-[0.35em] text-yellow-500 font-semibold">
//               You May Also Like
//             </span>

//             <h2 className="mt-4 text-4xl font-bold text-green-900">
//               Related Products
//             </h2>
//           </div>

//           <Link
//             href="/shop"
//             className="hidden md:flex items-center gap-2 text-green-700 font-semibold hover:text-yellow-500 transition"
//           >
//             View All Products
//             <ArrowRight size={18} />
//           </Link>
//         </div>

//         <div className="grid gap-8 mt-14 md:grid-cols-2 lg:grid-cols-3">
//           {relatedProducts.map((product) => (
//             <Link
//               key={product.slug}
//               href={`/shop/${product.slug}`}
//               className="
//                 group
//                 overflow-hidden
//                 rounded-3xl
//                 bg-white
//                 border
//                 border-slate-100
//                 shadow-sm
//                 transition-all
//                 duration-300
//                 hover:-translate-y-2
//                 hover:shadow-2xl
//               "
//             >
//               <div className="relative h-72 overflow-hidden bg-gradient-to-br from-green-50 to-yellow-50">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   fill
//                   className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>

//               <div className="p-7">
//                 <span className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold">
//                   {product.concern}
//                 </span>

//                 <h3 className="mt-3 text-2xl font-bold text-green-900">
//                   {product.name}
//                 </h3>

//                 <p className="mt-4 text-2xl font-bold text-yellow-600">
//                   {product.price}
//                 </p>

//                 <div
//                   className="
//                     mt-7
//                     inline-flex
//                     items-center
//                     gap-2
//                     font-semibold
//                     text-green-700
//                     transition-all
//                     group-hover:text-yellow-500
//                   "
//                 >
//                   View Product
//                   <ArrowRight
//                     size={18}
//                     className="transition-transform group-hover:translate-x-1"
//                   />
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";

const relatedProducts = [
  {
    name: "Radiance Cream",
    slug: "radiance-cream",
    image: "/p2.png",
    price: "GH₵180",
    concern: "Dry Skin",
  },
  {
    name: "Hair Growth Oil",
    slug: "hair-growth-oil",
    image: "/p1.png",
    price: "GH₵250",
    concern: "Hair Growth",
  },
  {
    name: "Acne Repair Gel",
    slug: "acne-repair-gel",
    image: "/p2.png",
    price: "GH₵170",
    concern: "Acne",
  },
];

export default function RelatedProducts() {
  return (
    <section className="py-28 bg-gradient-to-b from-white via-green-50/40 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="uppercase tracking-[0.35em] text-yellow-500 font-semibold">
              You May Also Like
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-green-900">
              Complete Your Routine
            </h2>

            <p className="mt-5 max-w-2xl text-slate-600 leading-8">
              Carefully selected products that work beautifully together to
              enhance your skincare and haircare journey.
            </p>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 font-semibold text-green-700 hover:text-yellow-500 transition"
          >
            Browse Collection
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Products */}

        <div className="grid gap-10 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/shop/${product.slug}`}
              className="
                group
                relative
                overflow-hidden
                rounded-[34px]
                bg-white
                border
                border-green-100
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]
              "
            >
              {/* Decorative Glow */}

              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-yellow-300/10 blur-3xl" />

              {/* Image */}

              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-green-50 via-white to-yellow-50">
                <span
                  className="
                    absolute
                    left-5
                    top-5
                    z-20
                    rounded-full
                    bg-green-700
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-white
                  "
                >
                  {product.concern}
                </span>

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="
                    object-contain
                    p-10
                    transition-all
                    duration-700
                    group-hover:scale-110
                    group-hover:rotate-2
                  "
                />
              </div>

              {/* Content */}

              <div className="p-8">
                <div className="flex items-center gap-2 text-green-700">
                  <ShieldCheck size={16} />

                  <span className="text-sm font-medium">FDA Approved</span>
                </div>

                <h3 className="mt-4 text-2xl font-bold text-green-900 group-hover:text-green-700 transition">
                  {product.name}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Premium botanical formulation designed to deliver visible
                  results while remaining gentle on your skin.
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Starting From</p>

                    <p className="text-3xl font-bold text-yellow-600">
                      {product.price}
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-green-700
                      text-white
                      transition-all
                      duration-300
                      group-hover:bg-yellow-500
                      group-hover:scale-110
                    "
                  >
                    <ArrowRight
                      size={20}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>

                <div
                  className="
                    mt-8
                    rounded-2xl
                    bg-green-50
                    p-4
                    text-sm
                    text-green-700
                  "
                >
                  ✔ Suitable for daily use • Dermatologically considered •
                  Premium botanical ingredients
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}