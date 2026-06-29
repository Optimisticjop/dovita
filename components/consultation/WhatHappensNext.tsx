const steps = [
  "Submit Consultation",
  "Our Team Reviews",
  "Personalized Recommendation",
  "Start Your Routine",
];

export default function WhatHappensNext() {
  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">
            Our Process
          </span>

          <h2 className="mt-4 text-4xl font-bold text-green-900">
            What Happens Next?
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-10 mt-16">
          {steps.map((step, index) => (
            <div
              key={step}
              className="relative bg-white rounded-3xl shadow-sm p-8 text-center"
            >
              <div className="mx-auto h-16 w-16 rounded-full bg-green-800 text-white flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>

              <h3 className="mt-6 font-semibold text-green-900">{step}</h3>

              {index < 3 && (
                <div className="hidden lg:block absolute top-8 left-full w-10 h-[2px] bg-green-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
