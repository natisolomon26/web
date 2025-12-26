
import CTA from "@/src/components/landing/CTA";
import DiscipleshipMinistry from "@/src/components/student/discipleship/DiscipleshipMinistry";
import PageBanner from "@/src/components/ui/PageBanner";

export default function Discipleship() {
  return (
    <>
      <PageBanner 
        title="Discipleship & Leadership Strategies"
        subtitle="We are committed to raising deeply rooted followers of Christ through intentional, Spirit-led discipleship that transforms lives and campuses."
        image="/images/bg2.JPG"
      />

      <DiscipleshipMinistry />  
      <CTA />    
    </>
  );
}
