"use client";

import ExpandableCardDemo from "@/components/expandable-card-demo-standard";
import { ArrowDownLeft } from "lucide-react";
import React from "react";


const Page = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full">
      
      <div className="roboto-condensed text-8xl py-20 px-60">
        <h1>
          Creating next level <br /> digital projects
        </h1>
      </div>
      <div className="flex justify-end px-100">
        <ArrowDownLeft/>
      </div>

      <div className="flex justify-center py-20 w-full">
         <div className="h-full w-full"><ExpandableCardDemo /></div>
      </div>
    </div>
  );
};

export default Page;
