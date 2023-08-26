import React from "react";
import styles from "../style";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="flex w-full flex-col md:flex-row items-center  sm:mb-16 mb-6 relative z-10 gap-6 md:gap-32">
        <h2 className={`${styles.heading2} max-w-[470px]`}>
          What people are saying about us
        </h2>
        <p className={`${styles.paragraph} max-w-[450px] mt-6 md:mt-0`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className="grid grid-auto-fit feedback-container relative z-10 w-full">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
