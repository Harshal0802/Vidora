import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-6"
          alt="hamburger-image"
          src="https://www.svgrepo.com/show/499620/menu-burger.svg"
        ></img>
        <img
          className="h-6 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/YouTube_2024.svg/3840px-YouTube_2024.svg.png"
          alt="youtube-image"
        />
      </div>
      <div className="col-span-10 flex px-30">
        <input
          className="w-1/2 border border-gray-400 px-3 py-1 rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 px-4 rounded-r-full">
          <img
            className="h-4"
            src="https://vectorified.com/images/search-button-icon-png-40.jpg"
            alt="alt"
          />
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-6"
          alt="user"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
        />
      </div>
    </div>
  );
};

export default Head;
