import ProductActions from "./ProductActions";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string | null;
  created_at: string;
  categories?: {
    name: string;
  };
};

type Props = {
  products: Product[];
};

export default function ProductTable({ products }: Props) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Image</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Category</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t">
              <td className="p-4">
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-16 w-16 rounded object-cover"
                  />
                )}
              </td>

              <td className="p-4">{product.name}</td>

              <td className="p-4">{product.categories?.name ?? "-"}</td>

              <td className="p-4">GH₵ {Number(product.price).toFixed(2)}</td>

              <td className="p-4">
                <ProductActions id={product.id} />
              </td>
            </tr>
          ))}

          {products.length === 0 && (
            <tr>
              <td colSpan={5} className="p-8 text-center text-gray-500">
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
