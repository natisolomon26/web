import PageBanner from "@/src/components/ui/PageBanner";
import BeliefsSection from "@/src/components/about/BeliefsSection";

export default function BelievePage() {
  return (
    <>
      <PageBanner 
        title="What We Believe"
        subtitle="Our foundational Christian convictions"
        image="/images/bg3.JPG"
      />

      <BeliefsSection />
    </>
  );
}
