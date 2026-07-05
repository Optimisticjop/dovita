import CategoryForm from "@/components/admin/categories/CategoryForm";

export default function NewCategoryPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">New Category</h1>

      <CategoryForm mode="create" />
    </div>
  );
}
