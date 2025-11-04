import Image from "next/image";
import andre from "@/assets/about/directors/user.png";

const OurOperationalTeam = () => {
  const directors = [
    {
      name: "MR. ANDRE FERNANDO",
      role: "Chairman, Founder",
      image: andre,
    },
    {
      name: "DR. ANOJAN SELVANATHAN",
      role: "Chairman, Founder",
      image: andre,
    },
    {
      name: "MR. RUWIN MAPA",
      role: "Chairman, Founder",
      image: andre,
    },
    {
      name: "MR. ANDRE FERNANDO",
      role: "Chairman, Founder",
      image: andre,
    },
    {
      name: "DR. ANOJAN SELVANATHAN",
      role: "Chairman, Founder",
      image: andre,
    },
    {
      name: "MR. RUWIN MAPA",
      role: "Chairman, Founder",
      image: andre,
    },
  ];

  return (
    <section className="bg-white text-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <div className="w-full h-0.5 bg-[#E2E2EB]"></div>
          <h1 className="text-4xl font-medium text-black mx-4 whitespace-nowrap">
            Our Operational Team
          </h1>
          <div className="w-full h-0.5 bg-[#E2E2EB]"></div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {directors.map((member, index) => (
            <div
              key={index}
              className="bg-white border shadow-xl rounded-2xl overflow-hidden w-full transition-transform hover:-translate-y-2 duration-300 border-none"
            >
              {/* Image */}
              <div className="flex justify-center ">
                <div
                  className="overflow-hidden "
                  style={{ borderColor: "var(--color-primary)" }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurOperationalTeam;
