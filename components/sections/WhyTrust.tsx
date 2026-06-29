export default function WhyTrust() {
  const items = [
    {
      title: "Natural Ingredients",
      desc: "Carefully selected botanical extracts that nourish and protect.",
      icon: "🌿",
    },
    {
      title: "African Skin Expertise",
      desc: "Created specifically for melanin-rich skin and hair.",
      icon: "✨",
    },
    {
      title: "FDA Approved",
      desc: "Our products are FDA approved, giving you confidence that they meet recognized safety and quality standards.",
      icon: "✅",
    },
    {
      title: "Visible Results",
      desc: "Designed to deliver noticeable improvements with consistency.",
      icon: "💚",
    },
    {
      title: "Safe & Gentle",
      desc: "Balanced formulations free from harsh chemicals.",
      icon: "🛡️",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-yellow-500 font-semibold uppercase tracking-[0.3em]">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-green-900">
            Why Thousands Trust Dovita
          </h2>

          <p className="mt-4 text-slate-600">
            Premium formulations backed by expertise, care, approval from FDA and a commitment to
            helping you look and feel your best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {items.map((item) => (
            <div
              key={item.title}
              className="
                bg-white
                rounded-3xl
                p-8
                border
                border-green-100
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="mt-5 text-xl font-bold text-green-900">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}