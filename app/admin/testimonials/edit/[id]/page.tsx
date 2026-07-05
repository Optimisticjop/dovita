import { getTestimonial } from "@/lib/actions/testimonials";

import TestimonialForm from "@/components/admin/testimonials/TestimonialForm";

export default async function EditTestimonialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const testimonial = await getTestimonial(id);

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Edit Testimonial
        </h1>

        <p className="mt-2 text-slate-500">
          Update this customer testimonial.
        </p>
      </div>

      <div className="rounded-3xl border bg-white p-8 shadow-sm">
        <TestimonialForm testimonial={testimonial} />
      </div>
    </div>
  );
}