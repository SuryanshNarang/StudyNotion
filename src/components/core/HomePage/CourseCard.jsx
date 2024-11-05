import React from 'react';

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  const isActive = currentCard === cardData.heading;

  const handleClick = () => {
    setCurrentCard(cardData.heading);
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer flex flex-col justify-between w-60 p-4 m-2 rounded-lg transition-colors duration-300 
                  ${isActive ? 'bg-white text-black border-l-4 border-yellow-500 shadow-lg' : 'bg-gray-900 text-gray-400'}`}
    >
      <h3 className="text-lg font-bold">{cardData.heading}</h3>
      <p className="text-base">{cardData.description}</p>
      <p className="text-sm mt-auto">Level: {cardData.level}</p>
      <p className="text-sm">Lessons: {cardData.lessonNumber}</p>
    </div>
  );
};

export default CourseCard;
