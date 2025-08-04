import BGImage from "../assets/BG.png";

export default function Index() {
  return (
    <div className="min-h-screen relative overflow-hidden">
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
      </div>

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-0">
        {/* Robot Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-6 sm:mb-8 lg:mb-0 lg:pr-4">
          <div
            className="relative sm:top-[10px]"
            style={{
              width: "435px",
              height: "1287px",
              flexShrink: 0,
              aspectRatio: "24/71",
              marginLeft: "-20px",
              marginTop: "30px",
            }}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c82ab6ccf25ef1a50db82d0b7d3159c1a55a5e60?width=870"
              alt="AI Robot"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:mt-[-100px] lg:w-1/2 lg:pl-4 xl:pl-8 text-left">
          {/* Main Heading */}
          <h1
            className="mb-4 sm:mb-6 lg:mb-8 text-center lg:text-left"
            style={{
              display: "flex",
              width: "140%",
              maxWidth: "710px",
              minHeight: "80px",
              flexDirection: "column",
              justifyContent: "center",
              flexShrink: 0,
              marginTop: "0px",
            }}
          >
            <div
              className="mb-1"
              style={{
                color: "#FFF",
                fontFamily: "Rebond Grotesque",
                fontSize: "clamp(32px, 8vw, 70px)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "120%",
                letterSpacing: "-1.4px",
              }}
            >
              Build Fintech Skills with
            </div>
            <div
              style={{
                background:
                  "linear-gradient(90deg, #772E9A 0%, #BC4AF6 63.94%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Rebond Grotesque",
                fontSize: "clamp(32px, 8vw, 70px)",
                fontStyle: "italic",
                fontWeight: 600,
                lineHeight: "120%",
              }}
            >
              AI Superpowers
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
          <div className="mb-12 sm:mb-16 lg:mb-20 flex justify-center lg:justify-start">
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

          {/* About Us Section */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-base sm:text-lg font-rebond-grotesque font-semibold italic text-[#80ff72] leading-[1.5] text-center lg:text-left">
              ABOUT US
            </h2>
            <div className="space-y-3 sm:space-y-4 max-w-[397px] mx-auto lg:mx-0">
              <p
                style={{
                  color: "#DACCE0",
                  fontFamily: "Roobert",
                  fontSize: "clamp(14px, 3.5vw, 24px)",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "150%",
                }}
                className="text-center lg:text-left"
              >
                Payaza Institute is Africa's first fintech training academy,
                designed to meet the specialized education needs of the
                continent's rapidly growing sector.
              </p>
              <p
                style={{
                  color: "#DACCE0",
                  fontFamily: "Roobert",
                  fontSize: "clamp(14px, 3.5vw, 24px)",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "150%",
                }}
                className="text-center lg:text-left"
              >
                Through expert-led training, industry insights, and practical
                application, we prepare future leaders to navigate complexity
                and build solutions for Africa's diverse markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
