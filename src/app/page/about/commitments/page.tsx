import PageBanner from "@/src/components/ui/PageBanner";
import CommitmentSection from "@/src/components/about/CommitmentSection";
import CTA from "@/src/components/landing/CTA";

export default function WhoWeArePage() {
  return (
    <>
      <PageBanner 
        title="Our Core Commitments"
        subtitle="Four foundational pillars that shape our ministry, transform campuses, and empower the next generation of Christian leaders."
        image="/images/bg3.JPG"
      />

      <CommitmentSection />
      <CTA />
    </>
  );
}
