import PageBanner from "@/src/components/ui/PageBanner";
import ExistSection from "@/src/components/about/ExistSection";
import CTA from "@/src/components/landing/CTA";

export default function WhoWeArePage() {
  return (
    <>
      <PageBanner 
        title="Why We Exist"
        subtitle="A fellowship of students and graduates following Christ, growing together, and transforming campuses across Ethiopia."
        image="/images/bg3.JPG"
      />

      <ExistSection />
      <CTA />
    </>
  );
}
