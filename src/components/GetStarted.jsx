import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

export default function GetStarted() {
  return (
    <div
      className={`w-[140px] h-[140px] rounded-full bg-blue-gradient p-0.5 cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
      >
        <div className={`flex flex-row gap-1`}>
          <p className="font-poppins font-medium text-lg leading-6">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="arrow" className="w-6 h-6" />
        </div>
        <p className="font-poppins font-medium text-lg leading-6">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
}
