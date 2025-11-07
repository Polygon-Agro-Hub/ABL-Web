import Image from "next/image";
import { FaBell } from "react-icons/fa";
import { FaLightbulb, FaTrophy } from "react-icons/fa6";
import { MdOutlineQuestionMark } from "react-icons/md";
import govicare1Img from "@/assets/our-services/services/govicare-1.png";
import govicare2Img from "@/assets/our-services/services/govicare-2.png";
import govicare3Img from "@/assets/our-services/services/govicare-3.png";

const AccessToGoviCare = () => {
  return (
    <div className="bg-[#F6F8FD] py-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6">
        <h1 className="text-4xl text-black font-medium mb-4">
          02. Access to GoViCare Scientific Growing Methods
        </h1>

        {/* Intro paragraph */}
        <p className="max-w-7xl text-lg leading-relaxed text-center">
          Knowledge is power in agriculture, and through GOVICARE we put that
          power directly into the hands of farmers. This platform gives farmers
          access to modern, scientific cultivation methods with real-time
          guidance from agricultural specialists. Farmers can share updates on
          their fields, seek advice on pests, soil health, or weather
          challenges, and receive tailored solutions that improve productivity.
          Beyond the app, ABL also organizes training programs, awareness
          sessions, and field support to strengthen farmer capacity. By
          combining expert advice, awareness, and hands-on training, GOVICARE
          helps farmers reduce post-harvest losses, improve yields, and build
          resilience against challenges. With GOVICARE, farmers are no longer
          left to struggle alone – they are supported by a network of
          specialists and peers who help them grow smarter, stronger, and more
          sustainably.
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
              <div className="w-12 h-12 flex items-center justify-center bg-(--color-primary) rounded-lg shadow-md">
                <FaBell className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-black">What?</h2>
            </div>

            {/* Card */}
            <div className="rounded-l-2xl border-l-4 border-(--color-primary)">
              <div className="pl-6 pr-4 py-4 text-justify">
                GOVICARE is a comprehensive agri-advisory platform designed to
                empower farmers with modern, scientific cultivation practices.
                It goes beyond providing tips, creating a real-time connection
                between farmers and agricultural specialists. Through the
                platform, farmers can access knowledge resources, receive expert
                guidance, and implement practices that improve crop health,
                yield, and sustainability. GOVICARE acts as a bridge, bringing
                scientific farming knowledge directly to the fields of everyday
                Sri Lankan farmers.
              </div>
            </div>
          </div>

          {/* WHY Section */}
          <div>
            {/* Header with Icon */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-(--color-primary) rounded-lg shadow-md">
                <MdOutlineQuestionMark className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-black">Why?</h2>
            </div>

            {/* Card */}
            <div className="rounded-l-2xl border-l-4 border-(--color-primary)">
              <div className="pl-6 pr-4 py-4 text-justify">
                Many farmers still rely on traditional methods that, while
                familiar, can limit productivity and increase post-harvest
                losses. Lack of awareness, unpredictable weather patterns, pest
                challenges, and limited access to expert guidance often result
                in reduced profits and wasted crops. By adopting scientific
                cultivation methods, farmers can improve their productivity,
                reduce losses, and ensure better financial stability. GOVICARE
                provides the knowledge, tools, and support needed to transform
                agriculture from a survival activity into a profitable,
                sustainable profession.
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center w-full md:w-2/5">
          <Image
            src={govicare1Img}
            alt="GoVi Care"
            className="rounded-xl object-contain w-full max-w-md"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section className="max-w-7xl mx-auto mt-16 flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Left Image */}
        <div className="flex justify-center w-full md:w-2/5">
          <Image
            src={govicare2Img}
            alt="GoVi Care"
            className="rounded-xl object-contain w-full max-w-md"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col w-full md:w-3/5 gap-10">
          {/* How Section */}
          <div>
            {/* Header with Icon */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-(--color-primary) rounded-lg shadow-md">
                <FaLightbulb className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-black">How?</h2>
            </div>

            {/* Card */}
            <div className="rounded-l-2xl border-l-4 border-(--color-primary)">
              <ul className="pl-8 pr-6 py-4 space-y-3 text-justify list-disc">
                <li>
                  We guide you, Farmers can share updates about their crops in
                  real-time, allowing specialists to provide solutions that are
                  tailored to their unique situations.
                </li>
                <li>
                  We Bulid Awareness, The platform regularly provides updates on
                  weather, climate changes, pest and disease management, and
                  best cultivation practices.
                </li>
                <li>
                  We provide Training & capacity building, Farmers can
                  participate in digital and in-person training programs
                  organized under ABL to gain hands-on skills and deeper
                  knowledge.
                </li>
                <li>
                  We are your solution, Direct access to specialists ensures
                  farmers receive practical recommendations on improving inputs,
                  methods, and post-harvest handling, helping them tackle
                  challenges quickly and effectively.
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
              <div className="w-12 h-12 flex items-center justify-center bg-(--color-primary) rounded-lg shadow-md">
                <FaTrophy className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-black">What Gains?</h2>
            </div>

            {/* Card */}
            <div className="rounded-l-2xl border-l-4 border-(--color-primary)">
              <ol className="pl-8 pr-6 py-4 space-y-4 text-justify list-decimal ">
                <li>Farmers achieve higher yields and healthier crops.</li>
                <li>Post-harvest losses are minimized.</li>
                <li>
                  Farmers gain confidence, knowledge, and resilience, turning
                  challenges into opportunities.
                </li>
                <li>
                  Over time, a culture of smart, data-driven, and sustainable
                  farming grows across Sri Lanka, empowering farmers to shape
                  their own future.
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center w-full md:w-2/5">
          <Image
            src={govicare3Img}
            alt="GoVi Care"
            className="rounded-xl object-contain w-full max-w-md"
          />
        </div>
      </section>
    </div>
  );
};

export default AccessToGoviCare;
