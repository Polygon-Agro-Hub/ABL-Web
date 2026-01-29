import Career from "@/components/career/Career";
import CareerData from "@/components/career/CareerData";
import NoCareerData from "@/components/career/NoCareerData";

export default function CareerPage() {
  return (
    <div className="flex flex-col my-18 mx-auto lg:gap-20">
      {/* If career data is available, use the following components */}
      {/* <Career /> */}
      {/* <CareerData /> */}

      {/* If no career data is available, use the following component */}
      <NoCareerData />
    </div>
  );
}
