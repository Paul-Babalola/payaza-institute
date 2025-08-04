import { Calendar, Monitor, CheckCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EngineeringImage from "../assets/Engineering.jpg";
// Fallback to Engineering image if Product image fails to load
import ProductImage from "../assets/product.jpg";

interface TracksSectionProps {
  track: "engineering" | "product";
  onTrackChange?: (track: "engineering" | "product") => void;
}

export default function TracksSection({
  track,
  onTrackChange,
}: TracksSectionProps) {
  const navigate = useNavigate();
  const isProductTrack = track === "product";

  const trackData = {
    engineering: {
      title: "Engineering",
      subtitle: "Track",
      description:
        "Master AI-powered development for Nigerian fintech APIs, payments, and blockchain systems",
      image: EngineeringImage,
      trackNumber: "01",
      trackName: "Engineering Track",
      nextTrack: "02",
      background: "bg-white",
      textColor: "text-black",
      iconColor: "text-primary-green-600",
      buttonGradient: "linear-gradient(to right, #813AA4, #440066)",
      buttonTextColor: "text-white",
      headerTextColor: "text-primary-green-700",
      progressColor: "border-primary-green-700",
      progressTextColor: "text-primary-green-700",
    },
    product: {
      title: "Product & Design Track",
      subtitle: "",
      description:
        "Master user experience design, product strategy, and design systems for fintech applications",
      image: ProductImage,
      trackNumber: "02",
      trackName: "Product & Design Track",
      nextTrack: "01",
      background: "bg-primary-indigo-700",
      textColor: "text-white",
      iconColor: "text-primary-green-200",
      buttonGradient: "linear-gradient(to right, #80ff72, #4d9944)",
      buttonTextColor: "text-black",
      headerTextColor: "text-primary-green-700",
      progressColor: "border-white",
      progressTextColor: "text-white",
    },
  };

  const currentTrack = trackData[track];

  // Debug logging
  console.log("Current track:", track);
  console.log("Is product track:", isProductTrack);
  console.log("Track data:", currentTrack);

  const handleNextTrack = () => {
    if (onTrackChange) {
      onTrackChange(isProductTrack ? "engineering" : "product");
    }
  };

  const handleApplyNow = () => {
    // Save the selected track to localStorage
    localStorage.setItem(
      "selectedTrack",
      isProductTrack ? "Product and Design Track" : "Engineering Track"
    );
    // Navigate to the application form
    navigate("/apply");
  };

  return (
    <div
      id="tracks"
      className={`min-h-screen ${currentTrack.background} px-4 py-12 md:px-8 lg:px-16 xl:px-32 transition-all duration-500`}
    >
      <div className="mx-auto max-w-6xl mt-10">
        {/* Header and Progress Indicators - Full Width */}
        <div
          className={`flex items-center ${
            isProductTrack ? "justify-start" : "justify-between"
          } mb-8 w-full`}
        >
          {isProductTrack ? (
            <>
              {/* Progress Indicators - Left side for Product track */}
              <div className="flex items-center gap-4 sm:gap-6 mr-8 sm:mr-16 md:mr-24 lg:mr-32 xl:mr-110">
                <button
                  onClick={handleNextTrack}
                  className={`flex items-center gap-2 pb-2 border-b-2 border-white/30 px-2 hover:border-white/50 transition-colors cursor-pointer ${
                    isProductTrack ? "hover:bg-white/10" : "hover:bg-black/10"
                  } rounded-t-md`}
                >
                  <span
                    className={`${
                      isProductTrack ? "text-white/60" : "text-black/60"
                    } text-lg font-medium hover:${
                      isProductTrack ? "text-white/80" : "text-black/80"
                    } transition-colors`}
                    style={{ fontFamily: "var(--font-rebond)" }}
                  >
                    01
                  </span>
                </button>
                <div
                  className={`flex items-center gap-2 pb-2 border-b-2 ${currentTrack.progressColor}`}
                >
                  <span
                    className={`${currentTrack.progressTextColor} text-xl font-bold`}
                    style={{ fontFamily: "var(--font-rebond)" }}
                  >
                    {currentTrack.trackNumber}
                  </span>
                  <span
                    className={`${currentTrack.progressTextColor} text-xl font-bold hidden sm:inline`}
                    style={{ fontFamily: "var(--font-rebond)" }}
                  >
                    {currentTrack.trackName}
                  </span>
                </div>
              </div>

              {/* CHOOSE YOUR PATH - Positioned where title starts for Product track */}
              <p
                className={`${currentTrack.headerTextColor} font-semibold text-base sm:text-lg italic tracking-wide`}
                style={{ fontFamily: "var(--font-rebond)" }}
              >
                CHOOSE YOUR PATH
              </p>
            </>
          ) : (
            <>
              {/* CHOOSE YOUR PATH - Left side for Engineering track */}
              <p
                className={`${currentTrack.headerTextColor} font-semibold text-lg italic tracking-wide`}
                style={{ fontFamily: "var(--font-rebond)" }}
              >
                CHOOSE YOUR PATH
              </p>

              {/* Progress Indicators - Right side for Engineering track */}
              <div className="flex items-center gap-6">
                <div
                  className={`flex items-center gap-2 pb-2 border-b-2 ${currentTrack.progressColor}`}
                >
                  <span
                    className={`${currentTrack.progressTextColor} text-xl font-bold`}
                    style={{ fontFamily: "var(--font-rebond)" }}
                  >
                    {currentTrack.trackNumber}
                  </span>
                  <span
                    className={`${currentTrack.progressTextColor} text-xl font-bold hidden sm:inline`}
                    style={{ fontFamily: "var(--font-rebond)" }}
                  >
                    {currentTrack.trackName}
                  </span>
                </div>
                <button
                  onClick={handleNextTrack}
                  className={`flex items-center gap-2 pb-2 border-b-2 border-white/30 px-2 hover:border-white/50 transition-colors cursor-pointer ${
                    isProductTrack ? "hover:bg-white/10" : "hover:bg-black/10"
                  } rounded-t-md`}
                >
                  <span
                    className={`${
                      isProductTrack ? "text-white/60" : "text-black/60"
                    } text-lg font-medium hover:${
                      isProductTrack ? "text-white/80" : "text-black/80"
                    } transition-colors`}
                    style={{ fontFamily: "var(--font-rebond)" }}
                  >
                    {currentTrack.nextTrack}
                  </span>
                </button>
              </div>
            </>
          )}
        </div>

        <div
          className={`flex flex-col lg:flex-row items-start gap-8 lg:gap-20 xl:gap-32 ${
            isProductTrack
              ? "lg:flex-row-reverse lg:gap-16 xl:gap-24 2xl:gap-40"
              : ""
          }`}
        >
          {/* Left Content Section */}
          <div
            className={`flex-1 ${
              isProductTrack ? "max-w-lg lg:max-w-xl" : "max-w-lg"
            }`}
          >
            {/* Main Title */}
            <div className="mb-6">
              <h1
                className={`${currentTrack.textColor} text-6xl md:text-7xl lg:text-[70px] font-semibold italic leading-[1.1] mb-6 -tracking-wider`}
                style={{ fontFamily: "var(--font-rebond)" }}
              >
                {currentTrack.title}
                <br />
                {currentTrack.subtitle}
              </h1>
              <p
                className={`${
                  currentTrack.textColor
                } text-xl md:text-2xl leading-[1.5] ${
                  isProductTrack ? "max-w-lg" : "max-w-md"
                }`}
                style={{ fontFamily: "var(--font-rebond)" }}
              >
                {currentTrack.description}
              </p>
            </div>

            {/* Course Details */}
            <div className="mb-8">
              {/* Duration and Projects */}
              <div className="flex flex-wrap items-center gap-6 md:gap-8 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className={`w-5 h-5 ${currentTrack.iconColor}`} />
                  <span
                    className={`${currentTrack.textColor} text-lg font-medium`}
                    style={{ fontFamily: "var(--font-rebond)" }}
                  >
                    12 Weeks
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Monitor className={`w-5 h-5 ${currentTrack.iconColor}`} />
                  <span
                    className={`${currentTrack.textColor} text-lg font-medium`}
                    style={{ fontFamily: "var(--font-rebond)" }}
                  >
                    6 Real Projects
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className={`w-5 h-5 ${currentTrack.iconColor}`}
                  />
                  <span
                    className={`${currentTrack.textColor} text-lg font-medium`}
                    style={{ fontFamily: "var(--font-rebond)" }}
                  >
                    {isProductTrack ? "UX Research" : "API Integrations"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className={`w-5 h-5 ${currentTrack.iconColor}`}
                  />
                  <span
                    className={`${currentTrack.textColor} text-lg font-medium`}
                    style={{ fontFamily: "var(--font-rebond)" }}
                  >
                    {isProductTrack ? "Design Systems" : "AI Assisted Coding"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className={`w-5 h-5 ${currentTrack.iconColor}`}
                  />
                  <span
                    className={`${currentTrack.textColor} text-lg font-medium`}
                    style={{ fontFamily: "var(--font-rebond)" }}
                  >
                    {isProductTrack
                      ? "Product Strategy"
                      : "Production Deployment"}
                  </span>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <button
              className={`apply-button ${currentTrack.buttonTextColor} px-6 py-4 rounded-full flex items-center gap-1 hover:opacity-90 transition-opacity group shadow-lg`}
              style={{
                fontFamily: "var(--font-rebond)",
                border: "none",
                background: currentTrack.buttonGradient,
                cursor: "pointer",
              }}
              onClick={handleApplyNow}
            >
              <span
                className={`font-medium ${currentTrack.buttonTextColor}`}
                style={{ fontFamily: "var(--font-rebond)" }}
              >
                Apply Now
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Section */}
          <div
            className={`relative ${
              isProductTrack
                ? "w-full max-w-[600px] lg:w-[589px] xl:w-[650px]"
                : "lg:w-full max-w-[600px]"
            }`}
          >
            <div className="relative">
              <img
                src={currentTrack.image}
                alt={currentTrack.title}
                className={`w-full max-w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-2xl relative z-20 ${
                  isProductTrack ? "lg:w-[589px] xl:w-[650px]" : ""
                }`}
                onError={(e) => {
                  console.log("Image failed to load, using fallback");
                  e.currentTarget.src = EngineeringImage;
                }}
              />
              {/* Ribbon SVG */}
              <div
                className={`absolute -top-90 pointer-events-none overflow-hidden z-10 ${
                  isProductTrack
                    ? "-right-320 -top-[200px] scale-x-[-1] scale-y-[-1] w-[80rem] sm:w-[88rem] md:w-[96rem] lg:w-[112rem] xl:w-[128rem] 2xl:w-[144rem] h-[40rem] sm:h-[44rem] md:h-[48rem] lg:h-[56rem] xl:h-[60rem] 2xl:h-[64rem]"
                    : "-left-220 w-[48rem] sm:w-[56rem] md:w-[64rem] lg:w-[80rem] xl:w-[96rem] 2xl:w-[112rem] h-96 sm:h-[28rem] md:h-[32rem] lg:h-[40rem] xl:h-[48rem] 2xl:h-[56rem]"
                }`}
              >
                <svg
                  width="1439"
                  height="282"
                  viewBox="0 0 1439 282"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <g opacity="0.95" filter="url(#filter0_di_4193_481)">
                    <path
                      d="M1954 233.804C1314.5 214.804 442.277 286.715 1206.66 -270.937C1706.35 -635.481 -288.16 -780.993 -238.302 -1181.29"
                      stroke="url(#paint0_linear_4193_481)"
                      strokeWidth="80"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_di_4193_481"
                      x="-283.24"
                      y="-1221.29"
                      width="2281.24"
                      height="1503.1"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4193_481"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4193_481"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.505882 0 0 0 0 0.227451 0 0 0 0 0.643137 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect2_innerShadow_4193_481"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_4193_481"
                      x1="-114.756"
                      y1="-639.703"
                      x2="1540.8"
                      y2="-1006.42"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.0367293" stopColor="#0F0216" />
                      <stop offset="0.0522221" stopColor="#0F0216" />
                      <stop offset="0.114311" stopColor="#0F0216" />
                      <stop offset="0.3125" stopColor="#471D5C" />
                      <stop offset="0.498488" stopColor="#8947AA" />
                      <stop offset="0.593866" stopColor="#60098C" />
                      <stop offset="0.690308" stopColor="#4A1E60" />
                      <stop offset="0.814519" stopColor="#0F0216" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
