const ApproachCards = () => {
  const approaches = [
    {
      text: (
        <>
          <strong>Farmer-Centric Empowerment</strong> is at the heart of
          everything we do. Every initiative begins by understanding the real
          challenges farmers face and designing solutions that give them control
          over their growth. From decision-making to income management, our
          programs put farmers in the driver’s seat, helping them turn effort
          into lasting impact.
        </>
      ),
    },
    {
      text: (
        <>
          We emphasize <strong>Sustainable Practices</strong> to ensure that
          growth doesn’t come at the cost of the environment. By promoting smart
          cultivation methods, reducing post-harvest losses, and building
          climate-resilient practices, we help farmers protect their land,
          increase yields, and secure long-term productivity.
        </>
      ),
    },
    {
      text: (
        <>
          <strong>Training and Knowledge Sharing</strong> is another key pillar.
          Through digital platforms, workshops, and hands-on guidance, farmers
          gain practical insights on modern cultivation, pest management, soil
          health, and post-harvest care. This continuous learning empowers them
          to make informed decisions and adopt practices that improve both yield
          and quality.
        </>
      ),
    },
    {
      text: (
        <>
          <strong>Financial Inclusion</strong> is central to our strategy.
          Beyond providing access to affordable credit and crop insurance, ABL
          mentors farmers on financial planning, investment, and risk
          management. This ensures that every farmer can scale their operations
          with confidence and sustainability.
        </>
      ),
    },
    {
      text: (
        <>
          We foster <strong>Community Building and Collaboration</strong>,
          connecting farmers with each other, local leaders, and markets. By
          creating a supportive network, farmers share knowledge, learn
          collectively, and grow together, strengthening rural communities and
          creating a culture of resilience.
        </>
      ),
    },
    {
      text: (
        <>
          ABL also embraces <strong>Innovation and Data-Driven Farming</strong>.
          By leveraging technology, crop monitoring, and predictive analytics,
          farmers can optimize their yields, reduce risks, and make smarter
          choices in real time. This forward-thinking approach ensures that
          farming in Sri Lanka evolves into a modern, efficient, and profitable
          enterprise.
        </>
      ),
    },
    {
      text: (
        <>
          Finally, our approach is <strong>impact-driven</strong>, focusing on
          solutions that benefit not just farmers, but also consumers and the
          nation. By improving productivity, strengthening food systems, and
          reducing inefficiencies, ABL contributes to a stronger agricultural
          sector, enhanced rural livelihoods, and sustainable national growth.
        </>
      ),
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 justify-items-center">
          {approaches.map((item, index) => (
            <div
              key={index}
              className={`border border-[#B0B0B0] rounded-2xl p-8 text-left w-full flex items-center ${
                index === approaches.length - 1
                  ? "md:col-span-2 md:w-1/2 mx-auto"
                  : ""
              }`}
            >
              <p className="text-[#53595E] leading-relaxed text-lg text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <p className="text-lg mt-16 text-[#353535] text-center">
          Through this integrated approach, ABL empowers farmers to thrive,
          communities to prosper, and Sri Lanka’s agriculture to
          <br />
          reach new heights. We are building more than a farming network – we
          are creating a movement for transformation, <br />
          innovation, and lasting impact.
        </p>
      </div>
    </section>
  );
};

export default ApproachCards;
