import Image from "next/image";
import initiativeImg from "@/assets/projects/our-initiative.png";

const Projects = () => {
  return (
    <div className="bg-white">
      <section className="flex flex-col items-center text-center mt-10 sm:mt-16">
        <h1 className="text-4xl text-black font-medium mb-8 sm:mb-12">
          Projects
        </h1>

        {/* Main Content: Image Left + Text Right */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 text-[#53595E] leading-relaxed">
          {/* Left: Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src={initiativeImg}
              alt="Agro Benefit Lanka"
              className="object-cover w-full"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-2/3 text-left">
            {/* Title with Vertical Line */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-10 bg-(--color-primary) rounded-full"></div>
              <h2 className="text-3xl font-semibold text-black">
                Our Initiative
              </h2>
            </div>

            <p className="text-lg text-justify text-[#353535]">
              ABL’s pilot project is a bold step toward transforming agriculture
              and food distribution in Sri Lanka. We have established collection
              centers in Jaffna, Thambuththegama, and Nuwara Eliya, covering
              both northern and southern regions, to aggregate fresh produce
              directly from farmers. A key innovation in this project is the use
              of railway transportation as the primary mode of moving goods. By
              leveraging the railway network, we ensure faster, more reliable,
              and cost-effective distribution while contributing to the
              revitalization of Sri Lanka’s transport infrastructure.
            </p>
          </div>
        </div>

        {/* Additional Content Below */}
        <p className="max-w-7xl text-lg text-justify text-[#353535] mt-8">
          This approach reduces unnecessary intermediaries, minimizes road
          congestion, and strengthens the overall supply chain. From our Colombo
          distribution center, fresh produce reaches consumers at competitive
          prices, delivering both value and convenience. By combining
          technology, logistics, and modern distribution methods, this pilot
          project empowers farmers with fair pricing while offering consumers
          fresh, high-quality food. It represents a turning point in Sri Lankan
          consumer behavior and sets a new benchmark for a modern, sustainable
          agricultural system.
        </p>
      </section>
    </div>
  );
};

export default Projects;
