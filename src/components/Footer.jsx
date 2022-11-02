import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col w-full mb-8`}>
        <div className="flex flex-1 justify-start flex-col mr-10">
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] flex-row flex-wrap flex justify-between mt-10 md:mt-0 w-full">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.title}
              className="min-w-[150px] my-4 ss:my-0 flex flex-col"
            >
              <h4 className="font-poppins font-medium lext-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((links, index) => (
                  <li
                    key={links.name}
                    className={`font-poppins text-[16px] text-dimWhite leading-[24px] cursor-pointer hover:text-secondary ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {links.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center flex-col pt-6 border-t-[1px] border-t-[#3f3e45] md:flex-row">
        <p className="font-poppins font-normal lext-[18px] text-center leading-[27px] text-white">
          Copyright 2022 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row mt-6 md:mt-0">
          {socialMedia.map((social, index) => (
            <img
              src={social.icon}
              alt={social.id}
              key={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
