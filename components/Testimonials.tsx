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
    <section id="testimonials" className="md:container md:max-w-screen-xl md:mx-auto py-20">
      <h3 className="text-4xl text-white text-center font-light mb-20">
        What they’ve said
      </h3>
      <div className="md:grid grid-cols-1 md:grid-cols-4 md:gap-x-5 mb-10 hidden">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-white relative pt-12 pb-5"
          >
            <Image
              src={testimonial.image}
              width={75}
              height={75}
              alt="testimonial"
              className="w-12 h-auto absolute top-0 transform right-1/2 translate-x-1/2 -translate-y-1/2 "
            />
            <div className="px-5">
              <span className="text-sm font-semibold text-center text-[#050d11] block mb-3">
                {testimonial.name}
              </span>
              <p className="text-[#1f526b] text-sm text-center font-light">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* SLIDER */}
      <div className="bg-white mb-5 mx-5 md:mb-0 relative pt-12 pb-5 md:hidden flex">
        <Image
          src={testimonials[index].image}
          width={75}
          height={75}
          alt="testimonial"
          className="w-12 h-auto absolute top-0 transform right-1/2 translate-x-1/2 -translate-y-1/2 "
        />
        <div className="px-5">
          <span className="text-sm font-semibold text-center text-[#050d11] block mb-3">
            {testimonials[index].name}
          </span>
          <p className="text-[#1f526b] text-xs text-center font-light">
            {testimonials[index].text}
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-x-2 md:hidden mb-20">
        <button>
          <BsChevronLeft
            onClick={handlePrev}
            className="block h-6 w-6 text-white transition delay-150 ease-in-out hover:-translate-x-1 bg-brightRed rounded-full px-1 py-1"
          />
        </button>
        <button>
          <BsChevronRight
            onClick={handleNext}
            className="block h-6 w-6 text-white transition delay-150 ease-in-out hover:translate-x-1 bg-brightRed rounded-full px-1 py-1"
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
