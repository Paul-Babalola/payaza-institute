interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const GradientButton = ({
  children,
  onClick,
  className = "",
}: GradientButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
          flex items-center gap-2 px-[18px] py-4 rounded-[96px] 
          bg-gradient-to-r from-[#80FF72] to-[#4D9944] 
          text-black font-medium text-base leading-4 font-roobert
          hover:shadow-lg transition-all duration-200
          ${className}
        `}
    >
      <span>{children}</span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path
          d="M19 12H5"
          stroke="black"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 17L19 12"
          stroke="black"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 7L19 12"
          stroke="black"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default GradientButton;
