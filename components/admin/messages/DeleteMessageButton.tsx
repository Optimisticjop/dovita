"use client";

import { useTransition } from "react";

import { Trash2 } from "lucide-react";

import { deleteContactMessage } from "@/lib/actions/contact";

export default function DeleteMessageButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    const confirmed = window.confirm("Delete this message permanently?");

    if (!confirmed) return;

    startTransition(async () => {
      await deleteContactMessage(id);
    });
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 disabled:opacity-50"
    >
      <div className="flex items-center gap-2">
        <Trash2 size={16} />

        {isPending ? "Deleting..." : "Delete"}
      </div>
    </button>
  );
}
