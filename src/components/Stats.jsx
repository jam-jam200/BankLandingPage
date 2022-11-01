import React from "react";
import { stats } from "../constants";
import styles from "../style";

function Stats() {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className="font-poppins font-semibold leading-[43px] text-white xs:leading-[53px] text-[30px] xs:text-[40px]">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal leading-[21px] text-gradient uppercase ml-3 xs:leading-[26px] text-[15px] xs:text-[20px]">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Stats;
