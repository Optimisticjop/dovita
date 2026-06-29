import ProductGallery from "@/components/products/ProductGallery";
import ProductInfo from "@/components/products/ProductInfo";
import ProductBenefits from "@/components/products/ProductBenefits";
import Ingredients from "@/components/products/Ingredients";
import HowToUse from "@/components/products/HowToUse";
import ProductFAQ from "@/components/products/ProductFAQ";
import RelatedProducts from "@/components/products/RelatedProducts";
import FinalCTA from "@/components/sections/FinalCTA";

export default function ProductPage() {
  return (
    <>
      <ProductGallery images={["/p1.png", "/p2.png", "/p1.png"]} />

      <ProductInfo
        name="Glow Radiance Serum"
        category="Skincare"
        concern="Hyperpigmentation"
        price="GH₵220"
        description="A lightweight brightening serum formulated to reduce dark spots, improve skin texture and reveal a healthy, radiant complexion."
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
