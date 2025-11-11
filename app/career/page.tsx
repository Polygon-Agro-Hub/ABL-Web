import Career from "@/components/career/Career";
import CareerData from "@/components/career/CareerData";

export default function CareerPage() {
  return (
    <div className="flex flex-col my-18 mx-auto lg:gap-20">
      <Career />
      <CareerData />
    </div>
  );
}
