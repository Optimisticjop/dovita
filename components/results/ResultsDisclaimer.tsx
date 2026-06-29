import { CheckCircle2 } from "lucide-react";

const points = [
  "Results vary from person to person.",
  "Consistency is key to achieving the best outcome.",
  "Healthy lifestyle choices support better results.",
  "Recommendations are personalized after consultation.",
];

export default function ResultsDisclaimer() {
  return (
    <section className="py-24 bg-gradient-to-r from-green-900 to-green-800 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="uppercase tracking-[0.3em] text-yellow-400 font-semibold">
          Transparency
        </span>

        <h2 className="mt-4 text-5xl font-bold">Every Journey Is Unique</h2>

        <p className="mt-6 text-green-100 leading-8">
          While many clients experience significant improvements, individual
          results depend on skin type, consistency, lifestyle and following the
          recommended routine.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-14 text-left">
          {points.map((point) => (
            <div
              key={point}
              className="flex items-start gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur"
            >
              <CheckCircle2 className="text-yellow-400 mt-1" />

              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
