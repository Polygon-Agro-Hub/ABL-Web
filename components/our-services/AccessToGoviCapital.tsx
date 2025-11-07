const AccessToGoviCapital = () => {
  return (
    <div className="bg-white py-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6">
        <h1 className="text-4xl text-black font-medium mb-4">
          03. Access to GoVi Capital Finance
        </h1>

        <button
          className="flex items-center gap-2 my-8 px-8 py-2 font-medium rounded-full transition-colors duration-300 
             hover:bg-[#F12672] hover:text-white border border-(--color-primary) text-(--color-primary) bg-white"
        >
          Open GoViMart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z" />
          </svg>
        </button>

        {/* Intro paragraph */}
        <p className="max-w-7xl text-lg leading-relaxed text-center">
          GOVICAPITAL opens the doors of opportunity for farmers who have long
          been underserved by traditional financial systems. It is designed to
          give them the resources, tools, and confidence to invest in their
          farms, adopt innovative methods, and grow their businesses
          sustainably. With GOVICAPITAL, finance becomes not a barrier, but a
          stepping stone toward empowerment and long-term prosperity.Farmers
          gain the ability to invest in better inputs, tools, and technology,
          building confidence and stability for each season. Sponsors and
          investors actively contribute to rural growth, strengthening
          livelihoods and creating lasting social impact. By ensuring financial
          access, GOVICAPITAL helps farmers escape cycles of uncertainty,
          empowering them to grow not just as producers, but as resilient,
          self-reliant agripreneurs shaping the future of Sri Lankan
          agriculture.
        </p>
      </section>
    </div>
  );
};

export default AccessToGoviCapital;
