"use client";

import { useTransition } from "react";

import { deleteResult } from "@/lib/actions/results";

export default function DeleteResultButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this result?",
    );

    if (!confirmed) return;

    startTransition(async () => {
      try {
        await deleteResult(id);
      } catch (error) {
        console.error(error);
        alert("Failed to delete result.");
      }
    });
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 disabled:opacity-60"
    >
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
}
