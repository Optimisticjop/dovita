import { Sparkles, Droplets, Leaf, HeartHandshake } from "lucide-react";

const items = [
  {
    title: "Hyperpigmentation",
    icon: Sparkles,
  },
  {
    title: "Acne Care",
    icon: HeartHandshake,
  },
  {
    title: "Dry Skin",
    icon: Droplets,
  },
  {
    title: "Hair Growth",
    icon: Leaf,
  },
];

export default function TreatmentCategories() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-green-100 p-8 text-center hover:-translate-y-2 hover:shadow-xl transition"
              >
                <div className="mx-auto h-16 w-16 rounded-2xl bg-green-100 flex items-center justify-center">
                  <Icon className="text-green-700" size={28} />
                </div>

                <h3 className="mt-6 font-bold text-xl text-green-900">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
