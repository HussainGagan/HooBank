import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { features } from "../constants";

function Feature({ id, icon, title, content }) {
  return (
    <div className="flex flex-row gap-5 items-center feedback-card rounded-[20px] px-5 py-6">
      <div className={`${styles.flexCenter} w-16 h-16 rounded-full bg-dimBlue`}>
        <img src={icon} alt="icon" className="w-8 h-8" />
      </div>
      <div className="flex-1">
        <h3 className="font-poppins font-semibold text-lg text-white mb-2">
          {title}
        </h3>
        <p className="font-poppins text-base text-dimWhite leading-[24px] max-w-lg md:max-w-sm">
          {content}
        </p>
      </div>
    </div>
  );
}

export default function Business() {
  return (
    <section id="features" className={layout.section}>
      <div className={`${layout.sectionInfo} `}>
        <h2 className={`${styles.heading2} max-w-[600px] `}>
          You do the business, we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-2xl md:max-w-lg mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col gap-9 items-stretch`}>
        {features.map((feature, index) => (
          <Feature key={feature.id} index={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
