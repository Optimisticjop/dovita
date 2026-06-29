import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const products = [
  {
    name: "Glow Serum",
    image: "/p1.png",
    price: "GH₵ 220",
    concern: "Hyperpigmentation",
    description: "Brightens skin and reduces stubborn dark spots.",
    badge: "Best Seller",
  },
  {
    name: "Radiance Cream",
    image: "/p2.png",
    price: "GH₵ 180",
    concern: "Dry Skin",
    description: "Deep hydration for soft and healthy skin.",
    badge: "Popular",
  },
  {
    name: "Hair Growth Oil",
    image: "/p1.png",
    price: "GH₵ 250",
    concern: "Hair Growth",
    description: "Strengthens roots and promotes healthy hair growth.",
    badge: "New",
  },
  {
    name: "Acne Repair Gel",
    image: "/p2.png",
    price: "GH₵ 170",
    concern: "Acne",
    description: "Helps reduce acne and prevent future breakouts.",
    badge: "Featured",
  },
];

export default function ProductGrid() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-green-900">
              Featured Products
            </h2>

            <p className="mt-2 text-slate-600">
              Showing {products.length} premium products
            </p>
          </div>
        </div>

        {/* Products */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="
                group
                overflow-hidden
                rounded-3xl
                bg-white
                border
                border-green-100
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-green-50 via-white to-yellow-50">
                {/* Badge */}
                <span className="absolute left-4 top-4 z-10 rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-white shadow">
                  {product.badge}
                </span>

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    {product.concern}
                  </span>

                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star fill="currentColor" size={15} />
                    <span className="text-sm font-medium">4.9</span>
                  </div>
                </div>

                <h3 className="mt-4 text-xl font-bold text-green-900">
                  {product.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {product.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-2xl font-bold text-yellow-600">
                    {product.price}
                  </p>

                  <span className="text-sm font-medium text-green-700">
                    In Stock
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  <Link
                    href="/shop/glow-serum"
                    className="
                      block
                      w-full
                      rounded-full
                      bg-green-800
                      py-3
                      text-center
                      font-semibold
                      text-white
                      hover:bg-green-700
                      transition
                    "
                  >
                    View Product
                  </Link>

                  <a
                    href={`https://wa.me/233241876182?text=${encodeURIComponent(
                      `Hello Dovita Organics, I'm interested in the ${product.name}.`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      block
                      w-full
                      rounded-full
                      border
                      border-green-200
                      py-3
                      text-center
                      font-medium
                      text-green-800
                      hover:bg-green-50
                      transition
                    "
                  >
                    WhatsApp Inquiry
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center gap-3">
          <button className="rounded-full border px-5 py-2 hover:bg-green-50">
            Previous
          </button>

          <button className="rounded-full bg-green-800 px-5 py-2 text-white">
            1
          </button>

          <button className="rounded-full border px-5 py-2 hover:bg-green-50">
            2
          </button>

          <button className="rounded-full border px-5 py-2 hover:bg-green-50">
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
