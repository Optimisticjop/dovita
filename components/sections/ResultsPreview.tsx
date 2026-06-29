export default function ResultsPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-yellow-500 font-semibold uppercase tracking-[0.3em]">
            Real Results
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-green-900">
            Real Transformations.
            <br />
            Real Confidence.
          </h2>

          <p className="mt-4 text-slate-600">
            Discover how Dovita products have helped customers restore healthy
            skin and stronger hair.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                border
                border-green-100
                shadow-sm
                hover:shadow-xl
                transition-all
              "
            >
              <div className="grid grid-cols-2">
                <div className="h-64 bg-slate-200 flex items-center justify-center">
                  Before
                </div>

                <div className="h-64 bg-green-100 flex items-center justify-center">
                  After
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-green-900">
                  Hyperpigmentation Treatment
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Visible skin tone improvement after consistent use.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
