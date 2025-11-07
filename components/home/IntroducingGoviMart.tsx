import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import introducingImg from "@/assets/home/govimart/introducing.png";
import marketImg1 from "@/assets/home/govimart/market-1.png";
import marketImg2 from "@/assets/home/govimart/market-2.png";

const IntroducingGoviMart = () => {
  const points = [
    "Empower Farmers into Agripreneurs",
    "Build a Direct Farm-to-Market Value Chain",
    "Ensure Fair Pricing and Transparency",
    "Strengthen Logistics and Distribution",
    "Enhance Food Security and Quality",
    "Support Rural Economic Growth",
    "Promote Digitalization in Agriculture",
    "Attract Investment and Partnerships",
  ];

  const marketPoints = [
    "We open direct pathways between farmers and markets.",
    "Limited middlemen — just fair prices and steady demand.",
    "From farm to table, ABL connects producers with trusted buyers effortlessly.",
  ];

  const financePoints = [
    "We help farmers grow beyond their limits.",
    "Through partnerships and smart financial tools, Agro benefit lanka ensures easy access to credit and investment.",
    "Empowering every agripreneur to plan, produce, and prosper.",
  ];

  const scientificPoints = [
    "We bring modern agriculture to every field.",
    "Our experts guide farmers with data-driven, sustainable practices.",
    "Better methods mean better yields for people, profit, and the planet.",
  ];

  return (
    <div className="bg-white py-10 space-y-24">
      {/* SECTION 1 - Introducing GoViMart */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Left Image */}
        <div className="flex justify-center w-full md:w-2/5">
          <Image
            src={introducingImg}
            alt="GoViMart Marketplace"
            className="rounded-xl object-contain w-full max-w-md"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col w-full md:w-3/5 gap-10">
          <div>
            <h2 className="text-3xl font-semibold text-black mb-6">
              Introducing GoViMart
            </h2>

            <p className="mx-auto mb-6 leading-relaxed text-[#53595E] max-w-7xl">
              GOVIMART is ABL’s digital marketplace that connects farmers
              directly with buyers, streamlines ordering and logistics, and
              ensures fair, transparent pricing through real-time market access.
            </p>

            {/* Visit Button */}
            <button
              className="flex items-center gap-2 my-8 px-8 py-2 font-medium rounded-full transition-colors duration-300 
             hover:bg-[#F12672] hover:text-white border border-(--color-primary) text-(--color-primary) bg-white"
            >
              Visit GoViMart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z" />
              </svg>
            </button>

            {/* Targets Section */}
            <h2 className="text-2xl font-semibold text-black mb-4">
              Our Targets:
            </h2>

            <ul className="space-y-4 text-left text-gray-700">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheck className="text-(--color-primary) mt-1 text-xl" />
                  <span className="leading-relaxed text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2 - Access to Market */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Left Content */}
        <div className="flex flex-col w-full md:w-3/5 gap-6">
          <h2 className="text-3xl font-semibold text-black">
            01. Access to Market - GoViMart
          </h2>

          <ul className="space-y-4 text-left text-gray-700">
            {marketPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheck className="text-(--color-primary) mt-1 text-xl" />
                <span className="leading-relaxed text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Images */}
        <div className="flex justify-center md:w-2/5 gap-8 px-4">
          <Image
            src={marketImg1}
            alt="Market Connection 1"
            className="rounded-lg object-cover w-1/2 h-auto shadow-md"
          />
          <Image
            src={marketImg2}
            alt="Market Connection 2"
            className="rounded-lg object-cover w-1/2 h-auto shadow-md"
          />
        </div>
      </section>

      {/* SECTION 3 - Access to GoViCapital */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Left Content */}
        <div className="flex flex-col w-full md:w-3/5 gap-6">
          <h2 className="text-3xl font-semibold text-black">
            02. Access to Finance - GoViCapital
          </h2>

          <ul className="space-y-4 text-left text-gray-700">
            {financePoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheck className="text-(--color-primary) mt-1 text-xl" />
                <span className="leading-relaxed text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Images */}
        <div className="flex justify-center md:w-2/5 gap-8 px-4">
          <Image
            src={marketImg1}
            alt="Market Connection 1"
            className="rounded-lg object-cover w-1/2 h-auto shadow-md"
          />
          <Image
            src={marketImg2}
            alt="Market Connection 2"
            className="rounded-lg object-cover w-1/2 h-auto shadow-md"
          />
        </div>
      </section>

      {/* SECTION 4 - Access to Scientific */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Left Content */}
        <div className="flex flex-col w-full md:w-3/5 gap-6">
          <h2 className="text-3xl font-semibold text-black">
            03. Access to Scientific Growing Methods
          </h2>

          <ul className="space-y-4 text-left text-gray-700">
            {scientificPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheck className="text-(--color-primary) mt-1 text-xl" />
                <span className="leading-relaxed text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Images */}
        <div className="flex justify-center md:w-2/5 gap-8 px-4">
          <Image
            src={marketImg1}
            alt="Market Connection 1"
            className="rounded-lg object-cover w-1/2 h-auto shadow-md"
          />
          <Image
            src={marketImg2}
            alt="Market Connection 2"
            className="rounded-lg object-cover w-1/2 h-auto shadow-md"
          />
        </div>
      </section>
    </div>
  );
};

export default IntroducingGoviMart;
