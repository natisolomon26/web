import PageBanner from "@/src/components/ui/PageBanner";
import CoreValuesSection from "@/src/components/about/CoreValueSection";
import CTA from "@/src/components/landing/CTA";

export default function WhoWeArePage() {
  return (
    <>
      <PageBanner 
        title="Our Core Values"
        subtitle="The foundational truths that shape our faith, guide our ministry, and unite our community in Christ."
        image="/images/bg3.JPG"
      />

      <CoreValuesSection />
      <CTA />
    </>
  );
}
