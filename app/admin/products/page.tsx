import Link from "next/link";

import { getProducts } from "@/lib/actions/products";

import ProductTable from "@/components/admin/products/ProductTable";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-700">
            Inventory
          </span>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">Products</h1>

          <p className="mt-1 text-slate-500">
            Manage products, pricing, stock availability and featured items.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-2xl border border-yellow-100 bg-yellow-50 px-6 py-4 text-center">
            <p className="text-sm text-slate-500">Products</p>

            <h2 className="text-3xl font-bold text-yellow-700">
              {products.length}
            </h2>
          </div>

          <Link
            href="/admin/products/new"
            className="rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            + Add Product
          </Link>
        </div>
      </div>

      <ProductTable products={products} />
    </div>
  );
}
