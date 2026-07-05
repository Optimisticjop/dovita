"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createCategory, updateCategory } from "@/lib/actions/categories";

type Category = {
  id: string;
  name: string;
};

type Props = {
  mode: "create" | "edit";
  category?: Category;
};

export default function CategoryForm({ mode, category }: Props) {
  const router = useRouter();

  const [name, setName] = useState(category?.name || "");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim()) {
      alert("Category name is required.");
      return;
    }

    try {
      setLoading(true);

      if (mode === "create") {
        await createCategory(name);
      } else {
        await updateCategory(category!.id, name);
      }

      router.push("/admin/categories");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl space-y-6 rounded-xl bg-white p-6 shadow"
    >
      <div>
        <label className="mb-2 block font-medium">Category Name</label>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Hair Care"
          className="w-full rounded-lg border p-3"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-green-700 px-6 py-3 text-white"
      >
        {loading
          ? "Saving..."
          : mode === "create"
            ? "Save Category"
            : "Update Category"}
      </button>
    </form>
  );
}
