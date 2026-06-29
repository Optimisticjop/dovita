import { Sparkles, Droplets, ShieldCheck, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Brightens Skin",
    desc: "Helps restore a radiant and even complexion.",
  },
  {
    icon: ShieldCheck,
    title: "Fades Dark Spots",
    desc: "Targets pigmentation and discoloration.",
  },
  {
    icon: Droplets,
    title: "Deep Hydration",
    desc: "Keeps your skin moisturized throughout the day.",
  },
  {
    icon: Leaf,
    title: "Gentle Formula",
    desc: "Suitable for most skin types.",
  },
];

export default function ProductBenefits() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">
            Benefits
          </span>

          <h2 className="mt-4 text-4xl font-bold text-green-900">
            Why You'll Love It
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-3xl bg-gradient-to-br from-green-50 to-yellow-50 p-8 border border-green-100 hover:-translate-y-2 hover:shadow-xl transition"
            >
              <div className="h-14 w-14 rounded-2xl bg-white shadow flex items-center justify-center">
                <Icon className="text-green-700" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-green-900">{title}</h3>

              <p className="mt-3 text-slate-600 leading-7">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
