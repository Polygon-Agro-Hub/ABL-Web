"use client";

const Career = () => {
  return (
    <section>
      <div className="mx-auto text-center">
        {/* Title */}
        <div className="bg-[#F6F8FD] py-16 px-6">
          <h1 className="text-4xl text-black font-medium">
            Be part of our mission
          </h1>
          <div className="max-w-7xl mx-auto text-black ">
            {/* Introduction */}
            <p className="text-lg mt-6">
              We’re are looking for passionate people to join us on our mission.
              We value flat hierarchies, clear communication, full ownership and
              responsibility. <br />
              Email your CV to :{" "}
              <span className="font-semibold underline">
                careers@polygon.lk
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
