import { Search } from "lucide-react";

export default function SearchFilters() {
  return (
    <section className="sticky top-20 z-20 bg-white/95 backdrop-blur border-y border-green-100 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <h3 className="text-2xl font-bold text-green-900">
              Find Your Perfect Product
            </h3>

            <p className="mt-1 text-slate-600">
              Showing 12 products
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Search */}
            <div className="relative min-w-[280px] flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search products..."
                className="
                  w-full
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  py-3
                  pl-12
                  pr-5
                  outline-none
                  focus:border-green-700
                "
              />
            </div>

            {/* Category */}
            <select className="rounded-full border border-slate-200 bg-white px-5 py-3 outline-none focus:border-green-700">
              <option>All Categories</option>
              <option>Skincare</option>
              <option>Haircare</option>
              <option>Body Care</option>
            </select>

            {/* Concern */}
            <select className="rounded-full border border-slate-200 bg-white px-5 py-3 outline-none focus:border-green-700">
              <option>All Concerns</option>
              <option>Acne</option>
              <option>Hyperpigmentation</option>
              <option>Dry Skin</option>
              <option>Hair Growth</option>
            </select>

            {/* Sort */}
            <select className="rounded-full border border-slate-200 bg-white px-5 py-3 outline-none focus:border-green-700">
              <option>Newest</option>
              <option>Best Selling</option>
              <option>Price: Low → High</option>
              <option>Price: High → Low</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}