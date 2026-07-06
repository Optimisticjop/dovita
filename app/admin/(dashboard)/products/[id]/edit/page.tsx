import { notFound } from "next/navigation";

import ProductForm from "@/components/admin/products/ProductForm";

import { getProduct } from "@/lib/actions/products";
import { getCategories } from "@/lib/actions/categories";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditProductPage({ params }: Props) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  const categories = await getCategories();

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-8 text-3xl font-bold">Edit Product</h1>

      <ProductForm mode="edit" product={product} categories={categories} />
    </div>
  );
}
