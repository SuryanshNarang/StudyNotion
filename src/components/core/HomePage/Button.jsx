import React from "react";
import { Link } from "react-router-dom";
// what props we need? text of the button , path, its color yellow or black(its not a color)there will be flag named active jisse pata chlega yellow dikhana h ya black
//children kn hga? learnMore and bookaDemo
const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      {/* text hai children */}
      <div
        className={`text-center text-[13px] px-6 py-3 rounded-md font-bold 
        ${active ? "bg-yellow-50 text-black" : "bg-richblack-800"}
        hover:scale-95 transition-all duration-200
        `}

      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
