import React from "react";

export const ProcessSection = (): React.JSX.Element => {
  const steps = [
    {
      number: "01",
      title: "Submit Application",
      description: "Start by filling the application form for us to review",
      icon: "https://c.animaapp.com/a2afXOmA/img/vector-28.svg",
      iconPosition: "top-[126px] left-[120px]",
      contentPosition: "top-[61px] left-[202px]",
      numberPosition: "top-[181px] left-78",
      width: "w-[173px]",
      titleSize: "text-lg",
    },
    {
      number: "02",
      title: "Complete Assessment",
      description:
        "You then complete an assessment according to your chosen path",
      icon: "https://c.animaapp.com/a2afXOmA/img/vector-30.svg",
      iconPosition: "top-[176px] left-[425px]",
      contentPosition: "top-[97px] left-[507px]",
      numberPosition: "top-[222px] left-[636px]",
      width: "w-[201px]",
      titleSize: "text-lg",
    },
    {
      number: "03",
      title: "Learn",
      description:
        "Once accepted, you start your learning journey with support",
      icon: "https://c.animaapp.com/a2afXOmA/img/vector-32.svg",
      iconPosition: "top-[216px] left-[751px]",
      contentPosition: "top-[150px] left-[835px]",
      numberPosition: "top-[265px] left-[951px]",
      width: "w-[201px]",
      titleSize: "text-xl",
    },
    {
      number: "04",
      title: "Collect Certificate",
      description:
        "After fulfilling all requirements, you are given a certificate",
      icon: "https://c.animaapp.com/a2afXOmA/img/vector-33.svg",
      iconPosition: "top-[271px] left-[1065px]",
      contentPosition: "top-[205px] left-[1149px]",
      numberPosition: "top-[330px] left-[1275px]",
      width: "w-[201px]",
      titleSize: "text-xl",
    },
  ];

  return (
    <div
      id="process"
      className="w-full bg-[#1d012b] overflow-hidden text-center"
      data-model-id="4059:1210"
    >
      {/* Desktop Layout - Hidden on mobile/tablet */}
      <div className="hidden lg:block w-full h-[859px]">
        {/* Main Title */}
        <div className="w-[750px] h-[143px] flex-shrink-0 ml-[170px] mt-[50px] mb-[-15px]">
          <h1 className="font-rebond font-normal text-white text-[70px] tracking-[-1.4px] leading-[120%] text-left">
            Transform your{" "}
            <span
              className="font-rebond font-semibold italic"
              style={{
                background:
                  "linear-gradient(90deg, #772E9A 0%, #BC4AF6 63.94%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Career
            </span>{" "}
            in a few{" "}
            <span
              className="font-rebond font-semibold italic"
              style={{
                background:
                  "linear-gradient(90deg, #772E9A 0%, #BC4AF6 63.94%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Steps
            </span>
          </h1>
        </div>

        <div className="w-full h-[1566px]">
          <div className="relative h-[517px] top-[105px] left-[60px]">
            {/* SVG Ribbon Background */}
            {/* <div className="absolute left-0 top-1/12 w-[2000px] h-[1085px] opacity-90 z-0 pointer-events-none">
            <svg
              width="1440"
              height="1284"
              viewBox="0 0 1440 1284"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.54"
                d="M2064.5 1194C1528.56 1506.04 460.351 1320.9 1135 657.5C1576.03 223.825 -156.837 443.369 -166.033 40.0824"
                stroke="url(#paint0_linear_1_950)"
                strokeWidth="80"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_950"
                  x1="-81.1288"
                  y1="558.964"
                  x2="1503.03"
                  y2="-45.829"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0F0216" />
                  <stop offset="0.243842" stopColor="#471D5C" />
                  <stop offset="0.442308" stopColor="#8947AA" />
                  <stop offset="0.572115" stopColor="#60098C" />
                  <stop offset="0.688602" stopColor="#4A1E60" />
                  <stop offset="0.786677" stopColor="#0F0216" />
                </linearGradient>
              </defs>
            </svg>
          </div> */}

            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <img
                  className={`h-[93px] absolute w-16 ${step.iconPosition}`}
                  alt="Vector"
                  src={step.icon}
                />

                <div
                  className={`flex flex-col ${step.width} items-start gap-[9px] absolute ${step.contentPosition}`}
                >
                  <div
                    className={`relative ${
                      step.width === "w-[273px]"
                        ? "self-stretch"
                        : "w-52 mr-[-17.00px] text-left"
                    } mt-[-1.00px] font-roobert font-medium text-[#80FF72] text-lg tracking-[0] leading-normal`}
                  >
                    {step.title}
                  </div>

                  <div
                    className={`relative ${
                      step.title === "Collect Certificate"
                        ? "w-[201px]"
                        : "self-stretch"
                    } font-roobert font-normal text-left text-[#F4F0F8] text-lg tracking-[0] leading-[22.7px]`}
                  >
                    {step.description}
                  </div>
                </div>

                <div
                  className={`absolute w-[67px] h-[39px] ${step.numberPosition} [font-family:'Roobert-SemiBold',Helvetica] font-semibold text-[#ffffff26] text-[52px] tracking-[0] leading-[35.5px] whitespace-nowrap`}
                >
                  {step.number}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout - Hidden on desktop */}
      <div className="lg:hidden w-full min-h-screen px-4 py-12">
        {/* Main Title */}
        <div className="w-full max-w-4xl mx-auto mb-8">
          <h1 className="font-rebond font-normal text-white text-3xl sm:text-4xl md:text-5xl tracking-[-1.4px] leading-[120%] text-center">
            Transform your{" "}
            <span
              className="font-rebond font-semibold italic"
              style={{
                background:
                  "linear-gradient(90deg, #772E9A 0%, #BC4AF6 63.94%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Career
            </span>{" "}
            in a few{" "}
            <span
              className="font-rebond font-semibold italic"
              style={{
                background:
                  "linear-gradient(90deg, #772E9A 0%, #BC4AF6 63.94%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Steps
            </span>
          </h1>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-[#2a0038] rounded-2xl p-6 sm:p-8 border border-[#80FF72]/20"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-[#80FF72] rounded-full flex items-center justify-center">
                <span className="font-roobert font-bold text-[#1d012b] text-lg sm:text-xl">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-4 sm:pt-0">
                {/* Icon - Hidden for screens less than laptop */}
                <div className="hidden lg:block flex-shrink-0">
                  <img
                    className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                    alt={`Step ${step.number} icon`}
                    src={step.icon}
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="font-roobert font-semibold text-[#80FF72] text-lg sm:text-xl mb-2">
                    {step.title}
                  </h3>
                  <p className="font-roobert font-normal text-[#F4F0F8] text-base sm:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connection Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden sm:block absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-[#80FF72]/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
