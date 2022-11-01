import React from "react";
import { features, navLinks } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

function FeatureCard({ icon, title, content, index }) {
  <div>
    <div>
      <img src={icon} alt="icon" />
      <h4 className="text-gradient text-[30px]">{title}</h4>
    </div>
  </div>;
}

function Business() {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h4 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we{"’"}ll
          handle the money.
        </h4>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {/* <div className="text-gradient text-[60px]">hello world</div> */}
        {features.map((feature, index) => (
          // <FeatureCard key={feature.id} {...feature}/>
          <div key={feature.id}>
            <h4 className="text-gradient text-[30px]">{feature.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Business;
