import CentresSection from "@/components/contact-us/CentresSection";
import ContactUs from "@/components/contact-us/ContactUs";
import FAQSection from "@/components/contact-us/FAQSection";

export default function ContactUsPage() {
  return (
    <div className="flex flex-col my-18 mx-auto lg:gap-20">
      <ContactUs />
      <CentresSection />
      <FAQSection />
    </div>
  );
}
