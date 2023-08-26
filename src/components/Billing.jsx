import React from "react";
import styles, { layout } from "../style";
import { apple, bill, google } from "../assets";

export default function Billing() {
  return (
    <section id="billing" className={`${layout.sectionReverse} gap-14`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="billing" className="w-full h-full relative z-10" />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 top-0 w-[50%] h-[50%] rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} max-w-[470px]`}>
          Easily control your billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6 gap-5 ">
          <img
            src={apple}
            alt="google_play"
            className="w-[128.86px] h-[42.05px] cursor-pointer"
          />
          <img
            src={google}
            alt="google_play"
            className="w-[144.17px] h-[43.08px]  cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
