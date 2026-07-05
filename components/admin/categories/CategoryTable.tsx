import CategoryActions from "./CategoryActions";

type Category = {
  id: string;
  name: string;
  created_at: string;
};

type Props = {
  categories: Category[];
};

export default function CategoryTable({ categories }: Props) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Created</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category) => (
            <tr key={category.id} className="border-t">
              <td className="p-4">{category.name}</td>

              <td className="p-4">
                {new Date(category.created_at).toLocaleDateString()}
              </td>

              <td className="p-4">
                <CategoryActions id={category.id} />
              </td>
            </tr>
          ))}

          {categories.length === 0 && (
            <tr>
              <td colSpan={3} className="p-6 text-center text-gray-500">
                No categories found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
