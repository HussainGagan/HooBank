import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

export default function Footer() {
  return (
    <section
      id="footer"
      className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
    >
      <div
        className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full justify-between`}
      >
        <div className="flex flex-col w-full flex-[1]">
          <img src={logo} alt="logo" className="w-[266px] mb-8" />
          <p className={`${styles.paragraph} max-w-[312px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="w-full flex flex-row mt-10 md:mt-0 justify-between flex-wrap flex-[1.5]">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.title}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-lg leading-[27px] text-white ">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-6 flex flex-col gap-3">
                {footerLink.links.map((link) => (
                  <li
                    key={link.name}
                    className="font-poppins text-base leading-[24px] text-dimWhite hover:text-secondary cursor-pointer"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row pt-6 justify-between items-center border-t-[1px] border-t-[#3F3E45] gap-6">
        <p className="font-poppins text-lg text-dimWhite leading-[27px]">
          Copyright &copy; 2023 HooBank. All Rights Reserved.
        </p>

        <div className="flex gap-6">
          {socialMedia.map((icon) => (
            <a href={icon.link}>
              <img key={icon.id} src={icon.icon} alt={icon.id} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
