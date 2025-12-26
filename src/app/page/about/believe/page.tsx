import PageBanner from "@/src/components/ui/PageBanner";
import BeliefsSection from "@/src/components/about/BeliefsSection";
import CTA from "@/src/components/landing/CTA";

export default function BelievePage() {
  return (
    <>
      <PageBanner 
        title="What We Believe"
        subtitle="The foundational truths that shape our faith, guide our ministry, and unite our community in Christ."
        image="/images/bg3.JPG"
      />

      <BeliefsSection />
      <CTA />
    </>
  );
}
