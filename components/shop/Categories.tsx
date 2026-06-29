const categories = ["Skincare", "Haircare", "Glow Essentials", "Best Sellers"];

export default function Categories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-900">
          Browse By Category
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-3xl bg-gradient-to-br from-green-50 to-yellow-50 border border-green-100 p-10 text-center hover:-translate-y-2 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold text-green-900">{category}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
