import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
const Home = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-maxContent">
        <Link to={"/signup"}>
          {/* rounded button is div se create hora hai */}
          <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
            {/* Content */}
            <div className=" flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Heading */}
        <div className="text-center text-4xl font-semibold mt-8">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        {/* SubHeading */}
        <div className="w-[90%] text-center text-lg font-bold text-richblack-200 mt-4">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>
        <div className="flex flex-row gap-7 mt-8 ">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>
        {/* Video Div */}
        <div className="shadow-blue-200 mx-3 my-12">
          <video muted loop autoPlay>
            <source src={Banner} type="video/mp4"></source>
          </video>
        </div>
        {/* CODE SECTION 1 */}
        {/* side by side rkhe hai so? One big div: side by side they are kept in row */}
        {/* then left div flex-column then for buttons flex row */}
        {/* then right div new part: */}
        <div>
          {/* we will send the data as props in this. */}
          <CodeBlocks></CodeBlocks>
        </div>
      </div>
      {/* Section 2 */}
      {/* Section 3 */}
      {/* Footer */}
    </div>
  );
};

export default Home;
