import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Chessboards",
  "Podcasts",
  "Music",
  "Mixes",
  "Systems design",
  " APIs",
  " Comedy clubs",
  "Satire",
  "Source code",
  "Live",
  "Stocks",
  "Gadgets",
  "Indian Music",
  "Recently uploaded",
  "watched",
  "New to you",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, num) => {
        return <Button key={num} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
