import ProductForm from "@/components/admin/products/ProductForm";
import { getCategories } from "@/lib/actions/categories";

export default async function NewProductPage() {
  const categories = await getCategories();

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="mb-8 text-3xl font-bold">New Product</h1>

      <ProductForm categories={categories} mode="create" />
    </div>
  );
}
