import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from "../HomePage/HighlightText";
const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value); //selected card or active item.
    const result = HomePageExplore.filter((course) => course.tag === value); //HomePageExplore[0].courses is a list of courses.The .filter method finds courses where the tag matches value.This creates a new list, result, containing only courses that match the selected tag (value).
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };
  return (
    <div>
      {/* heading div */}
      <div className="text-4xl font-semibold  text-center my-10">
        Unlock the
        <HighlightText text={"Power of code"} />
      </div>
      <p className="text-center text-richblack-300 text-[16px] font-semibold mt-1 ">
        Learn to build anything you can imagine
      </p>
      {/* TAB COMPONENT */}
      <div className="flex flex-row bg-richblack-800 rounded-full mb-5 mt-5 py-1 border-richblack-100 px-1">
        {tabsName.map((element, index) => {
          return (
            <div
              className={`text-[16px] flex flex-row items-center gap-2 ${
                currentTab === element
                  ? "bg-richblack-900 text-richblack-5 font-medium"
                  : " text-richblack-200 py-2"
              } rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-7 py-7]"
              `}
              key={index}
              onClick={() => setMyCards(element)}
            >
              {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;
