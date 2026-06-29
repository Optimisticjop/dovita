import Hero from "@/components/results/Hero";
import TransformationGallery from "@/components/results/TransformationGallery";
import SuccessStories from "@/components/results/SuccessStories";
import TreatmentCategories from "@/components/results/TreatmentCategories";
import ResultsDisclaimer from "@/components/results/ResultsDisclaimer";
import FinalCTA from "@/components/sections/FinalCTA";

export default function ResultsPage() {
  return (
    <>
      <Hero />
      <TransformationGallery />
      <SuccessStories />
      <TreatmentCategories />
      <ResultsDisclaimer />
      <FinalCTA />
    </>
  );
}
