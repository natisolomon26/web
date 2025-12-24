
import DiscipleshipMinistry from "@/src/components/student/discipleship/DiscipleshipMinistry";
import PageBanner from "@/src/components/ui/PageBanner";

export default function Discipleship() {
  return (
    <>
      <PageBanner 
        title="What We Believe"
        subtitle="Our foundational Christian convictions"
        image="/images/bg3.JPG"
      />

      <DiscipleshipMinistry />      
    </>
  );
}
