import Hero from "@/components/shop/Hero";
import Categories from "@/components/shop/Categories";
import WhyBuy from "@/components/shop/WhyBuy";
import SearchFilters from "@/components/shop/SearchFilters";
import ProductGrid from "@/components/shop/ProductGrid";

import { getCategories } from "@/lib/actions/categories";
import { getProducts } from "@/lib/actions/products";

type Props = {
  searchParams: Promise<{
    search?: string;
    category?: string;
    sort?: string;
  }>;
};

export default async function ShopPage({ searchParams }: Props) {
  const params = await searchParams;

  const categories = await getCategories();

  const filteredProducts = await getProducts({
    search: params.search,
    category: params.category,
    sort: params.sort,
  });

  return (
    <>
      <Hero />

      <SearchFilters total={filteredProducts.length} categories={categories} />

      <ProductGrid
        search={params.search}
        category={params.category}
        sort={params.sort}
      />

      <Categories />

      <WhyBuy />
    </>
  );
}
