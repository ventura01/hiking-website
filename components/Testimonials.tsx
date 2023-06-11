"use client";

import Image from "next/image";
import React, { useState } from "react";
import { testimonials } from "@/data";
import { TestimonialsProps } from "@/data";
// import ActionBtn from "./ActionBtn";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Testimonials = (props: TestimonialsProps) => {
  const [index, setIndex] = useState(0);
  const handlePrev = () => {
    if (index === 0) {
      return setIndex(testimonials.length - 1);
    }
    setIndex(index - 1);
  };
  const handleNext = () => {
    if (index === testimonials.length - 1) {
      return setIndex(0);
    }
    setIndex(index + 1);
  };
  return (
    <section
      id="testimonials"
      className="py-20 md:container md:mx-auto md:max-w-screen-xl"
    >
      <h3 className="mb-20 text-center text-4xl font-light text-white">
        What they’ve said
      </h3>
      <div className="mb-10 hidden grid-cols-1 md:grid md:grid-cols-4 md:gap-x-5">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="relative bg-white pb-5 pt-12">
            <Image
              src={testimonial.image}
              width={75}
              height={75}
              alt="testimonial"
              className="absolute right-1/2 top-0 h-auto w-12 -translate-y-1/2 translate-x-1/2 transform "
            />
            <div className="px-5">
              <span className="mb-3 block text-center text-sm font-semibold text-[#050d11]">
                {testimonial.name}
              </span>
              <p className="text-center text-sm font-light text-[#1f526b]">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* SLIDER */}
      <div className="relative mx-5 mb-5 flex bg-white pb-5 pt-12 md:mb-0 md:hidden">
        <Image
          src={testimonials[index].image}
          width={75}
          height={75}
          alt="testimonial"
          className="absolute right-1/2 top-0 h-auto w-12 -translate-y-1/2 translate-x-1/2 transform "
        />
        <div className="px-5">
          <span className="mb-3 block text-center text-sm font-semibold text-[#050d11]">
            {testimonials[index].name}
          </span>
          <p className="text-center text-xs font-light text-[#1f526b]">
            {testimonials[index].text}
          </p>
        </div>
      </div>
      <div className="mb-20 flex justify-center gap-x-2 md:hidden">
        <button>
          <BsChevronLeft
            onClick={handlePrev}
            className="bg-brightRed block h-6 w-6 rounded-full px-1 py-1 text-white transition delay-150 ease-in-out hover:-translate-x-1"
          />
        </button>
        <button>
          <BsChevronRight
            onClick={handleNext}
            className="bg-brightRed block h-6 w-6 rounded-full px-1 py-1 text-white transition delay-150 ease-in-out hover:translate-x-1"
          />
        </button>
      </div>
      <div className="flex justify-center">
        {/* <ActionBtn
          className="bg-brightRed hover:bg-red-400 shadow-md shadow-red-300 rounded-full text-white"
          text="Get Started"
        /> */}
      </div>
    </section>
  );
};

export default Testimonials;
