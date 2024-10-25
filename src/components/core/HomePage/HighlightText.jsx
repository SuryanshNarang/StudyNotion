import React from "react";

const HighlightText = ({text}) => {
  return <span className=" font-bold text-richblue-500">
    {" "}
    {/* jo state pass kri thi now we are using props to retrieve that text */}
    {text}
  </span>;
};

export default HighlightText;
