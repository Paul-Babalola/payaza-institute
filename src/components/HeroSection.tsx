import BGImage from "../assets/BG.png";
import Ribbon from "../assets/Ribbon.png";
import heroimage from "../assets/halfman.png";

export default function Index() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image and Gradient */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <img
          src={BGImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Linear Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "#260635",
            opacity: 0.1,
          }}
        ></div>

        {/* Bottom Right Ribbon */}
        <div
          className="hidden lg:block absolute bottom-0 pointer-events-none z-1"
          style={{ right: "-192px" }}
        >
          <img
            src={Ribbon}
            alt="Decorative Ribbon"
            className="w-auto h-auto max-w-none"
            style={{
              width: "2090px",
              height: "1355px",
              top: "-10px",
              opacity: 1,
            }}
          />
        </div>
      </div>

      <div className="relative mt-5 flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-0">
        {/* Robot Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-6 sm:mb-8 lg:mb-0 lg:pr-4">
          <div
            className="relative sm:top-[10px]"
            style={{
              width: "506px",
              height: "597px",
              flexShrink: 0,
              aspectRatio: "24/71",
              marginLeft: "-50px",
              marginTop: "0px",
              top: "0px",
              zIndex: "0",
              opacity: 0.9,
            }}
          >
            <img
              src={heroimage}
              alt="AI Robot"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full z-2  lg:w-1/2 lg:pl-4 xl:pl-8 text-left">
          {/* Main Heading */}
          <h1
            className="mb-4 sm:pl-0 md:pl-0 sm:mb-6 lg:mb-8 text-center lg:text-left w-full flex flex-col justify-center items-center lg:items-start lg:min-w-[710px]"
            style={{
              minWidth: "100%",
              minHeight: "80px",
              flexShrink: 0,
              marginTop: "0px",
            }}
          >
            <div
              className="mb-1"
              style={{
                color: "#FFF",
                fontFamily: "Rebond Grotesque",
                fontSize: "clamp(28px, 6vw, 70px)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "120%",
                letterSpacing: "-1.4px",
              }}
            >
              Get started with learning{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #772E9A 0%, #BC4AF6 63.94%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "Rebond Grotesque",
                  fontSize: "clamp(28px, 6vw, 70px)",
                  fontStyle: "italic",
                  fontWeight: 600,
                  lineHeight: "120%",
                }}
              >
                {" "}
                Fintech!
              </span>
            </div>
          </h1>

          {/* Subtitle */}
          <p
            className="mb-6 sm:mb-8 lg:mb-12 max-w-[500px] mx-auto lg:mx-0 text-center lg:text-left"
            style={{
              color: "#DACCE0",
              fontFamily: "Roobert",
              fontSize: "clamp(16px, 4vw, 24px)",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "150%",
            }}
          >
            Transform the way you learn fintech with intelligent tools designed
            to accelerate your career journey.
          </p>

          {/* Apply Now Button */}
          <div className="sm:mb-16 lg:mb-20 flex justify-center lg:justify-start">
            <button
              className="inline-flex items-center gap-2 text-black font-medium text-base hover:shadow-lg transition-all duration-300 group"
              style={{
                borderRadius: "96px",
                background:
                  "linear-gradient(94deg, #80FF72 10.85%, #4D9944 109.29%)",
                display: "flex",
                padding: "clamp(12px, 3vw, 16px) clamp(14px, 4vw, 18px)",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "8px",
                fontFamily: "Roobert",
              }}
              onClick={() => (window.location.href = "/apply")}
            >
              <span>Apply Now</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M5 12H19"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        id="about"
        className="px-9 lg:ml-30 lg:mt-50 sm:mt-0 md:mt-30 sm:px-10 md:px-20 lg:px-28 xl:px-32 py-16 sm:py-20 md:py-24 space-y-4 sm:space-y-6 text-left"
      >
        <h2 className="text-sm sm:text-base md:text-lg font-rebond-grotesque font-semibold italic text-[#80ff72] leading-[1.5]">
          ABOUT US
        </h2>
        <div className="space-y-4 max-w-full sm:max-w-[500px]">
          <p
            className="text-[#DACCE0]"
            style={{
              fontFamily: "Roobert",
              fontSize: "clamp(14px, 3.5vw, 24px)",
              fontWeight: 400,
              lineHeight: "150%",
            }}
          >
            Africa's first dedicated fintech training academy. We provide the
            specialized education that Africa's rapidly growing financial
            technology sector demands.
          </p>
          <p
            className="text-[#DACCE0]"
            style={{
              fontFamily: "Roobert",
              fontSize: "clamp(14px, 3.5vw, 24px)",
              fontWeight: 400,
              lineHeight: "150%",
            }}
          >
            Through comprehensive training, industry insights, and practical
            application, we prepare leaders who can navigate complexity and
            create solutions that serve Africa's diverse markets.
          </p>
        </div>
      </div>
    </div>
  );
}
