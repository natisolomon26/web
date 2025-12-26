import Evangelism from "@/src/components/student/evangelism/LeadershipMinistry";
import PageBanner from "@/src/components/ui/PageBanner";

export default function LeadershipPage() {
  return (
    <>
      <PageBanner
        title="Evangelism and Mission"
        subtitle="The harvest is plentiful, but the laborers are few. Pray to the Lord of the harvest that He will send out laborers for His harvest"
        image="/images/bg4.JPG"
      />
      <Evangelism />
    </>
  );
}
