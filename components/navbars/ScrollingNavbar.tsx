import React, { useEffect } from "react";
import TextLink, { LinkProps } from "../links/TextLink";
import useHorizontalScroll from "../../hooks/useHorizontalScroll";
import ScrollArrowOverlay from "../buttons/navigation/ScrollArrowOverlay";
import { UnderlineFromCenter } from "../text";

type ScrollingNavbarProps = {
  links: string[] | LinkProps[];
};

const ScrollingNavbar = ({ links }: ScrollingNavbarProps) => {
  const {
    scrollContainerRef,
    handleScroll,
    scrollTo,
    isAtStart,
    isAtEnd,
    isOverflowing,
  } = useHorizontalScroll();

  useEffect(() => {
    const onHashChanged = () => {
      console.log("Hash changed", window.location.hash);
    };

    window.addEventListener("hashchange", onHashChanged);

    return () => {
      window.removeEventListener("hashchange", onHashChanged);
    };
  }, []);

  const linksList = links.map((link, index) => {
    if (typeof link === "object")
      return (
        <li
          key={link.name + index}
          className="flex items-center whitespace-nowrap"
        >
          <TextLink {...link} styles={"cursor-pointer"}>
            <UnderlineFromCenter>{link.name}</UnderlineFromCenter>
          </TextLink>
        </li>
      );
    else
      return (
        <li>
          <TextLink key={link} name={link} />
        </li>
      );
  });

  const scrollHandler = (direction: "left" | "right") => {
    const containerWidth = scrollContainerRef.current!.offsetWidth;
    const leftover = Math.abs(
      containerWidth - scrollContainerRef.current!.scrollWidth
    );
    scrollContainerRef.current &&
      scrollTo(
        direction === "left"
          ? -scrollContainerRef.current!.scrollWidth
          : leftover / 3
      );
  };

  return (
    <div className="relative h-full bg-inherit w-full px-2">
      {!isAtEnd && isOverflowing && (
        <ScrollArrowOverlay
          scrollHandler={scrollHandler}
          disabled={isAtEnd}
          direction={"right"}
        >
          <img
            src={
              "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMiIgaWQ9IkxheWVyXzIiPjxwYXRoIGQ9Ik0xMiwyNWExLDEsMCwwLDEtLjcxLS4yOSwxLDEsMCwwLDEsMC0xLjQyTDE4LjU5LDE2bC03LjMtNy4yOWExLDEsMCwxLDEsMS40Mi0xLjQybDgsOGExLDEsMCwwLDEsMCwxLjQybC04LDhBMSwxLDAsMCwxLDEyLDI1WiIvPjwvZz48ZyBpZD0iZnJhbWUiPjxyZWN0IGNsYXNzPSJjbHMtMSIgaGVpZ2h0PSIzMiIgd2lkdGg9IjMyIi8+PC9nPjwvc3ZnPg=="
            }
            alt=""
          />
        </ScrollArrowOverlay>
      )}
      <nav
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex items-center overflow-y-hidden overflow-x-scroll scrollbar-hidden scroll-smooth w-full h-full"
      >
        <ul className={`flex items-center gap-6 w-full h-full`}>{linksList}</ul>
      </nav>
      {!isAtStart && isOverflowing && (
        <ScrollArrowOverlay
          scrollHandler={scrollHandler}
          disabled={isAtStart}
          direction={"left"}
        >
          <img
            src={
              "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnQiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBvbHlsaW5lIHBvaW50cz0iMTUgMTggOSAxMiAxNSA2Ii8+PC9zdmc+"
            }
            alt=""
          />
        </ScrollArrowOverlay>
      )}
    </div>
  );
};

export default ScrollingNavbar;
