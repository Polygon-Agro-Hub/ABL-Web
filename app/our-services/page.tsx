import AccessToGoviCapital from "@/components/our-services/AccessToGoviCapital";
import AccessToGoviCare from "@/components/our-services/AccessToGoviCare";
import AccessToGoviMart from "@/components/our-services/AccessToGoviMart";
import DownloadOurApp from "@/components/our-services/DownloadOurApp";
import MutualImpact from "@/components/our-services/MutualImpact";
import OurFinancialPartners from "@/components/our-services/OurFinancialPartners";
import OurServices from "@/components/our-services/OurServices";

export default function OurServicesPage() {
  return (
    <div className="flex flex-col my-18 mx-auto">
      <div className="flex flex-col px-6 gap-20">
        <OurServices />
      </div>
      <div className="flex flex-col gap-20 mt-20">
        <AccessToGoviMart />
        <AccessToGoviCare />
      </div>
      <DownloadOurApp />
      <AccessToGoviCapital />
      <OurFinancialPartners />
      <MutualImpact />
    </div>
  );
}
