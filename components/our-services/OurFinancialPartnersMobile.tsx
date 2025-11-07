import Image from "next/image";
import partner1 from "@/assets/our-services/logo/govicare.png";
import partner2 from "@/assets/our-services/logo/govimart.png";

const OurFinancialPartnersMobile = () => {
  // Mobile cards with separate mobile offsets
  const mobileCards1 = [
    { bg: "#D9D9D9", logo: partner1, offset: "translate-y-0" },
    { bg: "#D9D9D9", logo: partner2, offset: "translate-y-4" },
    { bg: "#D9D9D9", logo: partner1, offset: "translate-y-8" },
    { bg: "#D9D9D9", logo: partner2, offset: "translate-y-6" },
    { bg: "#D9D9D9", logo: partner1, offset: "translate-y-4" },
    { bg: "#D9D9D9", logo: partner2, offset: "translate-y-6" },
    { bg: "#D9D9D9", logo: partner1, offset: "translate-y-8" },
    { bg: "#D9D9D9", logo: partner2, offset: "translate-y-4" },
    { bg: "#BDBDBD", logo: partner1, offset: "translate-y-0" },
  ];

  const mobileCards2 = [
    { bg: "#D9D9D9", logo: partner2, offset: "translate-y-0" },
    { bg: "#D9D9D9", logo: partner1, offset: "translate-y-4" },
    { bg: "#F8F8F8", logo: null, offset: "translate-y-8" },
    { bg: "#F8F8F8", logo: null, offset: "translate-y-6" },
    { bg: "#F8F8F8", logo: null, offset: "translate-y-4" },
    { bg: "#F8F8F8", logo: null, offset: "translate-y-6" },
    { bg: "#F8F8F8", logo: null, offset: "translate-y-8" },
    { bg: "#D9D9D9", logo: partner1, offset: "translate-y-4" },
    { bg: "#BDBDBD", logo: partner2, offset: "translate-y-0" },
  ];

  const mobileCards3 = [
    { bg: "#F8F8F8", logo: null, offset: "translate-y-0" },
    { bg: "#F8F8F8", logo: null, offset: "translate-y-4" },
    { bg: "#FFFFFF", logo: null, offset: "translate-y-8" },
    { bg: "#FFFFFF", logo: null, offset: "translate-y-6" },
    { bg: "#FFFFFF", logo: null, offset: "translate-y-4" },
    { bg: "#FFFFFF", logo: null, offset: "translate-y-6" },
    { bg: "#FFFFFF", logo: null, offset: "translate-y-8" },
    { bg: "#F8F8F8", logo: null, offset: "translate-y-4" },
    { bg: "#F8F8F8", logo: null, offset: "translate-y-0" },
  ];

  return (
    <section className="bg-white py-10 md:hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-black mb-3">
          Our Financial Partners
        </h2>
        <div className="w-40 h-1 bg-(--color-primary) mx-auto mb-4"></div>

        {/* Description */}
        <p className="mx-auto mb-12 leading-relaxed text-sm">
          ABL partners with financial institutions, microfinance providers, and
          impact investors to make funding accessible, affordable, and flexible.
          Corporates and donors are invited to sponsor loans, grants, or
          insurance schemes, becoming part of a movement that uplifts rural
          communities. Digital platforms also ensure secure and convenient
          access to microloans, insurance, and payments, creating a full
          financial ecosystem for farmers.
        </p>

        {/* Mobile Floating Card Layout - w-1/12 style */}
        <div className="relative flex justify-center gap-1">
          {mobileCards1.map((card, index) => (
            <div
              key={index}
              className={`w-1/9 h-12 rounded-lg flex items-center justify-center transition-transform duration-300 ${card.offset}`}
              style={{ backgroundColor: card.bg }}
            >
              {card.logo && (
                <Image
                  src={card.logo}
                  alt={`Partner ${index + 1}`}
                  className="w-6 h-6 object-contain"
                />
              )}
            </div>
          ))}
        </div>
        <div className="relative flex justify-center gap-1 mt-3">
          {mobileCards2.map((card, index) => (
            <div
              key={index}
              className={`w-1/9 h-12 rounded-lg flex items-center justify-center transition-transform duration-300 ${card.offset}`}
              style={{ backgroundColor: card.bg }}
            >
              {card.logo && (
                <Image
                  src={card.logo}
                  alt={`Partner ${index + 1}`}
                  className="w-6 h-6 object-contain"
                />
              )}
            </div>
          ))}
        </div>
        <div className="relative flex justify-center gap-1 mt-3">
          {mobileCards3.map((card, index) => (
            <div
              key={index}
              className={`w-1/9 h-12 rounded-lg flex items-center justify-center transition-transform duration-300 ${card.offset}`}
              style={{ backgroundColor: card.bg }}
            >
              {card.logo && (
                <Image
                  src={card.logo}
                  alt={`Partner ${index + 1}`}
                  className="w-6 h-6 object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFinancialPartnersMobile;
