import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

function FeatureCard({ icon, title, index, content }) {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}
      >
        <h4 className="w-[50%] h-[50%] object-contain">{icon}</h4>
      </div>
      <div className="flex flex-1 ml-3 flex-col">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
          {content}
        </p>
      </div>
    </div>
  );
}

function Business() {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h4 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h4>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} />
          // <div key={feature.id}>
          //   <div>
          //     <h4 className="text-gradient text-[30px]">{feature.title}</h4>
          //     <h4 className="text-gradient text-[30px]">{feature.content}</h4>
          //     <h4 className="text-gradient text-[30px]">{feature.icon}</h4>
          //   </div>
          // </div>
        ))}
      </div>
    </section>
  );
}

export default Business;
