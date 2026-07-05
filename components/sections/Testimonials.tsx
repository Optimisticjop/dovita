import Image from "next/image";

import { getTestimonials } from "@/lib/actions/testimonials";

export default async function Testimonials() {
  const testimonials = await getTestimonials();

  if (testimonials.length === 0) return null;

  return (
    <section className="bg-green-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-semibold uppercase tracking-[0.3em] text-yellow-500">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-bold text-green-900 lg:text-5xl">
            Loved By Our Clients
          </h2>

          <p className="mt-4 text-slate-600">
            Every testimonial reflects the confidence our customers have gained
            through consistent care and personalized skincare solutions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group rounded-3xl border border-green-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-green-100">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.customer_name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-green-900">
                    {testimonial.customer_name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              <div className="mt-6 text-xl">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <span key={index}>⭐</span>
                ))}
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
