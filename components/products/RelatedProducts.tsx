import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <span className="uppercase tracking-[0.35em] text-yellow-500 font-semibold">
              You May Also Like
            </span>

            <h2 className="mt-4 text-4xl font-bold text-green-900">
              Related Products
            </h2>
          </div>

          <Link
            href="/shop"
            className="hidden md:flex items-center gap-2 text-green-700 font-semibold hover:text-yellow-500 transition"
          >
            View All Products
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-8 mt-14 md:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/shop/${product.slug}`}
              className="
                group
                overflow-hidden
                rounded-3xl
                bg-white
                border
                border-slate-100
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-green-50 to-yellow-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <span className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold">
                  {product.concern}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-green-900">
                  {product.name}
                </h3>

                <p className="mt-4 text-2xl font-bold text-yellow-600">
                  {product.price}
                </p>

                <div
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-2
                    font-semibold
                    text-green-700
                    transition-all
                    group-hover:text-yellow-500
                  "
                >
                  View Product
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
