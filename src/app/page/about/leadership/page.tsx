import ExecutiveGrid from "@/src/components/about/leadership/ExcutiveGrid";
import BoardOfTrustees from "@/src/components/about/leadership/BoardOfTrust";
import PageBanner from "@/src/components/ui/PageBanner";

export default function LeadershipPage() {
  return (
    <>
      <PageBanner 
            title="Leadership"
            subtitle="Our foundational Christian convictions"
            image="/images/bg3.JPG"
        />
    
      <ExecutiveGrid />
      <BoardOfTrustees />
    </>
  );
}
