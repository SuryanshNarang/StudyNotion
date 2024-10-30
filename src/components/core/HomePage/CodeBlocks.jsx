import React from "react";
import CTAButton from "../HomePage/Button";
import HighlightText from "./HighlightText";
import { FaArrowRight } from "react-icons/fa";

// this componenet need highlight text also CTAButton component also.(reuse of components started.)
const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div className={`flex ${position} my-20 justify-between gap-10 `}>
      {/* Section 1 */}
      {/* left section */}
      <div className="w-[50%] flex flex-col gap-8 ">
        {heading}
        <div className="text-richblack-300 font-bold ">{subheading}</div>
        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            {/* yellow button text and arrow */}
            <div className="flex gap-2 items-center">
              {ctabtn1.text}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {/* yellow button text and arrow */}
            {ctabtn2.text}
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
