export default function ResultsPreview() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Real Results. Real Confidence.</h2>

        <p className="text-gray-600 mt-3">
          See transformations from our community.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl border p-4">
              <div className="h-48 bg-gradient-to-br from-green-100 to-yellow-50 rounded-lg" />
              <p className="text-sm mt-3 text-gray-600">
                Before & After Result #{i}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
