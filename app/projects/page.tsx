import OurStory from "@/components/projects/OurStory";
import Projects from "@/components/projects/Projects";
import RegionalActivities from "@/components/projects/RegionalActivities";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col mt-18">
      <div className="flex flex-col px-6">
        <Projects />
        <RegionalActivities />
      </div>
      <OurStory />
    </div>
  );
}
