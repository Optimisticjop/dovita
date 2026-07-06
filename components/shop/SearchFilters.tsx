"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

type Category = {
  id: string;
  name: string;
};

type Props = {
  total: number;
  categories: Category[];
};

export default function SearchFilters({ total, categories }: Props) {
  const router = useRouter();

  const params = useSearchParams();

  const [pending, startTransition] = useTransition();

  function update(key: string, value: string) {
    const search = new URLSearchParams(params);

    if (value) {
      search.set(key, value);
    } else {
      search.delete(key);
    }

    startTransition(() => {
      router.push(`/shop?${search.toString()}`);
    });
  }

  return (
    <section className="sticky top-20 z-20 border-y border-green-100 bg-white/95 py-8 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-green-900">
            Find Your Perfect Product
          </h3>

          <p className="mt-1 text-slate-600">Showing {total} products</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="relative min-w-[280px]">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              defaultValue={params.get("search") ?? ""}
              onChange={(e) => update("search", e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-full border border-slate-200 py-3 pl-12 pr-5"
            />
          </div>

          <select
            defaultValue={params.get("category") ?? ""}
            onChange={(e) => update("category", e.target.value)}
            className="rounded-full border border-slate-200 px-5 py-3"
          >
            <option value="">All Categories</option>

            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <select
            defaultValue={params.get("sort") ?? ""}
            onChange={(e) => update("sort", e.target.value)}
            className="rounded-full border border-slate-200 px-5 py-3"
          >
            <option value="">Newest</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>
        </div>
      </div>
    </section>
  );
}
