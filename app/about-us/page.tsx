import AboutUs from "@/components/about-us/AboutUs";
import OurBoardOfDirectors from "@/components/about-us/OurBoardOfDirectors";
import OurManagementTeam from "@/components/about-us/OurManagementTeam";
import OurObjectives from "@/components/about-us/OurObjectives";
import OurOperationalTeam from "@/components/about-us/OurOperationalTeam";
import ValuesWeProvide from "@/components/about-us/ValuesWeProvide";
import VisionMission from "@/components/about-us/VisionMission";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col my-18 mx-auto gap-20">
      <div className="flex flex-col px-6 gap-20">
        <AboutUs />
        <VisionMission />
        <OurObjectives />
      </div>
      <ValuesWeProvide />
      {/* hide for still not real world content 01/29/2026 */}
      {/* <div className="flex flex-col px-6 gap-20">
        <OurBoardOfDirectors />
        <OurManagementTeam />
        <OurOperationalTeam />
      </div> */}
    </div>
  );
}
