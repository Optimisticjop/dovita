"use client";

import { useTransition } from "react";
import { Trash2 } from "lucide-react";

import { deleteTestimonial } from "@/lib/actions/testimonials";

export default function DeleteTestimonialButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    const confirmed = window.confirm("Delete this testimonial?");

    if (!confirmed) return;

    startTransition(async () => {
      await deleteTestimonial(id);
    });
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 disabled:opacity-60"
    >
      <Trash2 size={16} />

      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
}
