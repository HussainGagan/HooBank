import React from "react";
import Button from "./Button";
import { layout } from "../style";
import styles from "../style";
import { card } from "../assets";

export default function CardDeal() {
  return (
    <section id="features" className={layout.section}>
      <div className={`${layout.sectionInfo} `}>
        <h2 className={`${styles.heading2} max-w-[600px] `}>
          Find a better card deal in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-2xl md:max-w-lg mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="card" className="w-full h-full" />
      </div>
    </section>
  );
}
