import Image from "next/image";
import Link from "next/link";

import { getResults } from "@/lib/actions/results";

export default async function ResultsPreview() {
  const results = await getResults();

  const featuredResults = results.slice(0, 3);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-semibold uppercase tracking-[0.3em] text-yellow-500">
            Real Results
          </span>

          <h2 className="mt-4 text-4xl font-bold text-green-900 lg:text-5xl">
            Real Transformations.
            <br />
            Real Confidence.
          </h2>

          <p className="mt-4 text-slate-600">
            Discover how Dovita Organics has helped customers restore healthier
            skin and stronger hair through consistent care.
          </p>
        </div>

        {featuredResults.length === 0 ? (
          <div className="mt-16 rounded-3xl border border-green-100 bg-green-50 py-16 text-center">
            <h3 className="text-2xl font-bold text-green-900">
              Results Coming Soon
            </h3>

            <p className="mt-3 text-slate-600">
              Customer transformation stories will appear here soon.
            </p>
          </div>
        ) : (
          <>
            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              {featuredResults.map((result) => (
                <div
                  key={result.id}
                  className="overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="grid grid-cols-2">
                    <div className="relative h-64">
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

                    <div className="relative h-64">
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

                    <p className="mt-3 line-clamp-3 text-slate-600">
                      {result.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/results"
                className="inline-flex rounded-full bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800"
              >
                View More Results
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
