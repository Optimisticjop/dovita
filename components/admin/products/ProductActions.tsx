"use client";

import Link from "next/link";
import { deleteProduct } from "@/lib/actions/products";

type Props = {
  id: string;
};

export default function ProductActions({ id }: Props) {
  async function handleDelete() {
    const ok = confirm("Delete this product?");

    if (!ok) return;

    await deleteProduct(id);
  }

  return (
    <div className="flex gap-3">
      <Link
        href={`/admin/products/${id}/edit`}
        className="rounded bg-blue-600 px-3 py-1 text-white"
      >
        Edit
      </Link>

      <button
        onClick={handleDelete}
        className="rounded bg-red-600 px-3 py-1 text-white"
      >
        Delete
      </button>
    </div>
  );
}
