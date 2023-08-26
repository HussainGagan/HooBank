import React from "react";
import styles from "../style";
import Button from "./Button";

export default function CTA() {
  return (
    <section
      id="cta"
      className={`${styles.marginY} ${styles.padding} ${styles.flexCenter} flex-col md:flex-row bg-black-gradient-2 rounded-[20px] box-shadow items-center justify-between`}
    >
      <div className="w-full md:w-max">
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[450px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <Button styles={"mt-10 md:mt-0 self-start md:self-center"} />
    </section>
  );
}
