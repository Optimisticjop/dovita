"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createProduct, updateProduct } from "@/lib/actions/products";
import { uploadProductImage } from "@/lib/actions/upload";

type Props = {
  mode: "create" | "edit";

  categories: {
    id: string;
    name: string;
  }[];

  product?: any;
};

export default function ProductForm({ categories, mode, product }: Props) {
  const router = useRouter();

  const [categoryId, setCategoryId] = useState(product?.category_id ?? "");

  const [name, setName] = useState(product?.name ?? "");

  const [price, setPrice] = useState(product?.price ?? 0);

  const [description, setDescription] = useState(product?.description ?? "");

  const [imageFile, setImageFile] = useState<File | null>(null);

  const [saving, setSaving] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setSaving(true);

      let image = product?.image ?? "";

      if (imageFile) {
        image = await uploadProductImage(imageFile);
      }

      const payload = {
        category_id: categoryId,
        name,
        price: Number(price),
        description,
        image,
      };

      if (mode === "create") {
        await createProduct(payload);
      } else {
        await updateProduct(product!.id, payload);
      }

      router.push("/admin/products");
      router.refresh();
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl bg-white p-8 shadow"
    >
      <h1 className="text-2xl font-bold">
        {mode === "create" ? "New Product" : "Edit Product"}
      </h1>

      <div>
        <label className="mb-2 block font-medium">Category</label>

        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="w-full rounded-lg border p-3"
          required
        >
          <option value="">Select Category</option>

          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block font-medium">Product Name</label>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border p-3"
          required
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">Price</label>

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full rounded-lg border p-3"
          required
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">Description</label>

        <textarea
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded-lg border p-3"
          required
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">Product Image</label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
        />

        {product?.image && (
          <img
            src={product.image}
            alt={product.name}
            className="mt-4 h-28 rounded-lg"
          />
        )}
      </div>

      <button
        disabled={saving}
        className="rounded-lg bg-green-700 px-6 py-3 font-semibold text-white"
      >
        {saving
          ? "Saving..."
          : mode === "create"
            ? "Create Product"
            : "Update Product"}
      </button>
    </form>
  );
}
