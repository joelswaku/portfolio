import Link from "next/link";
import React from "react";
import CartSection from "../cards/CartSection";

function Section2() {
  return (
    <div className="flex flex-col relative cursor-default">
      <div className="font-bold flex items-center flex-col pb-2.5  md:text-3xl  bg-blue-200  ">
        <h1 className="text-5xl shadow-fuchsia-600 bg-gray-50 p-10">WHAT WE BUILD <br />
        <Link href={"/contact"}  className="text-xl">contact us at globalnunerique@gmail.com</Link></h1>
        <p>Digital systems designed to scale at national & global level</p>
      </div>
    
       <CartSection/>
    </div>
  );
}

export default Section2;
