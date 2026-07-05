import Link from "next/link";

import { getCategories } from "@/lib/actions/categories";

import CategoryTable from "@/components/admin/categories/CategoryTable";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-700">
            Catalogue
          </span>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">Categories</h1>

          <p className="mt-1 text-slate-500">
            Organize products into categories for easier browsing.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-2xl border border-green-100 bg-green-50 px-6 py-4 text-center">
            <p className="text-sm text-slate-500">Total</p>

            <h2 className="text-3xl font-bold text-green-700">
              {categories.length}
            </h2>
          </div>

          <Link
            href="/admin/categories/new"
            className="rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            + New Category
          </Link>
        </div>
      </div>

      <CategoryTable categories={categories} />
    </div>
  );
}
