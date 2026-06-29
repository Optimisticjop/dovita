import {
  UserRound,
  FlaskConical,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

const benefits = [
  {
    title: "Personalized Advice",
    description:
      "Receive recommendations based on your unique skin or hair concerns.",
    icon: UserRound,
  },
  {
    title: "Expert Formulation",
    description:
      "Our recommendations are built around carefully selected products.",
    icon: FlaskConical,
  },
  {
    title: "Targeted Solutions",
    description: "Address acne, pigmentation, dryness, hair growth and more.",
    icon: Sparkles,
  },
  {
    title: "Continuous Support",
    description:
      "We're here to support your beauty journey even after purchase.",
    icon: HeartHandshake,
  },
];

export default function WhyConsultation() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="uppercase tracking-[0.35em] text-yellow-500 font-semibold">
            Why Book
          </span>

          <h2 className="mt-4 text-5xl font-bold text-green-900">
            Personalized Care For Better Results
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mt-16">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-green-100 bg-gradient-to-br from-white to-green-50 p-8 hover:-translate-y-2 hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                  <Icon className="text-green-700" />
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
