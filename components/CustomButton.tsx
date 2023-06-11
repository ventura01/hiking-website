"use client";
import { CustomButtonProps } from "@/data";
import { ArrowRight, AirplaneInFlight } from "@phosphor-icons/react";
import React from "react";

type Props = {};

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIconStyles,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`self-start ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={textStyles}>{title}</span>
      {btnType === "button"? <ArrowRight size={24} className={rightIconStyles} /> : <AirplaneInFlight size={24} className={rightIconStyles} />}
    </button>
  );
};

export default CustomButton;
