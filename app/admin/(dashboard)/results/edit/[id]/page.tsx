import Link from "next/link";

import { getResult } from "@/lib/actions/results";

import ResultForm from "@/components/admin/results/ResultForm";

export default async function EditResultPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const result = await getResult(id);

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/admin/results"
          className="text-sm text-green-700 hover:underline"
        >
          ← Back to Results
        </Link>

        <h1 className="mt-2 text-3xl font-bold">Edit Result</h1>

        <p className="mt-1 text-slate-500">
          Update transformation information.
        </p>
      </div>

      <ResultForm result={result} />
    </div>
  );
}
