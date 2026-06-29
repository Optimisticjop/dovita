import Hero from "@/components/shop/Hero";
import SearchFilters from "@/components/shop/SearchFilters";
import ProductGrid from "@/components/shop/ProductGrid";
import Categories from "@/components/shop/Categories";
import WhyBuy from "@/components/shop/WhyBuy";

export default function ShopPage() {
  return (
    <>
      <Hero />
      <SearchFilters />
      <ProductGrid />
      <Categories />
      <WhyBuy />
    </>
  );
}
