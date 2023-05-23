"use client";

import Link from "next/link";
import { HiUserCircle } from "react-icons/hi2";
import React, { useState } from "react";
// import { MdOutlineClose, MdMenu } from "react-icons/md";
import { HiBars3, HiXMark } from "react-icons/hi2";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav
      id="home"
      className="flex justify-between px-5 py-10 md:container md:mx-auto md:max-w-screen-xl md:px-0 md:py-5"
    >
      <div>
        <Image
          src="/logo.svg"
          width={120}
          height={120}
          alt="logo"
          className="w-32 object-cover"
        />
      </div>
      <div
        className={`${
          menuOpen
            ? "absolute top-24 z-10 flex w-[90%] flex-col items-center gap-y-10 rounded-3xl bg-[#0B1D26] pb-12 pt-8 text-yellow-300"
            : "hidden gap-x-8 self-center text-white md:flex"
        }`}
      >
        <Link onClick={() => setMenuOpen(false)} href="#home">
          Home
        </Link>
        <Link onClick={() => setMenuOpen(false)} href="#features">
          Features
        </Link>
        <Link onClick={() => setMenuOpen(false)} href="#contact">
          Contact
        </Link>
      </div>
      <div
        className={`${
          menuOpen &&
          "fixed right-0 top-0 z-0 h-screen w-screen bg-gray-500 bg-opacity-25 backdrop-blur-sm md:hidden"
        }`}
      ></div>
      <div className="self-center">
        <HiUserCircle className="w-16 fill-white" />
      </div>
      <button
        className="z-10 flex rounded-full bg-[#0B1D26] px-2 py-2 text-yellow-300 md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >{menuOpen ? <HiXMark /> : <HiBars3 />}</button>
    </nav>
  );
};

export default Navbar;
