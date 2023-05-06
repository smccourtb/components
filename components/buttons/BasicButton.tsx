import React from "react";

type TextButtonProps = {
  children: React.ReactNode | React.ReactNode[];
  onClick?: () => void;
};
const TextButton = ({ children, onClick }: TextButtonProps) => {
  return (
    <button
      className={
        "w-full h-full bg-purple-500 text-white hover:bg-blue-500 transition-color duration-300 ease-in-out"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TextButton;
