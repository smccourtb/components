import React from "react";

export const isOverflown = (ref: React.RefObject<HTMLElement>) => {
  if (!ref.current) return false;
  const { clientHeight, scrollWidth, scrollHeight, clientWidth } = ref.current;
  return scrollHeight > clientHeight || scrollWidth > clientWidth;
};

// TODO: safari copies the entire element, not just the class name
export const copyClassNameToClipboard = (e: React.MouseEvent) => {
  const element = e.target as HTMLElement;
  navigator.clipboard
    .writeText(element.className)
    .then((r) => console.log("copied class name to clipboard", r));
};
