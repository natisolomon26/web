import LeadershipMinistry from "@/src/components/student/leadership/LeadershipMinistry";
import PageBanner from "@/src/components/ui/PageBanner";

export default function LeadershipPage() {
  return (
    <>
      <PageBanner
        title="Student Leadership"
        subtitle="Raising Christ-like leaders for campus, church, and society"
        image="/images/bg3.JPG"
      />
      <LeadershipMinistry />
    </>
  );
}
