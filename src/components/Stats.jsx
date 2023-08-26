import React from "react";
import styles from "../style";
import { stats } from "../constants";

export default function Stats() {
  return (
    <div
      className={`${styles.flexCenter} justify-between flex-wrap mb-6 sm:mb-20`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex gap-6 justify-start items-center m-3"
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-3xl xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins xs:text-[20px] text-base xs:leading-[26px] leading-[21px] text-gradient uppercase ">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
}
