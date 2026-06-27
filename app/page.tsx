import Hero from "@/components/sections/Hero";
import WhyTrust from "@/components/sections/WhyTrust";
import FeaturedCollections from "@/components/sections/FeaturedCollections";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import ResultsPreview from "@/components/sections/ResultsPreview";
import BrandPromise from "@/components/sections/BrandPromise";
import FDAApproved from "@/components/sections/FDAApproved";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyTrust />
      <FeaturedCollections />
      <FeaturedProducts />
      <ResultsPreview />
      <BrandPromise />
      <FDAApproved />
      <FinalCTA />
    </>
  );
}
