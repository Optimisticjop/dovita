"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteCategory } from "@/lib/actions/categories";

type Props = {
  id: string;
};

export default function CategoryActions({ id }: Props) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = confirm("Are you sure you want to delete this category?");

    if (!confirmed) return;

    try {
      await deleteCategory(id);

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to delete category.");
    }
  }

  return (
    <div className="flex gap-3">
      <Link
        href={`/admin/categories/${id}/edit`}
        className="text-blue-600 hover:underline"
      >
        Edit
      </Link>

      <button onClick={handleDelete} className="text-red-600 hover:underline">
        Delete
      </button>
    </div>
  );
}
