"use client";

import ExpandableCardDemo from "@/components/expandable-card-demo-standard";
import { ArrowDownLeft } from "lucide-react";
import React from "react";


const Page = () => {
  return (
    <div className="bg-black text-white min-h-screen w-screen overflow-x-hidden">
      
      <div className="roboto-condensed md:text-8xl text-5xl text-center py-20 md:py-20 md:px-60">
        <h1>
          Creating next level <br /> digital projects
        </h1>
      </div>
      <div className="flex justify-end px-10  md:px-100">
        <ArrowDownLeft/>
      </div>

      <div className="flex justify-center  md:py-20 md:w-full">
         <div className="h-full w-full mb-5"><ExpandableCardDemo /></div>
      </div>
    </div>
  );
};

export default Page;
