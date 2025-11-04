import Image from "next/image";
import { FaBell } from "react-icons/fa";
import { FaLightbulb, FaTrophy } from "react-icons/fa6";
import { MdOutlineQuestionMark } from "react-icons/md";
import govimart1Img from "@/assets/our-services/services/govimart-1.png";
import govimart2Img from "@/assets/our-services/services/govimart-2.png";
import govimart3Img from "@/assets/our-services/services/govimart-3.png";

const AccessToGoviMart = () => {
  return (
    <div className="bg-[#F6F8FD] py-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6">
        <h1 className="text-4xl text-black font-medium mb-4">
          01. Access to GoViMart Marketplace
        </h1>

        <button
          className="flex items-center gap-2 my-8 px-8 py-2 font-medium rounded-full transition-colors duration-300 
             hover:bg-[#F12672] hover:text-white border border-[#F40064] text-[#F40064] bg-white"
        >
          Open GoViMart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z" />
          </svg>
        </button>

        {/* Intro paragraph */}
        <p className="max-w-7xl text-lg leading-relaxed text-center">
          For too long, farmers have worked hard only to see their harvest lose
          value in the hands of middlemen. ABL changes that story. Through our
          digital marketplace, GOVIMART, farmers meet buyers directly – from
          families looking for fresh produce to businesses searching for
          reliable supply. Every crop listed on GOVIMART is a step toward
          fairness, transparency, and dignity. Farmers gain better prices and
          steady income, while consumers enjoy food that is fresher, healthier,
          and traceable. With smooth logistics ensuring produce moves quickly
          from farm to table, GOVIMART is where value is created for everyone.
        </p>
      </section>

      {/* Section 1 */}
      <section className="max-w-7xl mx-auto mt-16 flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Left Content */}
        <div className="flex flex-col w-full md:w-3/5 gap-10">
          {/* WHAT Section */}
          <div>
            {/* Header with Icon */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F40064] rounded-lg shadow-md">
                <FaBell className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-black">What?</h2>
            </div>

            {/* Card */}
            <div className="rounded-l-2xl border-l-4 border-[#F40064]">
              <div className="pl-6 pr-4 py-4 text-justify">
                GOVIMART is Sri Lanka’s first large-scale digital marketplace
                dedicated exclusively to agriculture. It is a platform built to
                directly connect farmers with consumers, retailers, and
                institutional buyers, creating a fair and transparent space for
                trade. Beyond just a selling app, GOVIMART is a complete
                ecosystem that supports farmers in showcasing their produce,
                reaching new buyers, and ensuring their harvests find the right
                market at the right time.
              </div>
            </div>
          </div>

          {/* WHY Section */}
          <div>
            {/* Header with Icon */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F40064] rounded-lg shadow-md">
                <MdOutlineQuestionMark className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-black">Why?</h2>
            </div>

            {/* Card */}
            <div className="rounded-l-2xl border-l-4 border-[#F40064]">
              <div className="pl-6 pr-4 py-4 text-justify">
                For decades, farmers have been caught in a cycle of unfair
                pricing, heavy reliance on middlemen, and limited bargaining
                power. This has left them vulnerable, while consumers continue
                to face challenges in accessing affordable, fresh, and
                trustworthy food. By bridging this gap, GOVIMART creates a
                win–win situation where farmers receive fairer value for their
                hard work and consumers enjoy better quality at reasonable
                prices. It also plays a critical role in reducing inefficiencies
                in the supply chain and strengthening national food security.
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center w-full md:w-2/5">
          <Image
            src={govimart1Img}
            alt="GoViMart Marketplace"
            className="rounded-xl object-contain w-full max-w-md"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section className="max-w-7xl mx-auto mt-16 flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Left Image */}
        <div className="flex justify-center w-full md:w-2/5">
          <Image
            src={govimart2Img}
            alt="GoViMart Marketplace"
            className="rounded-xl object-contain w-full max-w-md"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col w-full md:w-3/5 gap-10">
          {/* How Section */}
          <div>
            {/* Header with Icon */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F40064] rounded-lg shadow-md">
                <FaLightbulb className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-black">How?</h2>
            </div>

            {/* Card */}
            <div className="rounded-l-2xl border-l-4 border-[#F40064]">
              <ul className="pl-8 pr-6 py-4 space-y-3 text-justify list-disc">
                <li>
                  We provide all the fresh agri products on your screen through
                  GoviMart.
                </li>
                <li>
                  Buyers, whether they are households, retailers, or corporates,
                  can purchase directly from farmers, eliminating unnecessary
                  layers in the supply chain.
                </li>
                <li>
                  ABL ensures smooth and efficient delivery of goods through
                  integrated logistics and organized distribution channels,
                  enabling fresh produce to move quickly from farm to table.
                </li>
                <li>
                  Transparent pricing within the platform gives farmers
                  confidence in what they earn, while buyers know exactly what
                  they are paying for.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="max-w-7xl mx-auto mt-16 flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Left Content */}
        <div className="flex flex-col w-full md:w-3/5 gap-10">
          {/* What Gains Section */}
          <div>
            {/* Header with Icon */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F40064] rounded-lg shadow-md">
                <FaTrophy className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-black">What Gains?</h2>
            </div>

            {/* Card */}
            <div className="rounded-l-2xl border-l-4 border-[#F40064]">
              <ol className="pl-8 pr-6 py-4 space-y-4 text-justify list-decimal ">
                <li>
                  Farmers gain fairer prices, wider market reach, reduced
                  exploitation, and a more reliable income stream.
                </li>
                <li>
                  Consumers receive fresh, high-quality, and traceable produce
                  directly from farmers at better value.
                </li>
                <li>
                  The Nation benefits through stronger local food systems,
                  reduced post-harvest losses, and a more sustainable
                  agricultural economy.
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center w-full md:w-2/5">
          <Image
            src={govimart3Img}
            alt="GoViMart Marketplace"
            className="rounded-xl object-contain w-full max-w-md"
          />
        </div>
      </section>
    </div>
  );
};

export default AccessToGoviMart;
