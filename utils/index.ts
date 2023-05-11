import React from "react";

export const isOverflown = (ref: React.RefObject<HTMLElement>) => {
  if (!ref.current) return false;
  const { clientHeight, scrollWidth, scrollHeight, clientWidth } = ref.current;
  return scrollHeight > clientHeight || scrollWidth > clientWidth;
};
