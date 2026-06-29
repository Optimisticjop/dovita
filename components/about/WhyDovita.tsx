import { Leaf, Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";

const items = [
  {
    title: "Premium Ingredients",
    description:
      "Every formula is crafted using carefully selected botanical extracts and high-quality active ingredients.",
    icon: Leaf,
  },
  {
    title: "African Beauty Expertise",
    description:
      "Specially developed to address the unique skincare and haircare needs of African men and women.",
    icon: Sparkles,
  },
  {
    title: "Quality Assured",
    description:
      "Each product undergoes careful formulation and quality checks to ensure consistency and effectiveness.",
    icon: ShieldCheck,
  },
  {
    title: "Customer Focused",
    description:
      "Your confidence is our priority. We provide personalized guidance every step of your beauty journey.",
    icon: HeartHandshake,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">
            Why Choose Dovita
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-green-900">
            Beauty Backed By Quality
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">
            We combine nature, science and expertise to create products that
            nourish, restore and inspire confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-3xl
                  bg-gradient-to-br
                  from-white
                  to-green-50
                  border
                  border-green-100
                  p-8
                  shadow-sm
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 group-hover:bg-yellow-400 group-hover:text-white transition">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-green-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
