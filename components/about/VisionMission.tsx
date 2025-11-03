const VisionMission = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="text-center px-6">
                <div className="max-w-7xl mx-auto text-[#53595E]">
                    {/* Vision and Mission Section */}
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Vision */}
                        <div className="rounded-2xl p-8 border-b-4 shadow-xl" style={{ borderColor: "var(--color-primary)" }}>
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-medium text-black mb-4">
                                    Our Vision
                                </h3>
                            </div>
                            <p className="text-[#53595E] text-lg leading-relaxed text-center">
                                To create a thriving, empowered, and resilient <br />
                                farming community in Sri Lanka, where farmers <br />
                                grow as entrepreneurs and agriculture drives <br />
                                sustainable national growth.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="rounded-2xl p-8 border-b-4 shadow-xl" style={{ borderColor: "var(--color-primary)" }}>
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-medium text-black mb-4">
                                    Our Mission
                                </h3>
                            </div>
                            <p className="text-[#53595E] text-lg leading-relaxed text-center">
                                ABL exists to support farmers at every step of their<br />
                                journey by providing access to markets, scientific<br />
                                knowledge, and financial tools. We are committed to<br />
                                building a platform where technology and expertise <br />
                                converge to empower farmers, reduce inefficiencies, and<br />
                                create value for every stakeholder in the agriculture <br />
                                ecosystem.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VisionMission;
