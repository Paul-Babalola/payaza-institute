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
      className="w-full h-[859px] bg-[#1d012b] overflow-hidden text-center"
      data-model-id="4059:1210"
    >
      {/* Main Title */}
      <div className="w-[750px] h-[143px] flex-shrink-0 ml-[170px] mt-[90px] mb-[-40px]">
        <h1 className="font-rebond font-normal text-white text-[70px] tracking-[-1.4px] leading-[120%] text-left">
          Transform your{" "}
          <span
            className="font-rebond font-semibold italic"
            style={{
              background: "linear-gradient(90deg, #772E9A 0%, #BC4AF6 63.94%)",
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
              background: "linear-gradient(90deg, #772E9A 0%, #BC4AF6 63.94%)",
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
        <div className="relative h-[517px] top-[115px] left-[60px]">
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
  );
};
