import Image from "next/image";
import storyImg from "@/assets/projects/our-story.png";

const OurStory = () => {
  return (
    <section className="relative w-full h-auto bg-black text-white">
      <div className="flex flex-col md:flex-row items-stretch min-h-[600px]">
        {/* Left: Image (Hidden on Mobile) */}
        <div className="relative hidden md:block w-full md:w-1/2 ">
          <Image
            src={storyImg}
            alt="Our Story"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay for Image */}
          <div className="absolute inset-0 bg-linear-to-l from-black/60 to-transparent"></div>
        </div>

        {/* Right: Gradient + Text */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 bg-[radial-gradient(circle_at_center,#666666_0%,#000000_60%)]">
          {/* Text Content */}
          <div className="relative z-10 max-w-xl text-right">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              OUR STORY
            </h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              Every great movement begins with a simple idea. Ours began with a
              belief that Sri Lanka’s farmers deserve more than just survival;
              they deserve to thrive as agripreneurs.
            </p>

            <p className="text-gray-200 leading-relaxed mb-4">
              At Agro Benefit Lanka, we saw the challenges faced by thousands of
              farmers across the country. Unpredictable prices, limited access
              to markets, and a system that often left them behind. But we also
              saw their strength, resilience, and passion. That’s where our
              story began,in the fields of the people who feed our nation.
            </p>

            <p className="text-gray-200 leading-relaxed mb-4">
              We asked ourselves a question: What if we could connect every
              farmer directly to opportunity? That question became our mission.
            </p>

            <p className="text-gray-200 leading-relaxed">
              Through partnerships with the Sri Lanka Agripreneurs’ Forum
              (SLAF), Polygon, and MAC Holdings, we began building a bridge
              between technology, logistics, and market access. Our digital
              platform "GOVIMART" empowers farmers to connect directly with
              buyers, track their produce, and earn a fair price. Our logistics
              network, in collaboration with Sri Lanka Railways, is redefining
              how fresh produce moves across the island-faster, greener, and
              more efficient than ever before.
            </p>

            <p className="text-gray-200 leading-relaxed">
              But beyond systems and technology, Agro Benefit Lanka is about
              people. It’s about the farmer who no longer has to depend on the
              middleman. It’s about the young agri-entrepreneur who sees farming
              not as a burden, but as a career of pride and potential. It’s
              about creating a community where innovation and agriculture grow
              together.
            </p>
            <p className="text-gray-200 leading-relaxed">
              Today, we’re not just moving produce, we’re moving hope,
              opportunity, and progress. Our dream is to see every farmer
              recognized as a vital part of Sri Lanka’s economic
              future-empowered, independent, and proud.
            </p>
            <p className="text-gray-200 leading-relaxed">
              Because when we uplift a farmer, we uplift a family. When we
              uplift a family, we uplift a nation.
            </p>
            <p className="text-gray-200 leading-relaxed">
              That’s the heart of Agro Benefit Lanka Growing Farmers. Growing
              Sri Lanka.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
