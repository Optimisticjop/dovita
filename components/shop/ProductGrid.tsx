import Image from "next/image";
import Link from "next/link";

import { getProducts } from "@/lib/actions/products";

type Props = {
  search?: string;
  category?: string;
  sort?: string;
};

export default async function ProductGrid({ search, category, sort }: Props) {
  const products = await getProducts({
    search,
    category,
    sort,
  });

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-3xl bg-white border shadow-sm hover:shadow-xl transition"
            >
              <div className="relative h-72 bg-green-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />
              </div>

              <div className="p-6">
                <span className="text-sm text-green-700">
                  {product.categories?.name}
                </span>

                <h3 className="mt-3 text-xl font-bold">{product.name}</h3>

                <p className="mt-3 line-clamp-3 text-slate-600">
                  {product.description}
                </p>

                <p className="mt-6 text-2xl font-bold text-yellow-600">
                  GH₵ {Number(product.price).toFixed(2)}
                </p>

                <Link
                  href={`/shop/${product.id}`}
                  className="mt-6 block rounded-full bg-green-700 py-3 text-center font-semibold text-white"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
