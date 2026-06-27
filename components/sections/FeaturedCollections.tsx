export default function FeaturedCollections() {
  const collections = [
    { name: "Glow Kit", tag: "Brightening" },
    { name: "Acne Control", tag: "Clear Skin" },
    { name: "Hair Growth Set", tag: "Strength" },
    { name: "Hyperpigmentation Fix", tag: "Tone Repair" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Featured Collections</h2>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {collections.map((c, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 hover:shadow-md transition"
            >
              <div className="h-32 bg-gradient-to-br from-green-100 to-yellow-50 rounded-lg mb-4" />
              <h3 className="font-semibold">{c.name}</h3>
              <p className="text-sm text-green-700">{c.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
