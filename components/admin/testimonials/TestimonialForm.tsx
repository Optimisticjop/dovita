"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { uploadTestimonialImage } from "@/lib/actions/upload";
import {
  createTestimonial,
  updateTestimonial,
} from "@/lib/actions/testimonials";

interface TestimonialFormProps {
  testimonial?: {
    id: string;
    customer_name: string;
    location: string;
    testimonial: string;
    image: string;
    rating: number;
  };
}

export default function TestimonialForm({ testimonial }: TestimonialFormProps) {
  const router = useRouter();

  const [customerName, setCustomerName] = useState(
    testimonial?.customer_name ?? "",
  );

  const [location, setLocation] = useState(testimonial?.location ?? "");

  const [review, setReview] = useState(testimonial?.testimonial ?? "");

  const [rating, setRating] = useState(testimonial?.rating ?? 5);

  const [imageUrl, setImageUrl] = useState(testimonial?.image ?? "");

  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  async function handleImageUpload(file: File) {
    try {
      setUploading(true);

      const url = await uploadTestimonialImage(file);

      setImageUrl(url);
    } catch (error) {
      console.error(error);
      alert("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!imageUrl) {
      alert("Please upload an image.");
      return;
    }

    try {
      setSaving(true);

      const payload = {
        customer_name: customerName,
        location,
        testimonial: review,
        image: imageUrl,
        rating,
      };

      if (testimonial) {
        await updateTestimonial(testimonial.id, payload);
      } else {
        await createTestimonial(payload);
      }

      router.push("/admin/testimonials");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 rounded-3xl border bg-white p-8 shadow-sm"
    >
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          {testimonial ? "Edit Testimonial" : "New Testimonial"}
        </h2>

        <p className="mt-2 text-slate-500">
          Showcase another happy Dovita customer.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">Customer Name</label>

          <input
            required
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full rounded-xl border p-4"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Location</label>

          <input
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-xl border p-4"
          />
        </div>
      </div>

      <div>
        <label className="mb-3 block font-medium">Rating</label>

        <div className="flex gap-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className={`rounded-xl border px-4 py-3 transition ${
                rating === star
                  ? "border-yellow-400 bg-yellow-100"
                  : "hover:bg-slate-50"
              }`}
            >
              {"⭐".repeat(star)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-2 block font-medium">Customer Review</label>

        <textarea
          required
          rows={6}
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full rounded-xl border p-4"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">Customer Photo</label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (file) {
              handleImageUpload(file);
            }
          }}
        />

        {uploading && <p className="mt-3 text-green-700">Uploading...</p>}

        {imageUrl && (
          <div className="relative mt-6 h-52 w-52 overflow-hidden rounded-2xl border">
            <Image
              src={imageUrl}
              alt="Preview"
              fill
              sizes="208px"
              className="object-cover"
            />
          </div>
        )}
      </div>

      <button
        disabled={saving || uploading}
        className="rounded-xl bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800 disabled:opacity-50"
      >
        {saving
          ? "Saving..."
          : testimonial
            ? "Update Testimonial"
            : "Create Testimonial"}
      </button>
    </form>
  );
}
