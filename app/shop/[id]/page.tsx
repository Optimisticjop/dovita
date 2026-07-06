import { notFound } from "next/navigation";

import ProductGallery from "@/components/products/ProductGallery";
import ProductInfo from "@/components/products/ProductInfo";
import ProductBenefits from "@/components/products/ProductBenefits";
import Ingredients from "@/components/products/Ingredients";
import HowToUse from "@/components/products/HowToUse";
import ProductFAQ from "@/components/products/ProductFAQ";
import RelatedProducts from "@/components/products/RelatedProducts";
import FinalCTA from "@/components/sections/FinalCTA";

import { getProduct } from "@/lib/actions/products";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductGallery images={[product.image]} />

      <ProductInfo
        name={product.name}
        category={product.categories?.name ?? ""}
        price={Number(product.price)}
        description={product.description}
      />

      <ProductBenefits />

      <HowToUse />

      <Ingredients />

      <ProductFAQ />

      <RelatedProducts />

      <FinalCTA />
    </>
  );
}
