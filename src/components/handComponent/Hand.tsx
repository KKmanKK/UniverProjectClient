import React, { FC, useState } from "react";
interface HandProps {
  newColor: string;
}
export const Hand: FC<HandProps> = ({ newColor }) => {
  return (
    <div>
      <div className="hand leftH">
        <div className={`point ${newColor === "red" ? "red" : ""} `}></div>
        <div className={`point ${newColor === "yello" ? "yellow" : ""} `}></div>
        <div
          className={`point ${newColor === "lgreen" ? "lightGreen" : ""}`}
        ></div>
        <div className={`point ${newColor === "blue" ? "blue" : ""} `}></div>
        <div
          className={`point ${newColor === "purple" ? "purpleL" : ""} `}
        ></div>
      </div>
      <div className="hand rightH ">
        <div
          className={`point ${newColor === "purple" ? "purpleR" : ""} `}
        ></div>
        <div className={`point ${newColor === "pinck" ? "pinck" : ""}`}></div>
        <div className={`point ${newColor === "lgreen" ? "" : ""} `}></div>
        <div className={`point ${newColor === "lgreen" ? "" : ""} `}></div>
        <div className={`point ${newColor === "lgreen" ? "" : ""} `}></div>
      </div>
    </div>
  );
};
