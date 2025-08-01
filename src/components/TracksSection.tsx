import { useNavigate } from "react-router-dom";

export default function TracksSection() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#f4f0f8] py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Program Details */}
          <div className="space-y-8">
            {/* Heading */}
            <div className="text-[#66cc5b] text-sm font-semibold uppercase tracking-wide">
              CHOOSE YOUR PATH
            </div>

            {/* Main Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1b0028] leading-tight">
              Engineering Track
            </h2>

            {/* Program Description */}
            <p className="text-lg text-[#5a515f] leading-relaxed">
              Master AI-powered development for Nigerian fintech APIs, payments,
              and blockchain systems
            </p>

            {/* Key Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#66cc5b] rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-lg text-[#5a515f] font-medium">
                  12 Weeks
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#66cc5b] rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <span className="text-lg text-[#5a515f] font-medium">
                  6 Real Projects
                </span>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#66cc5b] rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-lg text-[#5a515f] font-medium">
                  API Integrations
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#66cc5b] rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-lg text-[#5a515f] font-medium">
                  AI Assisted Coding
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#66cc5b] rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-lg text-[#5a515f] font-medium">
                  Production Deployment
                </span>
              </div>
            </div>

            {/* Call to Action */}
            <button
              onClick={() => navigate("/apply/personal-information")}
              className="bg-[#440066] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#360052] transition-colors duration-200 flex items-center gap-2"
            >
              Apply Now
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Right Section - Visuals and Navigation */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-lg overflow-hidden">
              {/* Blurred Background Image */}
              <div className="w-full h-96 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg relative">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                {/* Abstract Purple Overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#440066] rounded-full opacity-60 transform translate-x-8 -translate-y-8"></div>
              </div>

              {/* Progress/Navigation Indicators */}
              <div className="absolute top-4 right-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#66cc5b] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">01</span>
                  </div>
                  <span className="text-white text-sm font-medium bg-[#66cc5b] px-2 py-1 rounded">
                    Engineering Track
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm font-bold">02</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm font-bold">03</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dotted Border */}
            <div className="absolute inset-0 border-2 border-dashed border-[#440066] rounded-lg opacity-30 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
