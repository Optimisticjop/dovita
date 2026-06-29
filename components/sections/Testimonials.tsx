export default function Testimonials() {
  const testimonials = [
    {
      name: "Ama K.",
      review:
        "My skin became noticeably brighter within a few weeks. I finally found products that work for me.",
    },
    {
      name: "Marielle B.",
      review:
        "The hair treatment routine helped reduce breakage and improve growth.",
    },
    {
      name: "Fidel P.",
      review:
        "Professional consultation and amazing products. Highly recommended.",
    },
  ];

  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-yellow-500 font-semibold uppercase tracking-[0.3em]">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-bold text-green-900">
            Loved By Our Clients
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="
                bg-white
                p-8
                rounded-3xl
                shadow-sm
                border
                border-green-100
              "
            >
              <div className="text-yellow-500 text-xl">★★★★★</div>

              <p className="mt-4 text-slate-600">"{item.review}"</p>

              <h4 className="mt-6 font-bold text-green-900">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
