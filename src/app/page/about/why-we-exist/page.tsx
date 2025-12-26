import PageBanner from "@/src/components/ui/PageBanner";
import ExistSection from "@/src/components/about/ExistSection";

export default function WhoWeArePage() {
  return (
    <>
      <PageBanner 
        title="Who We Are"
        subtitle="A fellowship centered on Jesus Christ"
        image="/images/bg3.JPG"
      />

      <ExistSection />
    </>
  );
}
