"use client";

import Image from "next/image";
import Link from "next/link";

import DeleteResultButton from "./DeleteResultButton";

interface Result {
  id: string;
  title: string;
  description: string;
  before_image: string;
  after_image: string;
  created_at: string;
}

export default function ResultTable({ results }: { results: Result[] }) {
  if (results.length === 0) {
    return (
      <div className="rounded-3xl border bg-white py-24 text-center shadow-sm">
        <h2 className="text-2xl font-bold text-slate-800">No Results Yet</h2>

        <p className="mt-2 text-slate-500">
          Customer transformation results will appear here.
        </p>

        <Link
          href="/admin/results/new"
          className="mt-8 inline-flex rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
        >
          + Add First Result
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b bg-slate-50">
            <tr className="text-left">
              <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                Before
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                After
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                Title
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                Description
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                Created
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold text-slate-600">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {results.map((result) => (
              <tr
                key={result.id}
                className="border-b transition hover:bg-slate-50"
              >
                {/* Before */}

                <td className="px-6 py-5">
                  <div className="relative h-20 w-20 overflow-hidden rounded-xl border">
                    <Image
                      src={result.before_image}
                      alt={result.title}
                      fill
                      sizes="80px"
                      className="object-cover transition duration-300 hover:scale-110"
                    />
                  </div>
                </td>

                {/* After */}

                <td className="px-6 py-5">
                  <div className="relative h-20 w-20 overflow-hidden rounded-xl border">
                    <Image
                      src={result.after_image}
                      alt={result.title}
                      fill
                      sizes="80px"
                      className="object-cover transition duration-300 hover:scale-110"
                    />
                  </div>
                </td>

                {/* Title */}

                <td className="px-6 py-5">
                  <div className="font-semibold text-slate-900">
                    {result.title}
                  </div>
                </td>

                {/* Description */}

                <td className="max-w-sm px-6 py-5">
                  <p className="line-clamp-2 text-sm text-slate-500">
                    {result.description}
                  </p>
                </td>

                {/* Date */}

                <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-500">
                  {new Date(result.created_at).toLocaleDateString()}
                </td>

                {/* Actions */}

                <td className="px-6 py-5">
                  <div className="flex justify-end gap-3">
                    <Link
                      href={`/admin/results/edit/${result.id}`}
                      className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                    >
                      Edit
                    </Link>

                    <DeleteResultButton id={result.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
