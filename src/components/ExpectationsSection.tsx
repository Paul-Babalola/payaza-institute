import { ArrowRightIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ExpectationsSection = (): React.JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const navigate = useNavigate();

  const expectationItems = [
    {
      title: "Self-Paced Online Learning",
      description:
        "Master Africa's fintech ecosystem through curated content that builds strategic and technical skills. Learn on your schedule with interactive modules and real case studies.",
      hasDescription: true,
    },
    {
      title: "Executive Speaker Series",
      description:
        "Attend sessions with CEOs and leaders from across Africa, North America, and Europe. Get insider insights on market trends and strategic challenges at the frontier.",
      hasDescription: true,
    },
    {
      title: "Weekly Office Hours",
      description:
        "Leverage direct access to practitioners implementing fintech solutions across Africa. Get answers to complex challenges and learn from active industry professionals.",
      hasDescription: true,
    },
    {
      title: "Capstone Project",
      description:
        "Apply your learning to real-world fintech challenges. Build a portfolio showcasing your expertise while solving actual industry problems.",
      hasDescription: true,
    },
  ];

  return (
    <div
      className="inline-flex items-center gap-[60px] px-[270px] py-[102px] relative w-full "
      style={{ backgroundColor: "#1d012b" }}
      data-model-id="1:973"
    >
      <section className="flex flex-col w-full items-start gap-6">
        <header className="self-stretch font-rebond font-semibold italic text-[#80FF72] text-lg tracking-[0] leading-[27px] w-[490px]">
          WHAT TO EXPECT
        </header>

        <div className="flex flex-col items-start gap-1 self-stretch w-[490px]">
          <div className="w-full space-y-1">
            {expectationItems.map((item, index) => (
              <div key={index} className="w-full">
                <button
                  className="w-full text-left py-4 hover:no-underline focus:outline-none focus:ring-0"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <h3 className="font-roobert font-medium italic text-white text-[22px] tracking-[-0.22px] leading-[24px] w-[490px]">
                    {item.title}
                  </h3>
                </button>
                {item.hasDescription && openIndex === index && (
                  <div className="pb-4 w-[506px]">
                    <p className="font-roobert font-normal text-[#DACCE0] text-[18px] leading-[24px] pt-2 self-stretch">
                      {item.description.split("\n").map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {line}
                          {lineIndex <
                            item.description.split("\n").length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                )}
                {/* Gradient Line */}
                <div className="w-full h-[12px] mt-1">
                  {openIndex === index ? (
                    <div
                      className="w-full h-[1px]"
                      style={{
                        background:
                          "linear-gradient(90deg, #80FF72 0%, #0A2507 100%)",
                      }}
                    />
                  ) : (
                    <div className="w-full h-[1px] bg-[#5A0884]" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate("/apply/personal-information")}
            className="flex items-center justify-center gap-2 px-[10px] py-[15px] h-auto rounded-[96px] bg-[linear-gradient(94deg,rgba(128,255,114,1)_16%,rgba(77,153,68,1)_100%)] hover:bg-[linear-gradient(94deg,rgba(128,255,114,1)_16%,rgba(77,153,68,1)_100%)] transition-all"
          >
            <span className="font-roobert font-medium text-black text-base tracking-[0] leading-4">
              Start your Application
            </span>
            <ArrowRightIcon className="w-6 h-6 text-black" />
          </button>
        </div>
      </section>

      <img
        className="self-stretch w-[509px] relative z-10"
        alt="Frame"
        src="https://c.animaapp.com/ZlBUH6yY/img/frame-2087329385.svg"
      />

      {/* Background Ribbon */}
      <div className="absolute right-1/52 top-1/10 transform -translate-y-1/2 w-screen h-[1280px] opacity-100 z-0 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 1284"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
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
      </div>
    </div>
  );
};
