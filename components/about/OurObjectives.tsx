const OurObjectives = () => {
    const objectives = [
        {
            id: "01",
            text: "Connect farmers directly with buyers to ensure fair pricing and market transparency.",
        },
        {
            id: "02",
            text: "Provide scientific farming knowledge and practical solutions to improve productivity and reduce post-harvest losses.",
        },
        {
            id: "03",
            text: "Enable access to affordable finance, empowering farmers to invest in their growth.",
        },
        {
            id: "04",
            text: "Deliver training and capacity-building programs to foster resilient agripreneurs.",
        },
        {
            id: "05",
            text: "Strengthen the agricultural ecosystem, benefiting farmers, consumers, and the nation.",
        },
    ];

    return (
        <section className="flex flex-col items-center text-center px-6">
            <h1 className="text-4xl text-black font-medium mb-8">Our Objectives</h1>

            <div className="grid md:grid-cols-2 gap-10 justify-items-center max-w-7xl">
                {objectives.map((obj, index) => (
                    <div
                        key={obj.id}
                        className={`relative border rounded-2xl  text-left shadow-sm w-full overflow-hidden
              ${index === objectives.length - 1 ? "md:col-span-2 md:w-1/2 mx-auto" : ""}
            `}
                        style={{ borderColor: "var(--color-primary)" }}
                    >
                        {/* Quarter circle badge */}
                        <div
                            className="absolute  w-12 h-12 rounded-br-[100px] flex items-start justify-start"
                            style={{ backgroundColor: "var(--color-primary)" }}
                        >
                            <span className="text-white text-md pl-3 pt-2">{obj.id}.</span>
                        </div>

                        <p className="text-[#53595E] text-lg leading-relaxed relative z-10 py-6 px-12">
                            {obj.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurObjectives;
