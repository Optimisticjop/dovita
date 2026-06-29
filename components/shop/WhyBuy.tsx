import { Truck, ShieldCheck, Leaf, MessageCircle } from "lucide-react";

const reasons = [
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Quick delivery across Ghana.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    desc: "Premium ingredients in every formulation.",
  },
  {
    icon: Leaf,
    title: "Natural Ingredients",
    desc: "Carefully selected botanical extracts.",
  },
  {
    icon: MessageCircle,
    title: "Expert Support",
    desc: "Personalized skincare guidance whenever you need it.",
  },
];

export default function WhyBuy() {
  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-green-900">
          Why Shop With Dovita?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-3xl bg-white p-8 shadow-sm hover:shadow-lg transition"
            >
              <div className="h-14 w-14 rounded-2xl bg-green-100 flex items-center justify-center">
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
