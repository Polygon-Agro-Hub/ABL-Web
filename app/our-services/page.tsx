import AccessToGoviCapital from "@/components/our-services/AccessToGoviCapital";
import AccessToGoviCare from "@/components/our-services/AccessToGoviCare";
import AccessToGoviMart from "@/components/our-services/AccessToGoviMart";
import DownloadOurApp from "@/components/our-services/DownloadOurApp";
import MutualImpact from "@/components/our-services/MutualImpact";
import OurFinancialPartnersMobile from "@/components/our-services/OurFinancialPartnersMobile";
import OurFinancialPartnersPC from "@/components/our-services/OurFinancialPartnersPC";
import OurServices from "@/components/our-services/OurServices";

export default function OurServicesPage() {
  return (
    <div className="flex flex-col my-18 mx-auto">
      <div className="flex flex-col gap-20">
        <OurServices />
      </div>
      <div className="flex flex-col gap-20 mt-20">
        <AccessToGoviMart />
        <AccessToGoviCare />
      </div>
      <DownloadOurApp />
      <AccessToGoviCapital />
      <OurFinancialPartnersPC />
      <OurFinancialPartnersMobile />
      <MutualImpact />
    </div>
  );
}
