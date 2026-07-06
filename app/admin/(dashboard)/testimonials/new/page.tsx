import TestimonialForm from "@/components/admin/testimonials/TestimonialForm";

export default function NewTestimonialPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Add Testimonial
        </h1>

        <p className="mt-2 text-slate-500">
          Add a new customer review to display on the website.
        </p>
      </div>

      <div className="rounded-3xl border bg-white p-8 shadow-sm">
        <TestimonialForm />
      </div>
    </div>
  );
}