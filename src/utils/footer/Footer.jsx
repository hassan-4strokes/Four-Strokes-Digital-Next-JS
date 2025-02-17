import React from "react";
import Link from "next/link";
import { socialMediaIconData } from "@/data/social/SocialMediaIconData";

const Footer = () => {
  return (
    <div className="section flex flex-col justify-between w-full px-[30px] sm:px-[50px] xl:px-[12vw] bg-[#5DD1FF]">
      <div className="top w-full flex flex-col xl:flex-row gap-12 xl:gap-5 2xl:gap-10 py-12">
        <div className="left w-full xl:w-[30%]">
          <div className="inner-area w-full flex flex-col gap-5">
            <div className="w-fit">
              <a href={"/"}>
                <img src="/logo.webp" alt="Website Logo" className="w-40" />
              </a>
            </div>
            <span className="w-full xl:w-[70%] text-white tracking-widest font-['Creato_Display']">
              1942 Broadway Ste 314C, Boulder, CO 80302, US
            </span>
            <div className="icon-area flex items-center gap-5">
              {socialMediaIconData.map((item, index) => {
                return (
                  <a key={index} href={item.link} target="_blank">
                    <i className={`${item.icon} text-xl text-white`}></i>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="right w-full xl:w-[70%] grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
          <div className="inner-area w-full flex flex-col gap-5">
            <h2 className="text-2xl font-semibold text-white">Useful Links</h2>
            <div className="link-area flex flex-col gap-3 tracking-wider font-['Creato_Display']">
              <a href={"/"} className="text-white w-fit">
                Home
              </a>
              <a href={"/about"} className="text-white w-fit">
                About
              </a>
              <a href={"/services"} className="text-white w-fit">
                Services
              </a>
              <a href={"/portfolio"} className="text-white w-fit">
                Portfolio
              </a>
              <a href={"/locations"} className="text-white w-fit">
                Locations
              </a>
              <a href={"/blogs"} className="text-white w-fit">
                Blogs
              </a>
              <a href={"/contact"} className="text-white w-fit">
                Contact
              </a>
            </div>
          </div>
          <div className="inner-area w-full flex flex-col gap-5">
            <h2 className="text-2xl font-semibold text-white">Services</h2>
            <div className="link-area flex flex-col gap-3 tracking-wider font-['Creato_Display']">
              <a href={"/services/web-design"} className="text-white w-fit">
                Web Design
              </a>
              <a
                href={"/services/custom-website-development"}
                className="text-white w-fit"
              >
                Custom Website Development
              </a>
              <a
                href={"/services/ecommerce-development"}
                className="text-white w-fit"
              >
                Ecommerce Development
              </a>
              <a
                href={"/services/web-application"}
                className="text-white w-fit"
              >
                Web Application
              </a>
              <a
                href={"/services/crm-development"}
                className="text-white w-fit"
              >
                CRM Development
              </a>
              <a
                href={"/services/mvp-development"}
                className="text-white w-fit"
              >
                MVP Development
              </a>
              <a
                href={"/services/android-application"}
                className="text-white w-fit"
              >
                Android Application
              </a>
              <a
                href={"/services/ios-application"}
                className="text-white w-fit"
              >
                IOS Application
              </a>
              <a
                href={"/services/react-native-application"}
                className="text-white w-fit"
              >
                React Native Application
              </a>
              <a
                href={"/services/flutter-application"}
                className="text-white w-fit"
              >
                Flutter Application
              </a>
              <a
                href={"/services/cross-platform-application"}
                className="text-white w-fit"
              >
                Cross Platform Application
              </a>
            </div>
          </div>
          <div className="inner-area w-full flex flex-col gap-5">
            <h2 className="text-2xl font-semibold text-white">Company</h2>
            <div className="link-area flex flex-col gap-3 tracking-wider font-['Creato_Display']">
              <a href={"/support"} className="text-white w-fit">
                Support
              </a>
              <a href={"/privacy-policy"} className="text-white w-fit">
                Privacy Policy
              </a>
              <a href={"/terms-and-conditions"} className="text-white w-fit">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom w-full h-fit flex items-center justify-center border-t-[1px] border-[#FFFFFF] py-5">
        <span className="text-white">
          All rights reserved – Four Strokes Digital
        </span>
      </div>
    </div>
  );
};

export default Footer;
