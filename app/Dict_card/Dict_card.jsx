import React from "react";

const Dict_card = ({ name, author }) => {
  return (
    <div className="bg-[#2e3e70] my-4 py-2 px-6 rounded-md flex justify-between">
      <div>
        <p className="text-white">{name}</p>
        <p className="text-gray-500">{author}</p>
      </div>

      <div>
        <img className="h-8 w-8" src="i.png" alt="i_icon" />
      </div>
    </div>
  );
};

export default Dict_card;
