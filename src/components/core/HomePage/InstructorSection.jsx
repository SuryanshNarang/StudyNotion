import React from "react";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "../HomePage/Button";
import { FaArrowRight } from "react-icons/fa";


const InstructorSection = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col gap-20 items-center">
        {/* left div */}
        <div className="lg:w-[50%]">
          <img src={Instructor} alt="" className="mt-16 shadow-white" />
        </div>
        {/* right div */}
        <div className="lg:w-[50%] flex flex-col gap-10">
          <div className="text-4xl font-semibold lg:w-[50%] text-white">
            Become an
            <HighlightText text={"Instructor"} />
          </div>
          <p className="font-medium text-[16px] lg:w-[80%] text-richblack-300">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love
          </p>
          <div className="w-fit">
            {" "}
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex flex-row gap-2 items-center ">
                Start Learning today <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
