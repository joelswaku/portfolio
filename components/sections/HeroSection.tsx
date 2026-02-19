import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <section className="relative  overflow-hidden h-screen md:h-[75vh]  z-1">
        {/* Background video */}
        <video
          className=" inset-0 w-full h-full object-cover "
          src="/u.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0.5 bg-black/60 " />

        {/* Content */}
        <div className="absolute  top-1/20 md:top-1/4  right-1/3 items-center ">
          <div className="pl-5 w-full">
            <h1 className=" text-white text-2xl md:text-5xl">
              Building Digital Infrastructure for Nations & Enterprises
            </h1>
          </div>
          <div className="text-white pl-5 ">
            <h3>
              POWERING DIGITAL SYSTEMS FOR │ │ GOVERNMENTS, BUSINESSES, │ AND
              THE GLOBAL ECONOMY
            </h3>
            <p className="text-white">
              We design secure, scalable, country-adaptable platforms from tax
              collection and digital identity to payments, Subheading APIs, and
              enterprise systems.
            </p>
            <p>
              ✓ Government-ready systems ✓ Multi-country & multi-currency
              platforms ✓ API-first, secure, scalable architecture
            </p>
            <div className="flex items-center justify-end mt-2.5">
              <div className="z-5 bg-blue-50  flex gap-3 items-end  justify-end text-blue-500  w-auto ">
                <Link
                  href={"/request-demo"}
                  className="text-sm text-shadow-blue-600  p-1.5 hover:bg-blue-500 hover:text-blue-50"
                >
                  {" "}
                  Request a Demo
                </Link>
                <Link
                  href={"/solutions"}
                  className="text-shadow-blue-600  p-1 hover:bg-blue-500 hover:text-blue-50"
                >
                  {" "}
                  Explore Our Solutions
                </Link>
              </div>
            </div>
            <div className="bg-amber-50 text-black  flex justify-center w-fit   text-1xl mt-1.5 p-1.5">
              <p>
             
                Trusted by public institutions and enterprises worldwide{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-200 text-black">
        {" "}
        <h1 className="text-black">
         
          <div>hjk</div>
        </h1>
      </div>
    </>
  );
}
