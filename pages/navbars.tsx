import type { NextPage } from "next";
import ScrollingNavbar from "../components/navbars/ScrollingNavbar";
import React from "react";
import TextLink from "../components/links/TextLink";

const links = ["Home", "About", "Contact"];
const linksWithProps = [
  { name: "Home", to: "#home" },
  { name: "About Us", to: "/navbars" },
  { name: "Services", to: "/navbars" },
  { name: "Contact", to: "/navbars" },
  { name: "FAQ", to: "/navbars" },
  { name: "Blog", to: "/navbars" },
  { name: "Portfolio", to: "/navbars" },
  { name: "Team", to: "/navbars" },
  { name: "Testimonials", to: "/navbars" },
  { name: "Pricing", to: "/navbars" },
  { name: "Features", to: "/navbars" },
  { name: "Gallery", to: "/navbars" },
  { name: "Shop", to: "/navbars" },
  { name: "Events", to: "/navbars" },
  { name: "Login", to: "/navbars" },
  { name: "Sign up", to: "/navbars" },
  { name: "Dashboard", to: "/navbars" },
  { name: "Settings", to: "/navbars" },
  { name: "Profile", to: "/navbars" },
  { name: "Logout", to: "/navbars" },
];
const Navbars: NextPage = () => {
  return (
    <main>
      <h1 className="col-span-full text-3xl font-display font-bold text-center mb-4">
        Navbars
      </h1>
      <p className={"text-center w-1/2 mx-auto mb-10"}>
        You can wrap the links with any of the effects from the{" "}
        <TextLink
          name={"text effects"}
          to={"/text-effects"}
          styles={"text-blue-400"}
        />{" "}
        page
      </p>
      <h2 className="col-span-full text-2xl font-display font-bold text-center my-4">
        Horizontal Scroll With Fade Out
      </h2>
      <ScrollingNavbar links={linksWithProps} />
    </main>
  );
};

export default Navbars;
