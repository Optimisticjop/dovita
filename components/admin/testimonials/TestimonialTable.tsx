"use client";

import Image from "next/image";
import Link from "next/link";

import DeleteTestimonialButton from "./DeleteTestimonialButton";

interface Testimonial {
  id: string;
  customer_name: string;
  location: string;
  testimonial: string;
  image: string;
  rating: number;
  created_at: string;
}

export default function TestimonialTable({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  if (testimonials.length === 0) {
    return (
      <div className="rounded-3xl border bg-white py-24 text-center shadow-sm">
        <h2 className="text-2xl font-bold text-slate-800">
          No Testimonials Yet
        </h2>

        <p className="mt-2 text-slate-500">
          Customer testimonials will appear here.
        </p>

        <Link
          href="/admin/testimonials/new"
          className="mt-8 inline-flex rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
        >
          + Add First Testimonial
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
                Customer
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                Rating
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                Review
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
            {testimonials.map((testimonial) => (
              <tr
                key={testimonial.id}
                className="border-b transition hover:bg-slate-50"
              >
                {/* Customer */}

                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.customer_name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {testimonial.customer_name}
                      </h3>

                      <p className="text-sm text-slate-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Rating */}

                <td className="px-6 py-5">
                  <div className="text-lg">
                    {"⭐".repeat(testimonial.rating)}
                  </div>
                </td>

                {/* Review */}

                <td className="max-w-md px-6 py-5">
                  <p className="line-clamp-2 text-sm leading-6 text-slate-600">
                    {testimonial.testimonial}
                  </p>
                </td>

                {/* Date */}

                <td className="whitespace-nowrap px-6 py-5 text-sm text-slate-500">
                  {new Date(testimonial.created_at).toLocaleDateString()}
                </td>

                {/* Actions */}

                <td className="px-6 py-5">
                  <div className="flex justify-end gap-3">
                    <Link
                      href={`/admin/testimonials/edit/${testimonial.id}`}
                      className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                    >
                      Edit
                    </Link>

                    <DeleteTestimonialButton id={testimonial.id} />
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
