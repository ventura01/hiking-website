// import Image from "next/image";
import React from "react";
import { HiArrowLongDown } from "react-icons/hi2";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import Navbar from "./Navbar";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    // <section className="bg-[url('/mountain-hero.jpg')] w-full h-screen"></section>
    <section className=" min-h-screen bg-[url('/mountain-hero.jpg')] bg-cover bg-bottom">
      <Navbar />
      <div className="container mx-auto grid max-w-screen-xl px-5 md:grid-cols-[60px_1fr_60px] md:px-0">
        <div className="hidden w-6 flex-col items-center justify-center gap-10 whitespace-nowrap md:flex">
          <span className="rotate-90 text-white">Follow us</span>
          <div className="flex flex-col gap-y-3">
            <BsTwitter className="cursor-pointer fill-white" />
            <BsInstagram className="cursor-pointer fill-white" />
          </div>
        </div>
        <div className="flex flex-col items-center pt-32">
          <div className="flex flex-col gap-y-10">
            <div className="flex gap-x-3 ">
              <div className="h-[2px] w-12 self-center bg-yellow-300"></div>
              <p className="text-sm uppercase tracking-wider text-yellow-300">
                A Hiking Guide
              </p>
            </div>
            <h1 className="text-center text-5xl text-white md:text-left md:text-8xl md:font-normal leading-[60px] font-bold md:leading-normal">
              Be prepared for the <br className="hidden md:flex" />
              Mountains and beyond!
            </h1>
            <div className="flex items-center gap-x-3">
              <span className="text-white">Scroll down</span>
              <HiArrowLongDown size={"24px"} className="fill-white" />
            </div>
          </div>
        </div>
        <div className="hidden gap-x-5 md:flex">
          <div className="flex flex-col items-center justify-center gap-y-8 text-white">
            <span>Start</span>
            <span>01</span>
            <span>02</span>
            <span>03</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex h-12 w-[4px] self-start bg-white"></div>
            <div className="flex h-40 w-[2px] self-center bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
