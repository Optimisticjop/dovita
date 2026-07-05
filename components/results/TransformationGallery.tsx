import Image from "next/image";

import { getResults } from "@/lib/actions/results";

export default async function TransformationGallery() {
  const results = await getResults();

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="font-semibold uppercase tracking-[0.3em] text-yellow-500">
            Before & After
          </span>

          <h2 className="mt-4 text-5xl font-bold text-green-900">
            Real Client Results
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-600">
            Every transformation shown here reflects the journey of real
            customers using Dovita Organics products consistently.
          </p>
        </div>

        {results.length === 0 ? (
          <div className="mt-16 rounded-3xl border border-green-100 bg-green-50 py-20 text-center">
            <h3 className="text-2xl font-bold text-green-900">
              No Results Available
            </h3>

            <p className="mt-3 text-slate-600">
              Customer transformations will appear here once they are published.
            </p>
          </div>
        ) : (
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {results.map((result) => (
              <div
                key={result.id}
                className="overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="grid grid-cols-2">
                  <div className="relative h-72">
                    <Image
                      src={result.before_image}
                      alt={`${result.title} Before`}
                      fill
                      sizes="(max-width:1024px) 50vw, 25vw"
                      className="object-cover"
                    />

                    <div className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
                      Before
                    </div>
                  </div>

                  <div className="relative h-72">
                    <Image
                      src={result.after_image}
                      alt={`${result.title} After`}
                      fill
                      sizes="(max-width:1024px) 50vw, 25vw"
                      className="object-cover"
                    />

                    <div className="absolute left-3 top-3 rounded-full bg-green-700 px-3 py-1 text-xs font-semibold text-white">
                      After
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-900">
                    {result.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {result.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
