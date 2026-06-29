// export default function FeaturedProducts() {
//   const products = [
//     { name: "Dovita Glow Serum", price: "$25" },
//     { name: "Radiance Face Cream", price: "$30" },
//     { name: "Hair Strength Oil", price: "$28" },
//   ];

//   return (
//     <section className="py-20 bg-green-50">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center">Featured Products</h2>

//         <div className="grid md:grid-cols-3 gap-6 mt-10">
//           {products.map((p, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-xl p-6 border border-green-100"
//             >
//               <div className="h-40 bg-gradient-to-br from-green-100 to-yellow-50 rounded-lg mb-4" />
//               <h3 className="font-semibold">{p.name}</h3>
//               <p className="text-green-800 font-bold mt-2">{p.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";

export default function FeaturedProducts() {
  const products = [
    {
      name: "Dovita Glow Serum",
      image: "/p1.png",
      benefit: "Brightens and restores skin radiance.",
    },
    {
      name: "Radiance Face Cream",
      image: "/p2.png",
      benefit: "Deep hydration for healthy glowing skin.",
    },
    {
      name: "Hair Strength Oil",
      image: "/p1.png",
      benefit: "Strengthens roots and promotes growth.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-yellow-500 font-semibold uppercase tracking-[0.3em]">
            Featured Collection
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-green-900">
            Premium Beauty Solutions
          </h2>

          <p className="mt-4 text-slate-600">
            Carefully formulated skincare and haircare solutions designed
            specifically for African skin and hair.
          </p>
        </div>

        {/* Products */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {products.map((product) => (
            <div
              key={product.name}
              className="
                group
                rounded-3xl
                bg-gradient-to-b
                from-white
                to-green-50
                border
                border-green-100
                p-8
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >
              <div className="flex justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={180}
                  height={220}
                  className="
                    w-[120px]
                    h-[160px]
                    object-contain
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-green-900">
                {product.name}
              </h3>

              <p className="mt-3 text-slate-600">{product.benefit}</p>

              <Link
                href="/consultation"
                className="
                  inline-flex
                  mt-6
                  text-green-700
                  font-semibold
                  hover:text-yellow-500
                "
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}