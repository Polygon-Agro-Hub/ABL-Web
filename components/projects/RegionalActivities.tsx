import Image from "next/image";
import regionImg from "@/assets/projects/regional-activities.png";

const RegionalActivities = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Image + Paragraph */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          {/* Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src={regionImg}
              alt="Regional Activities"
              className="rounded-2xl object-cover w-full h-auto"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-2/3 text-[#353535] text-justify leading-relaxed">
            <div className="flex items-center justify-end gap-3 mb-4">
              <h2 className="text-3xl font-semibold text-black">
                Regional Activities
              </h2>
              <div className="w-1 h-10 bg-(--color-primary) rounded-full"></div>
            </div>

            <p>
              At Agro Benefit Lanka (ABL), our regional initiatives are designed
              to empower farmers, strengthen communities, and create a
              sustainable agricultural ecosystem across Sri Lanka. By
              establishing strategically located collection centers in key
              regions, we ensure that fresh produce moves efficiently from farm
              to market, reducing waste and maximizing value for both farmers
              and consumers.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Card 1 */}
          <div className="h-full lg:h-52">
            <div className="border border-(--color-primary) rounded-2xl p-6 h-full flex items-center text-[#353535] text-justify leading-relaxed hover:shadow-md transition">
              <p>
                Our collection centers act as hubs for aggregation, quality
                control, and distribution. They bring farmers together, enabling
                smoother logistics, faster delivery, and consistent pricing,
                while also creating opportunities for farmers to learn from each
                other and share best practices.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="h-full lg:h-52">
            <div className="border border-(--color-primary) rounded-2xl p-6 h-full flex items-center text-[#353535] text-justify leading-relaxed hover:shadow-md transition">
              <p>
                Knowledge sharing is at the core of our regional approach.
                Through workshops, digital platforms, and on-field guidance,
                farmers gain access to modern cultivation techniques,
                climate-smart practices, and post-harvest solutions. This
                continuous learning equips them to increase productivity, reduce
                losses, and make informed decisions for their farms.
              </p>
            </div>
          </div>

          {/* Card 3 (Centered Below) */}
          <div className="md:col-span-2 flex justify-center md:h-52">
            <div className="border border-(--color-primary) rounded-2xl p-6 h-ful md:w-2xl flex items-center text-[#353535] text-justify leading-relaxed hover:shadow-md transition">
              <p>
                Beyond operations and training, ABL focuses on community
                building and collaboration. By connecting farmers across
                regions, we foster a culture of peer learning, mutual support,
                and collective growth. This network strengthens resilience in
                rural communities, enhances livelihoods, and inspires farmers to
                adopt innovative practices confidently.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Paragraph */}
        <p className="text-[#353535] text-justify leading-relaxed max-w-6xl mx-auto">
          Through these regional activities, ABL creates real value for farmers,
          consumers, and the nation. By improving access, knowledge, and
          collaboration, we are not just transforming individual farms – we are
          laying the foundation for a modern, efficient, and sustainable
          agricultural sector that benefits generations to come.
        </p>
      </div>
    </section>
  );
};

export default RegionalActivities;
