import Sustainability from "@/components/sustainability/Sustainability";
import SustainabilityCards from "@/components/sustainability/SustainabilityCards";

export default function SustainabilityPage() {
  return (
    <div className="flex flex-col my-18 mx-auto gap-20">
      <Sustainability />
      <SustainabilityCards />
    </div>
  );
}
