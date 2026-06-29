import { Target, Eye, HeartHandshake } from "lucide-react";

const cards = [
  {
    title: "Our Mission",
    icon: Target,
    text: "To create safe, effective, affordable skincare and haircare products that helps women, men and children achieve their skin and hair goals without damage.",
  },
  {
    title: "Our Vision",
    icon: Eye,
    text: "To become a trusted, international skincare brand known for results-driven, science-backed natural, active-based and plant -based formulations.",
  },
  {
    title: "Our Values",
    icon: HeartHandshake,
    text: "Safety, Transparency, Results, Affordability and Continuous Improvement.",
  },
];

export default function MissionVision() {
  return (
    <section className="py-28 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-yellow-500 uppercase tracking-[0.3em] font-semibold">
            What Drives Us
          </span>

          <h2 className="mt-4 text-5xl font-bold text-green-900">
            Built On Purpose
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {cards.map(({ title, icon: Icon, text }) => (
            <div
              key={title}
              className="rounded-[30px] bg-white p-10 shadow-lg border border-green-100"
            >
              <div className="h-16 w-16 rounded-2xl bg-green-100 flex items-center justify-center">
                <Icon className="text-green-700" size={28} />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-green-900">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
