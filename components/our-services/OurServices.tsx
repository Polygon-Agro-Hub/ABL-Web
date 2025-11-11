import Image from "next/image";
import govimartLogo from "@/assets/our-services/logo/govimart.png";
import govicareLogo from "@/assets/our-services/logo/govicare.png";
import govicapitalLogo from "@/assets/our-services/logo/govimart.png";

const OurServices = () => {
  const services = [
    {
      name: "GoViMart <br/> Marketplace",
      logo: govimartLogo,
    },
    {
      name: "GoviCare <br/> Agriculture Knowledge",
      logo: govicareLogo,
    },
    {
      name: "GoVi Capital <br/> Finance Partners",
      logo: govicapitalLogo,
    },
  ];

  return (
    <div className="bg-white">
      <section className="flex flex-col items-center text-center mt-10 sm:mt-16 px-6">
        <h1 className="text-4xl text-black font-medium mb-12">Our Services</h1>

        <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-20 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-[#d1d5db] rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 shadow-xl"
            >
              {/* Logo */}
              <div className="w-auto h-40 mb-6 flex items-center justify-center">
                <Image
                  src={service.logo}
                  alt={service.name}
                  className="object-contain"
                  width={150}
                  height={150}
                />
              </div>

              {/* Name with HTML break */}
              <h3
                className="text-2xl font-semibold mb-6 text-black"
                dangerouslySetInnerHTML={{ __html: service.name }}
              ></h3>

              {/* Learn More Button */}
              <button className="mt-auto px-6 py-2 text-white font-medium rounded-full transition-colors duration-300 bg-(--color-primary) hover:bg-[#F12672]">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurServices;
