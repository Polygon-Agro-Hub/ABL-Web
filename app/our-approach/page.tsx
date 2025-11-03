import ApproachCards from "@/components/our-approach/ApproachCards";
import OurApproach from "@/components/our-approach/OurApproach";

export default function OurApproachPage() {
    return (
        <div className="flex flex-col my-18 mx-auto gap-20 px-6">
            <OurApproach />
            <ApproachCards />
        </div>
    )
}