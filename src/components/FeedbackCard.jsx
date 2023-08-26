import React from "react";
import { quotes } from "../assets";

export default function FeedbackCard({ content, name, title, img }) {
  return (
    <div className="flex flex-col justify-between px-10 py-12 rounded-[20px] mr-0 md:mr-10 sm:mr-5 my-5 feedback-card  ">
      <img src={quotes} alt="double_quotes" className="w-10 h-7 " />
      <p className="font-poppins text-base leading-8 text-white my-10 max-w-[400px]">
        {content}
      </p>

      <div className="flex flex-row gap-4 items-center">
        <img src={img} alt={name} className="w-12 h-12 rounded-full" />
        <div>
          <h4 className="font-poppins font-semibold text-xl leading-8 text-white">
            {name}
          </h4>
          <p className="font-poppins text-base leading-6 text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
