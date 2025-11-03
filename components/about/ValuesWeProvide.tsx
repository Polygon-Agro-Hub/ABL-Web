import background from "@/assets/about/values/background.png";

const ValuesWeProvide = () => {
    const values = [
        {
            title: "Empowerment",
            text: "Helping farmers take charge of their growth and success.",
        },
        {
            title: "Innovation",
            text: "Using technology and modern methods to transform agriculture.",
        },
        {
            title: "Fairness",
            text: "Ensuring transparency and equity for farmers and consumers.",
        },
        {
            title: "Sustainability",
            text: "Promoting long-term growth, efficiency, and environmental care.",
        },
        {
            title: "Collaboration",
            text: "Building strong partnerships for lasting impact.",
        },
    ];

    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-20 text-center"
            style={{ backgroundImage: `url(${background.src})` }}
        >
            {/* Overlay for contrast */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-0">
                <h1 className="text-4xl text-black font-medium mb-8">
                    Values We Provide
                </h1>

                {/* First row: 3 cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-10">
                    {values.slice(0, 3).map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 text-left shadow-sm rounded-tl-4xl w-full"
                            style={{
                                borderTopLeftRadius: "80px",
                            }}
                        >
                            <h3
                                className="text-xl font-semibold mb-3 text-center"
                            >
                                {item.title}
                            </h3>
                            <p className="text-gray-700 text-base leading-relaxed text-center px-8">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Second row: 2 cards centered */}
                <div className="flex flex-wrap justify-center gap-8">
                    {values.slice(3).map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 text-left shadow-sm rounded-tl-3xl w-full md:w-1/3"
                            style={{
                                borderTopLeftRadius: "80px",
                            }}
                        >
                            <h3
                                className="text-xl font-semibold mb-3 text-center"
                            >
                                {item.title}
                            </h3>
                            <p className="text-gray-700 text-base leading-relaxed text-center px-8">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesWeProvide;
