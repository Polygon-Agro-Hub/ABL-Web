import BannerSlider from "@/components/home/BannerSlider";
import FeedingNation from "@/components/home/FeedingNation";
import IntroducingGoviMart from "@/components/home/IntroducingGoviMart";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="">
      <BannerSlider />
      <FeedingNation />
      <IntroducingGoviMart />
      <Testimonials />
    </div>
  );
}
