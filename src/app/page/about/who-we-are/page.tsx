import PageBanner from "@/src/components/ui/PageBanner";
import WhoWeAreSection from "@/src/components/about/WhoWeAreSection";
import ExistSection from "@/src/components/about/ExistSection";
import CommitmentSection from "@/src/components/about/CommitmentSection";
import CoreValuesSection from "@/src/components/about/CoreValueSection";

export default function WhoWeArePage() {
  return (
    <>
      <PageBanner 
        title="Who We Are"
        subtitle="A fellowship centered on Jesus Christ"
        image="/images/bg3.JPG"
      />

      <WhoWeAreSection />
      <ExistSection />
      <CoreValuesSection />
      <CommitmentSection />
    </>
  );
}
