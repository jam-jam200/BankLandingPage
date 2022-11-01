import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

function Main() {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 px-6 sm:px-16 xl:px-0 flex-col ${styles.flexStart}`}
      >
        <div className="flex flex-row items-center px-4 py-[6px] rounded-[10px] bg-discount-gradient mb-2">
          <img className="w-[32px] h-[32px]" src={discount} alt="discount" />
          <p className={`ml-2 ${styles.paragraph}`}>
            <span className="text-white">20% </span> Discount For{" "}
            <span className="text-white"> 1 Month </span>
            Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className="font-poppins flex-1 font-semibold ss:text-[72px] text-[52px]
           text-white ss:leading-[100px] leading-[75px]"
          >
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span> <br />
          </h1>
          <div className="ss:flex hidden mr-0 md:mr-0">
            <GetStarted />
          </div>
        </div>

        <h1
          className="font-poppins font-semibold ss:text-[68px] text-[52px]
           text-white ss:leading-[100px] leading-[75px] w-full"
        >
          Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.boxWidth.flexCenter} relative md:my-0 my-10`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-[0] pink__gradient top-0 h-[35%] w-[40%]" />
        <div className="absolute z-[1] white__gradient bottom-40 h-[80%] w-[80%]" />
        <div className="absolute z-[0] blue__gradient right-20 bottom-20 h-[50%] w-[50%]" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>

    </section>
  );
}

export default Main;
