import Image from "next/image";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

type Props = {};

const Features = (props: Props) => {
  return (
    <section id="features" className="container mx-auto max-w-screen-xl">
      <article className="grid grid-cols-1 py-32 md:grid-cols-2">
        <div>
          <div className="relative flex flex-col gap-y-5 px-5 md:px-0 md:pr-32">
            <span className="absolute -top-16 left-0 text-9xl text-white opacity-20 md:-left-20">
              01
            </span>
            <div className="flex gap-x-3 ">
              <div className="h-[2px] w-12 self-center bg-yellow-300"></div>
              <p className="text-sm uppercase tracking-wider text-yellow-300">
                Get Started
              </p>
            </div>
            <h1 className="text-6xl font-light text-white">
              What level of hiker are you?
            </h1>
            <p className="text-white">
              Determining what level of hiker you are can be an important tool
              when planning future hikes. This hiking level guide will help you
              plan hikes according to different hike ratings set by various
              websites like All Trails and Modern Hiker. What type of hiker are
              you – novice, moderate, advanced moderate, expert, or expert
              backpacker?
            </p>
            <div className="mb-10 flex items-center gap-x-3 md:mb-0">
              <span className="text-yellow-300">Read more</span>
              <HiArrowLongRight size={"24px"} className="fill-yellow-300" />
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/mountain-1.jpg"
            width={600}
            height={600}
            alt="img"
            className="h-[400px] w-full object-cover"
          />
        </div>
      </article>
      <article className="grid grid-cols-1 py-32 md:grid-cols-2">
        <div className="row-start-2 row-end-3 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
          <Image
            src="/mountain-2.jpg"
            width={600}
            height={600}
            alt="img"
            className="h-[400px] w-full object-cover"
          />
        </div>
        <div className="row-start-1 row-end-2 md:col-start-2 md:col-end-3">
          <div className="relative flex flex-col gap-y-5 px-5 md:px-0 md:pl-32">
            <span className="absolute -top-16 left-0 text-9xl text-white opacity-20 md:left-12">
              02
            </span>
            <div className="flex gap-x-3 ">
              <div className="h-[2px] w-12 self-center bg-yellow-300"></div>
              <p className="text-sm uppercase tracking-wider text-yellow-300">
                Hiking Essentials
              </p>
            </div>
            <h1 className="text-6xl font-light text-white">
              Picking the right Hiking Gear!
            </h1>
            <p className="text-white">
              The nice thing about beginning hiking is that you don’t really
              need any special gear, you can probably get away with things you
              already have. Let’s start with clothing. A typical mistake hiking
              beginners make is wearing jeans and regular clothes, which will
              get heavy and chafe wif they get sweaty or wet.
            </p>
            <div className="mb-10 flex items-center gap-x-3 md:mb-0">
              <span className="text-yellow-300">Read more</span>
              <HiArrowLongRight size={"24px"} className="fill-yellow-300" />
            </div>
          </div>
        </div>
      </article>
      <article className="grid grid-cols-1 py-32 md:grid-cols-2">
        <div>
          <div className="relative flex flex-col gap-y-5 px-5 md:px-0 md:pr-32">
            <span className="absolute -top-16 left-0 text-9xl text-white opacity-20 md:-left-20">
              03
            </span>
            <div className="flex gap-x-3 ">
              <div className="h-[2px] w-12 self-center bg-yellow-300"></div>
              <p className="text-sm uppercase tracking-wider text-yellow-300">
                where you go is the key
              </p>
            </div>
            <h1 className="text-6xl font-light text-white">
              Understand Your Map & Timing
            </h1>
            <p className="text-white">
              To start, print out the hiking guide and map. If it’s raining,
              throw them in a Zip-Lock bag. Read over the guide, study the map,
              and have a good idea of what to expect. I like to know what my
              next landmark is as I hike. For example, I’ll read the guide and
              know that say, in a mile, I make a right turn at the junction..
            </p>
            <div className="mb-10 flex items-center gap-x-3 md:mb-0">
              <span className="text-yellow-300">Read more</span>
              <HiArrowLongRight size={"24px"} className="fill-yellow-300" />
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/mountain-3.jpg"
            width={600}
            height={600}
            alt="img"
            className="h-[400px] w-full object-cover"
          />
        </div>
      </article>
    </section>
  );
};

export default Features;
