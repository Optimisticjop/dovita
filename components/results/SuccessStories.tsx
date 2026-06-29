const stories = [
  {
    name: "Ama",
    location: "Accra",
    quote:
      "My confidence has completely changed. My skin has never looked this healthy.",
  },
  {
    name: "Efua",
    location: "Kumasi",
    quote: "I struggled with acne for years until I found Dovita Organics.",
  },
  {
    name: "Naa",
    location: "Takoradi",
    quote: "My hair is thicker, healthier and growing faster than ever.",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">
            Client Stories
          </span>

          <h2 className="mt-4 text-5xl font-bold text-green-900">
            Confidence Restored
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {stories.map((story) => (
            <div
              key={story.name}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <div className="text-yellow-500 text-2xl">★★★★★</div>

              <p className="mt-6 leading-8 text-slate-600">"{story.quote}"</p>

              <div className="mt-8">
                <h3 className="font-bold text-green-900">{story.name}</h3>
                <p className="text-slate-500">{story.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
