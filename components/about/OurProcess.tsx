import {
  ClipboardList,
  SearchCheck,
  FlaskConical,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Share your skin or hair concerns with our beauty experts.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Assessment",
    description: "We carefully assess your beauty needs and desired results.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Recommendation",
    description: "Receive a personalized skincare or haircare routine.",
    icon: FlaskConical,
  },
  {
    number: "04",
    title: "Healthy Results",
    description: "Enjoy healthier skin, stronger hair and renewed confidence.",
    icon: Sparkles,
  },
];

export default function OurProcess() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">
            Our Process
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-green-900">
            Your Journey To Natural Beauty
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">
            We believe every beauty journey is unique. Our personalized process
            helps you achieve lasting, healthy results.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-1 bg-green-100" />

          <div className="grid lg:grid-cols-4 gap-12 relative">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="text-center relative">
                  <div className="mx-auto relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-700 to-yellow-500 text-white shadow-xl">
                    <Icon size={32} />
                  </div>

                  <div className="mt-6">
                    <span className="text-yellow-500 font-semibold">
                      Step {step.number}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-green-900">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-slate-600 leading-7">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
