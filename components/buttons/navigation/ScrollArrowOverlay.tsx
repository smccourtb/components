import React from "react";

type ScrollArrowOverlayProps = {
  scrollHandler: (direction: "left" | "right") => void;
  disabled: boolean;
  children: JSX.Element;
  direction: "left" | "right";
};
const ScrollArrowOverlay = ({
  scrollHandler,
  disabled,
  children,
  direction,
}: ScrollArrowOverlayProps) => {
  const gradient =
    direction === "left"
      ? "left-0 bg-gradient-to-r"
      : "right-0 bg-gradient-to-l";

  return (
    <>
      <div
        className={`absolute top-0 ${gradient} w-2/12 from-white from-50% h-full animate-fadeIn pointer-events-none`}
      />
      <button
        className={`h-full w-6 absolute top-0 ${
          direction === "left" ? "left-0" : "right-0"
        } animate-fadeIn`}
        onClick={() => scrollHandler(direction)}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default ScrollArrowOverlay;
