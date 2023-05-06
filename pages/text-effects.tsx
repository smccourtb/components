import React from "react";
import { NextPage } from "next";
import {
  SlicedText,
  UnderlineFromCenter,
  UnderlineFromLeft,
  UnderlineFromRight,
} from "../components/text";

type DisplayBoxProps = {
  children: React.ReactNode;
  label: string;
};
const DisplayBox = ({ children, label }: DisplayBoxProps) => {
  return (
    <div className="cursor-default overflow-hidden pb-4 shadow-2xl rounded-md w-full h-full flex flex-col items-center justify-center">
      <div className="text-xs bg-gray-400 uppercase font-display w-full text-white text-center p-1 font-bold mb-4">
        {label}
      </div>
      {children}
    </div>
  );
};
const TextEffects: NextPage = () => {
  return (
    <main className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-12 gap-4 m-4">
      <h1 className="col-span-full text-3xl font-display font-bold text-center mb-4">
        Text Effects
      </h1>
      <h2 className="col-span-full text-2xl font-display font-bold text-center my-4">
        Hover
      </h2>
      <DisplayBox label="Underline From Left">
        <UnderlineFromLeft />
      </DisplayBox>
      <DisplayBox label="Underline From Right">
        <UnderlineFromRight />
      </DisplayBox>
      <DisplayBox label="Underline From Center">
        <UnderlineFromCenter />
      </DisplayBox>
      <h2 className="col-span-full text-2xl font-display font-bold text-center mt-8 mb-4">
        Static
      </h2>
      <section className="col-span-full">
        <DisplayBox label="Sliced Effect">
          <SlicedText>Sliced</SlicedText>
        </DisplayBox>
      </section>
    </main>
  );
};

export default TextEffects;
