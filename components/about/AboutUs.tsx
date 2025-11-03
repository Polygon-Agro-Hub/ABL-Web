const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-16">
        <h1 className="text-4xl text-black font-medium mb-8 sm:mb-12">About Us</h1>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto text-[#53595E] leading-relaxed">
          {/* Introduction */}
          <p className="text-lg mb-6">
            Agro Benefit Lanka (ABL) was founded with a bold and transformative vision: to turn every farmer in Sri Lanka into a
            proud, empowered agripreneur. Since our inception, we have engaged over 18,500 farmers, building a thriving
            network of innovators, leaders, and changemakers in the agricultural sector. ABL is not just a project; it is a
            movement dedicated to reshaping the future of farming and the nation itself.
          </p>

          <p className="text-lg mb-6">
            We recognize the struggles that have held farmers back for decades – limited market access, lack of scientific
            knowledge, financial constraints, and post-harvest losses. ABL tackles these challenges head-on, providing tools,
            guidance, and opportunities that enable farmers to grow smarter, sell directly, and secure their livelihoods. Every
            initiative we implement, every platform we create, is designed to empower farmers to take control of their futures,
            turning effort into prosperity and potential into success.
          </p>

          <p className="text-lg mb-6">
            But the impact of ABL goes far beyond individual farmers. By strengthening market systems, increasing
            productivity, reducing waste, and building financial resilience, we are helping to revitalize Sri Lanka’s agricultural
            sector. Our work creates ripple effects across communities and the national economy, fostering sustainability,
            innovation, and growth. With ABL, agriculture becomes not just a way to survive, but a pathway for national
            progress, economic resilience, and lasting prosperity.
          </p>

          <p className="text-lg mb-6">
            ABL is driven by a simple yet powerful belief: when farmers thrive, communities thrive, and when communities
            thrive, the nation flourishes. We are planting the seeds of a future where Sri Lankan farmers are respected as
            entrepreneurs, rural communities are strong, and the country moves forward with confidence. Together, with every
            farmer, every supporter, and every partner, ABL is creating a legacy of empowerment, transformation, and hope for
            generations to come.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
