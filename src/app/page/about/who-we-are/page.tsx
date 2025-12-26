import PageBanner from "@/src/components/ui/PageBanner";
import WhoWeAreSection from "@/src/components/about/WhoWeAreSection";
import CTA from "@/src/components/landing/CTA";

export default function WhoWeArePage() {
  return (
    <>
      <PageBanner 
        title="Who We Are & What We Do"
        subtitle="A fellowship of students and graduates following Christ, growing together, and transforming campuses across Ethiopia."
        image="/images/bg3.JPG"
      />

      <WhoWeAreSection />
      <CTA />
    </>
  );
}
