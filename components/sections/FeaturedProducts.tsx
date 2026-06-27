export default function FeaturedProducts() {
  const products = [
    { name: "Dovita Glow Serum", price: "$25" },
    { name: "Radiance Face Cream", price: "$30" },
    { name: "Hair Strength Oil", price: "$28" },
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Featured Products</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-green-100"
            >
              <div className="h-40 bg-gradient-to-br from-green-100 to-yellow-50 rounded-lg mb-4" />
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-green-800 font-bold mt-2">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
