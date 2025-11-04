import Image from "next/image";
import partner1 from "@/assets/our-services/logo/govicare.png";
import partner2 from "@/assets/our-services/logo/govimart.png";

const OurFinancialPartners = () => {
  const cards1 = [
    { bg: "#D9D9D9", logo: partner1, offset: "translate-y-0" },
    { bg: "#D9D9D9", logo: partner2, offset: "translate-y-15" },
    { bg: "#D9D9D9", logo: partner1, offset: "translate-y-30" },
    { bg: "#D9D9D9", logo: partner2, offset: "translate-y-25" },
    { bg: "#D9D9D9", logo: partner1, offset: "translate-y-15" },
    { bg: "#D9D9D9", logo: partner2, offset: "translate-y-25" },
    { bg: "#D9D9D9", logo: partner1, offset: "translate-y-30" },
    { bg: "#D9D9D9", logo: partner2, offset: "translate-y-15" },
    { bg: "#BDBDBD", logo: partner1, offset: "translate-y-0" },
  ];
  const cards2 = [
    { bg: "#D9D9D9", logo: partner2, offset: "translate-y-0" },
    { bg: "#D9D9D9", logo: partner1, offset: "translate-y-15" },
    { bg: "#F8F8F8", logo: null, offset: "translate-y-30" },
    { bg: "#F8F8F8", logo: null, offset: "translate-y-25" },
    { bg: "#F8F8F8", logo: null, offset: "translate-y-15" },
    { bg: "#F8F8F8", logo: null, offset: "translate-y-25" },
    { bg: "#F8F8F8", logo: null, offset: "translate-y-30" },
    { bg: "#D9D9D9", logo: partner1, offset: "translate-y-15" },
    { bg: "#BDBDBD", logo: partner2, offset: "translate-y-0" },
  ];
  const cards3 = [
    { bg: "#F8F8F8", logo: null, offset: "translate-y-0" },
    { bg: "#F8F8F8", logo: null, offset: "translate-y-15" },
    { bg: "#FFFFFF", logo: null, offset: "translate-y-30" },
    { bg: "#FFFFFF", logo: null, offset: "translate-y-25" },
    { bg: "#FFFFFF", logo: null, offset: "translate-y-15" },
    { bg: "#FFFFFF", logo: null, offset: "translate-y-25" },
    { bg: "#FFFFFF", logo: null, offset: "translate-y-30" },
    { bg: "#F8F8F8", logo: null, offset: "translate-y-15" },
    { bg: "#F8F8F8", logo: null, offset: "translate-y-0" },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-3">
          Our Financial Partners
        </h2>
        <div className="w-56 h-1 bg-[#F40064] mx-auto mb-6"></div>

        {/* Description */}
        <p className="mx-auto mb-16 leading-relaxed">
          ABL partners with financial institutions, microfinance providers, and
          impact investors to make funding accessible, affordable, and flexible.
          Corporates and donors are invited to sponsor loans, grants, or
          insurance schemes, becoming part of a movement that uplifts rural
          communities. Digital platforms also ensure secure and convenient
          access to microloans, insurance, and payments, creating a full
          financial ecosystem for farmers.
        </p>

        {/* Floating Card Layout */}
        <div className="relative flex justify-center gap-5 flex-wrap md:flex-nowrap">
          {cards1.map((card, index) => (
            <div
              key={index}
              className={`w-full h-24 sm:w-full sm:h-36 rounded-xl flex items-center justify-center transition-transform duration-300 ${card.offset}`}
              style={{ backgroundColor: card.bg }}
            >
              {card.logo && (
                <Image
                  src={card.logo}
                  alt={`Partner ${index + 1}`}
                  className="w-10 h-10 sm:w-full sm:h-auto object-contain p-2"
                />
              )}
            </div>
          ))}
        </div>
        <div className="relative flex justify-center gap-5 flex-wrap md:flex-nowrap mt-5">
          {cards2.map((card, index) => (
            <div
              key={index}
              className={`w-full h-24 sm:w-full sm:h-36 rounded-xl flex items-center justify-center transition-transform duration-300 ${card.offset}`}
              style={{ backgroundColor: card.bg }}
            >
              {card.logo && (
                <Image
                  src={card.logo}
                  alt={`Partner ${index + 1}`}
                  className="w-10 h-10 sm:w-full sm:h-auto object-contain p-2"
                />
              )}
            </div>
          ))}
        </div>
        <div className="relative flex justify-center gap-5 flex-wrap md:flex-nowrap mt-5">
          {cards3.map((card, index) => (
            <div
              key={index}
              className={`w-full h-24 sm:w-full sm:h-36 rounded-xl flex items-center justify-center transition-transform duration-300 ${card.offset}`}
              style={{ backgroundColor: card.bg }}
            >
              {card.logo && (
                <Image
                  src={card.logo}
                  alt={`Partner ${index + 1}`}
                  className="w-10 h-10 sm:w-full sm:h-auto object-contain p-2"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFinancialPartners;
