"use client";
import Link from "next/link";

const WhoCanJoin = () => {
  const values = [
    {
      title: "Farmers",
      text: "Register your farm or join a farmer group to gain access to markets, training, and financial tools that help your business grow.",
      footer: (
        <p className="mt-4 text-(--color-primary)">
          Contact Us :{" "}
          <span className="text-black font-medium"> +94 770 111 111</span>
        </p>
      ),
    },
    {
      title: "Consumers",
      text: "Sign up on GOVIMART to explore, order, and enjoy fresh, traceable produce from local farmers delivered to your doorstep.",
      footer: (
        <div className="mt-4">
          <Link
            href="https://govimart.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--color-primary) font-medium underline"
          >
            Visit GoviMart
          </Link>
        </div>
      ),
    },
    {
      title: "Supporters & Partners",
      text: "Reach out to collaborate, sponsor programs, or provide funding to empower farmers and strengthen the agricultural ecosystem.",
      footer: (
        <p className="mt-4 text-(--color-primary)">
          Contact Us :{" "}
          <span className="text-black font-medium"> +94 770 111 111</span>
        </p>
      ),
    },
  ];

  return (
    <section className="bg-[#F6F8FD] py-20 text-center">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl text-black font-medium mb-8">
          Who Can Join with us
        </h1>

        {/* First Row: 2 Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-10 px-6 lg:px-0">
          {values.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 text-left shadow-lg w-full"
              style={{ borderBottomRightRadius: "80px" }}
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {item.text}
              </p>
              {item.footer}
            </div>
          ))}
        </div>

        {/* Second Row: Centered Single Card */}
        <div className="flex flex-wrap justify-center gap-8 px-6 sm:px-0">
          {values.slice(2).map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 text-left shadow-lg w-full md:w-1/2"
              style={{ borderBottomRightRadius: "80px" }}
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {item.text}
              </p>
              {item.footer}
            </div>
          ))}
        </div>
        <p className="text-lg text-center mt-8 sm:mt-16 px-6 sm:px-0">
          By joining ABL, you become part of a movement that empowers farmers,
          enriches communities, <br />
          and builds a sustainable future for Sri Lanka.
          <br />
          Together, we are not just transforming agriculture, we are creating
          opportunities, value, and lasting
          <br /> impact.
        </p>
      </div>
    </section>
  );
};

export default WhoCanJoin;
