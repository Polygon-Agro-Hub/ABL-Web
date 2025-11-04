import Image from "next/image";
import Link from "next/link";
import appMockup from "@/assets/our-services/download-app/app.png";
import googlePlayBtn from "@/assets/our-services/download-app/google-play.png";

const DownloadOurApp = () => {
  return (
    <section className="mx-auto flex flex-col md:flex-row items-center gap-12 bg-white">
      {/* Left: App Image */}
      <div className="flex justify-center w-full md:w-3/5">
        <Image
          src={appMockup}
          alt="ABL Mobile App"
          className="object-contain w-full"
        />
      </div>

      {/* Right: Text + Button */}
      <div className="flex flex-col w-full md:w-2/5 text-center items-center">
        <h2 className="text-3xl sm:text-5xl font-medium tracking-wide mb-3">
          DOWNLOAD
        </h2>
        <h1 className="text-xl sm:text-4xl mb-8 sm:mt-4">OUR APP</h1>

        {/* Google Play Button */}
        <Link
          href="https://play.google.com/store/apps/details?id=com.yourapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={googlePlayBtn}
            alt="Get it on Google Play"
            className="w-48 hover:opacity-80 transition-opacity duration-300 mx-auto md:mx-0"
          />
        </Link>
      </div>
    </section>
  );
};

export default DownloadOurApp;
