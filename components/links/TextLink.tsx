import React from "react";

export type LinkProps = {
  name: string;
  to?: string;
  styles?: string;
  children?: React.ReactNode | React.ReactNode[];
};

// TODO: Other link component ideas: downloadable link (downloadable tag), link that opens a drop down

const TextLink = ({ name, to, styles, children }: LinkProps) => {
  // possible attributes that aren't supported: hreflang, ping
  const href = to ?? `/${name.toLowerCase()}`;
  // TODO: move link related functions to utils/links file and import them here
  const determineHrefType = () => {
    if (to) {
      const isExternal = to.startsWith("http");
      const isInternal = to.startsWith("/");
      const isAnchor = to.startsWith("#");
      return { isExternal, isInternal, isAnchor };
    }
    return { isExternal: false, isInternal: true, isAnchor: false };
  };

  const handleTarget = () => {
    const { isExternal } = determineHrefType();
    if (isExternal) return "_blank";
    else return "_self";
  };

  return (
    <a
      href={href}
      className={`${styles} `}
      rel="noreferrer noopener"
      target={handleTarget()}
    >
      {children ?? name}
    </a>
  );
};

export default TextLink;
