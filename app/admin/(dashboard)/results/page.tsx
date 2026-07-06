import Link from "next/link";

import { getResults } from "@/lib/actions/results";

import ResultTable from "@/components/admin/results/ResultTable";

export default async function ResultsPage() {
  const results = await getResults();

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-700">
            Success Stories
          </span>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">Results</h1>

          <p className="mt-1 text-slate-500">
            Manage customer transformation photos and showcase treatment
            outcomes.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-2xl border border-purple-100 bg-purple-50 px-6 py-4 text-center">
            <p className="text-sm text-slate-500">Total Results</p>

            <h2 className="text-3xl font-bold text-purple-700">
              {results.length}
            </h2>
          </div>

          <Link
            href="/admin/results/new"
            className="rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            + Add Result
          </Link>
        </div>
      </div>

      <ResultTable results={results} />
    </div>
  );
}
