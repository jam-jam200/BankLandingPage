import React from "react";
import Button from "./Button";
import styles from "../style";

function CTA() {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} box-shadow bg-black-gradient-2 flex-col sm:flex-row rounded-[20px]`}
    >
      <div className="flex flex-col flex-1">
        <h2 className={styles.heading2}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:mt-0 sm:ml-10 ml-0 mt-10`}>
        <Button />
      </div>
    </section>
  );
}

export default CTA;
