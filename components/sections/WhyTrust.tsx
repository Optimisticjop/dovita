export default function WhyTrust() {
  const items = [
    {
      title: "Natural Ingredients",
      desc: "Carefully selected botanical extracts for safe and effective results.",
    },
    {
      title: "African Skin Focused",
      desc: "Formulated specifically for melanin-rich skin and hair needs.",
    },
    {
      title: "Visible Results",
      desc: "Clinically inspired formulations designed for real transformation.",
    },
    {
      title: "Safe & Gentle",
      desc: "No harsh chemicals. Only balanced, skin-friendly formulations.",
    },
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-900">
          Why Thousands Trust Dovita
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-green-100"
            >
              <h3 className="font-semibold text-green-800">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
