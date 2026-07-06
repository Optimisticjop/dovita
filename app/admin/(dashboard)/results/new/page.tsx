import Link from "next/link";

import ResultForm from "@/components/admin/results/ResultForm";

export default function NewResultPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link
            href="/admin/results"
            className="text-sm text-green-700 hover:underline"
          >
            ← Back to Results
          </Link>

          <h1 className="mt-2 text-3xl font-bold">Add New Result</h1>

          <p className="mt-1 text-slate-500">
            Create a new before & after transformation.
          </p>
        </div>
      </div>

      <ResultForm />
    </div>
  );
}
