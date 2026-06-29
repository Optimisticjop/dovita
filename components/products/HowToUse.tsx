const steps = [
  "Cleanse your skin thoroughly",
  "Apply a small amount",
  "Massage gently until absorbed",
  "Use sunscreen during the day",
];

export default function HowToUse() {
  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <span className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">
            Directions
          </span>

          <h2 className="mt-4 text-4xl font-bold text-green-900">How To Use</h2>
        </div>

        <div className="mt-16">
          {steps.map((step, index) => (
            <div key={step} className="flex items-start gap-6">
              <div className="flex flex-col items-center">
                <div className="h-14 w-14 rounded-full bg-green-700 text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>

                {index !== steps.length - 1 && (
                  <div className="w-[2px] h-20 bg-green-200" />
                )}
              </div>

              <div className="pt-3 pb-10">
                <p className="text-lg text-slate-700">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
