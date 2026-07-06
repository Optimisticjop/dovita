import Link from "next/link";

import { getTestimonials } from "@/lib/actions/testimonials";

import TestimonialTable from "@/components/admin/testimonials/TestimonialTable";

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-700">
            Customer Reviews
          </span>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Testimonials
          </h1>

          <p className="mt-1 text-slate-500">
            Manage customer reviews and success stories displayed across the
            website.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-2xl border border-amber-100 bg-amber-50 px-6 py-4 text-center">
            <p className="text-sm text-slate-500">Total Testimonials</p>

            <h2 className="text-3xl font-bold text-amber-700">
              {testimonials.length}
            </h2>
          </div>

          <Link
            href="/admin/testimonials/new"
            className="rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            + Add Testimonial
          </Link>
        </div>
      </div>

      <TestimonialTable testimonials={testimonials} />
    </div>
  );
}
