import Image from "next/image";
import approachImg from "@/assets/memberships/memberships.png";

const Memberships = () => {
  return (
    <div className="bg-white">
      <section className="flex flex-col items-center text-center mt-10 sm:mt-16">
        <h1 className="text-4xl text-black font-medium mb-8 sm:mb-12">
          Memberships
        </h1>

        {/* Main Content: Image Left + Text Right */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 text-[#53595E] leading-relaxed">
          {/* Left: Text */}
          <div className="w-full md:w-3/5 text-left">
            <h2 className="text-3xl font-semibold text-black mb-4">
              Our Network
            </h2>

            <p className="text-lg text-justify">
              At Agro Benefit Lanka (ABL), our strength lies in our network – a
              vibrant, growing community dedicated to transforming Sri Lankan
              agriculture. Today, we have over 18,500 farmers actively engaged
              with ABL, each taking steps to become a confident agripreneur. Our
              network connects farmers, consumers, and supporters across the
              country, creating a shared ecosystem of opportunity, knowledge,
              and growth. Every interaction, every connection, strengthens the
              agricultural sector and ensures that farmers’ hard work translates
              into real value for themselves, their communities, and the nation.
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-2/5 flex justify-center">
            <Image
              src={approachImg}
              alt="Agro Benefit Lanka - Empowering Farmers"
              className="rounded-2xl object-cover w-full "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Memberships;
