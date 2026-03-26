
interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

export default function Button({
  text,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={type === "submit" ? undefined : onClick}
      className={`inline-block border border-transparent rounded-[10px] text-sm font-medium py-3 px-4 sm:text-lg cursor-pointer w-full 
        ${
          disabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#32E100] text-[#020716]"
        } 
        ${className}`}
    >
      {text}
    </button>
  );
}