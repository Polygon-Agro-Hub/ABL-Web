const SustainabilityCards = () => {
  // Single array with title + description
  const sustainabilityData = [
    {
      title: "Environmental Sustainability",
      description: `ABL promotes climate-smart and resource-efficient farming practices. 
      By encouraging the use of organic inputs, water-saving techniques, soil health management, 
      and integrated pest management, we help farmers reduce environmental impact while increasing productivity. 
      Our goal is to ensure that agriculture remains profitable and environmentally responsible, 
      building a greener future for Sri Lanka.`,
    },
    {
      title: "Economic Sustainability",
      description: `We empower farmers to grow as agripreneurs by providing access to markets, fair pricing, 
      financial tools, and expert guidance. This creates stable income, reduces dependency on intermediaries, 
      and strengthens rural economies. By connecting farmers directly to consumers and supporting access to finance, 
      ABL ensures that prosperity is shared, inclusive, and enduring.`,
    },
    {
      title: "Social Sustainability",
      description: `ABL fosters strong community networks, knowledge sharing, and collaboration across regions. 
      Farmers learn from one another, access training, and build resilience against climate and market challenges. 
      Consumers, partners, and supporters also play a role, creating an ecosystem where everyone benefits. 
      This collective approach strengthens rural communities and builds a sustainable agricultural culture 
      that endures for generations.`,
    },
  ];

  return (
    <div className="bg-white text-[#53595E]">
      <section className="flex flex-col items-center gap-16 pb-10 px-6">
        {sustainabilityData.map((item, index) => (
          <div
            key={index}
            className="relative max-w-6xl w-full border-2 border-dashed border-(--color-primary) rounded-3xl p-8 pt-14 text-center bg-white shadow-sm"
          >
            {/* Title overlapping dashed border */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-6">
              <h2 className="text-xl sm:text-2xl font-medium text-black whitespace-nowrap">
                {item.title}
              </h2>
            </div>

            {/* Description */}
            <p className="leading-relaxed">{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SustainabilityCards;
