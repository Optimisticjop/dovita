import CategoryForm from "@/components/admin/categories/CategoryForm";
import { getCategory } from "@/lib/actions/categories";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditCategoryPage({ params }: Props) {
  const { id } = await params;

  const category = await getCategory(id);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Edit Category</h1>

      <CategoryForm mode="edit" category={category} />
    </div>
  );
}
