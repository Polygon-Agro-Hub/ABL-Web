import AboutUs from "@/components/about/AboutUs";
import OurBoardOfDirectors from "@/components/about/OurBoardOfDirectors";
import OurManagementTeam from "@/components/about/OurManagementTeam";
import OurObjectives from "@/components/about/OurObjectives";
import OurOperationalTeam from "@/components/about/OurOperationalTeam";
import ValuesWeProvide from "@/components/about/ValuesWeProvide";
import VisionMission from "@/components/about/VisionMission";

export default function AboutUsPage() {
    return (
        <div className="flex flex-col my-18 mx-auto gap-20">
            <div className="flex flex-col px-6 gap-20">
                <AboutUs />
                <VisionMission />
                <OurObjectives />
            </div>
            <ValuesWeProvide />
            <div className="flex flex-col px-6 gap-20">
                <OurBoardOfDirectors />
                <OurManagementTeam />
                <OurOperationalTeam />
            </div>
        </div>
    );
}
