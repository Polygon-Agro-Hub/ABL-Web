import Image from "next/image";
import approachImg from "@/assets/our-approach/our-approach.png";

const OurApproach = () => {
  return (
    <div className="bg-white">
      <section className="flex flex-col items-center text-center mt-10 sm:mt-16">
        <h1 className="text-4xl text-black font-medium mb-8 sm:mb-12">
          Our Approach
        </h1>

        {/* Main Content: Image Left + Text Right */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 text-[#53595E] leading-relaxed">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={approachImg}
              alt="Agro Benefit Lanka - Empowering Farmers"
              className="rounded-2xl shadow-md object-cover w-full "
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl font-semibold text-black mb-4">
              How ABL Empower Farmers
            </h2>

            <ul className="list-disc list-outside pl-6 space-y-4 text-[#353535] text-lg">
              <li>
                At Agro Benefit Lanka (ABL), we believe that every farmer has
                the potential to grow, succeed, and transform their community.
                By combining technology, logistics, and market access, ABL
                creates an ecosystem where farmers are empowered to become
                confident agripreneurs.
              </li>

              <li>
                Through technology, farmers connect with digital platforms like
                GOVIMART, GOVICARE,and GOVICAPITAL, giving them the tools to
                sell directly to buyers, access expert guidance, track their
                crops, and secure financial support. This ensures they are
                informed, prepared, and in control of their growth.
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Content Below */}
        <div className="max-w-7xl mx-auto mt-12 text-[#53595E] leading-relaxed text-left">
          <ul className="list-disc list-outside pl-6 space-y-4 text-lg">
            <li>
              With efficient logistics, fresh produce moves quickly and safely
              from farm to market, reducing waste, preserving quality, and
              ensuring that farmers’ hard work translates into real income.
            </li>

            <li>
              Market access opens doors to a wide network of consumers,
              retailers, and institutional buyers, eliminating middlemen and
              ensuring fair, transparent pricing. This allows farmers to earn
              more while consumers receive fresh, traceable produce.
            </li>

            <li>
              By connecting knowledge, movement, and opportunity, ABL empowers
              farmers not just to survive, but to thrive – creating lasting
              value for themselves, their communities, and the nation. Together,
              we are building a stronger, smarter, and more sustainable
              agricultural future in Sri Lanka.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default OurApproach;
