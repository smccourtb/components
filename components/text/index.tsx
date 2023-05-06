import React from "react";

type TextProps = {
  children?: React.ReactNode;
};
export const UnderlineFromLeft = ({ children }: TextProps) => {
  return (
    <p className="w-fit  pb-1 bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
      {children ?? "Hover Me"}
    </p>
  );
};

export const UnderlineFromRight = ({ children }: TextProps) => {
  return (
    <p className="w-fit  pb-1 bg-right-bottom bg-gradient-to-l from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
      {children ?? "Hover Me"}
    </p>
  );
};

export const UnderlineFromCenter = ({ children }: TextProps) => {
  return (
    <p className="bg-bottom bg-gradient-to-l bg-no-repeat bg-[length:0%_2px] duration-500 ease-out from-pink-500 group-hover:bg-[length:100%_2px] hover:bg-[length:100%_2px] pb-1 to-pink-500 transition-all w-fit">
      {children ?? "Hover Me"}
    </p>
  );
};

export const SlicedText = ({ children }: TextProps) => {
  // tailwind doesn't have a way to use clip path, so we need to set it in css classes: top, bottom
  //https://codepen.io/TajShireen/pen/ExLWgGb - source

  return (
    <section className="grid text-white place-content-center bg-black p-4 font-Oswald uppercase font-bold">
      <div className="top grid-area row-span-full col-span-full">
        {children}
      </div>
      <div
        className="bottom grid-area row-span-full col-span-full text-transparent bg-clip-text translate-x-[-0.02em] translate-y-[0.055em] bg-gradient-to-t from-white from-35% to-black to-65% rotate-[177%] origin-bottom  "
        aria-hidden="true"
      >
        {children}
      </div>
    </section>
  );
};
