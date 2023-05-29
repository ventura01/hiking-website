"use client";

import React, { useState, useEffect } from "react";
import { HiArrowSmallUp } from "react-icons/hi2";

type Props = {};

const GoToTop = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  const listenToScroll = () => {
    let heightToHidden = 500;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    console.log(winScroll);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <div>
      {isVisible ? (
        <button
          className="fixed bottom-96 right-40 rounded-full bg-[#050d11] p-3 text-yellow-300 hidden md:flex"
          onClick={goToBtn}
        >
          <HiArrowSmallUp />
        </button>
      ) : null}
    </div>
  );
};

export default GoToTop;
