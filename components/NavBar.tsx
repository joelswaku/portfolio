"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, User, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/types/nav";

type itemType = {
  items: navItems[];
};

function NavBar({ items }: itemType) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-blue-200  shadow-2xl   sticky top-0 z-50">
        <div className="flex justify-between items-center border-b md:border-0bg-blue-200 sticky top-0 ">
          <div className="  hover:bg-red hover:opacity-78 hover:scale-110 duration-300 hover:transition-transform hover:border-r-2 ">
           
            <Link href={"/"}>
              <div className="flex items-center hover:bd pr-1.5 ">
                <Image
                  src={"/logo.png"}
                  alt="logo"
                  width={60}
                  height={60}
                  className="bg-blue-200"
                />
                <span className="font-bold text-xl md:text-2xl ">
                  <h1>inter numerque</h1>
                </span>
              </div>
            </Link>
          </div>

          <div>
         
            {/* destop link */}
            <div className="  md:block flex justify-between mr-8  gap-6 p-3 bg-blue-200 hidden transition-transform items-center">
           <div className="flex items-center">
          <Link  href="/profile" className="hover:bg-black hover:text-blue-300 p-1 border-2 rounded-full border-white"> <User/></Link>
           {items.map((item) => (
                <Link
                  key={item.url}
                  href={item.url}
                  className="text-2xl font-bold bg-blue-200 hover:bg-black hover:text-blue-200 transition-all duration-110 p-1  mx-3 p-2 "
                >
                  {item.name}
                </Link>
              ))}
           </div>
           
            </div>
            {/* mobile menu */}
            <div className=" md:hidden block ">
              <button
                onClick={() => {
                  setIsOpen((u) => !u);
                }}
                className="inline-flex items-center mr-3"
              >
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:hidden w-2/2  bg-blue-200 pl-5   mb-1.5 hover:text-amber-100 gap-2 absolute  top-15 z-50 left-0">
          {isOpen &&
            items.map((item) => (
              <Link
                href={item.url}
                key={item.name}
                className=" font-bold hover:text-amber-50 mb-3 pt-4  "
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
