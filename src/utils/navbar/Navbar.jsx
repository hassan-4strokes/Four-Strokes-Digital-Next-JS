"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = ({ pageName }) => {

  const [navClick, setNavClick] = useState(false);

  const [hover, setHover] = useState(false);

  const [subHoverOne, setSubHoverOne] = useState(false);

  const [subHoverTwo, setSubHoverTwo] = useState(false);

  const [subHoverThree, setSubHoverThree] = useState(false);

  const [mobileNav, setMobileNav] = useState(false);

  const [mobileNavOne, setMobileNavOne] = useState(false);

  const [mobileNavTwo, setMobileNavTwo] = useState(false);

  const [mobileNavThree, setMobileNavThree] = useState(false);

  return (
    <>
      <div className="header w-full flex flex-col z-[99999999999999999] bg-white">
        <nav className="navbar w-full flex h-[10vh] items-center justify-between px-[30px] sm:px-[50px] xl:px-[12vw] bg-white">
          <div className="logo w-[50%] sm:w-[30%] xl:w-[20%]">
            <div className="w-fit">
              <Link href={"/"} className="w-fit">
                <img src="/logo.webp" alt="Website Logo" className="w-32" />
              </Link>
            </div>
          </div>
          <div className="menu h-full w-[60%] hidden lg:flex items-center justify-center gap-[20px] lg:gap-[40px] text-[14px] lg:text-[17px]">
            {["Home", "About", "Services", "Portfolio", "Blogs", "Contact"].map(
              (item, index) => {
                return (
                  <div key={index} className="a-area h-full w-fit relative">
                    <Link
                      href={
                        item == "Home" ? "/" : "/" + item.toLocaleLowerCase()
                      }
                      onMouseEnter={
                        index == 2
                          ? () => setHover(true)
                          : () => setHover(false)
                      }
                      onMouseLeave={() => setHover(false)}
                      className={`nava h-full ${ item == pageName ? "text-[#5DD1FF]" : "text-black" }
                      flex items-center border-b-[2px] border-transparent hover:border-[#5DD1FF] cursor-pointer hover:text-[#5DD1FF] ${
                        pageName == "Blogs" && item == "Blogs"
                          ? "pointer-events-none"
                          : "pointer-events-auto"
                      }`}
                    >
                      {item}
                    </Link>
                    {index == 2 && (
                      <motion.div
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`submenu-area absolute top-22 -left-7 w-60 ${
                          hover == true ? "grid" : "hidden"
                        } grid-cols-1 gap-[10px] py-2 px-2 rounded-b-xl bg-white`}
                      >
                        <div className="grid grid-cols-1 gap-[10px] relative">
                          <a
                            onClick={() => setHover(false)}
                            onMouseEnter={() => setSubHoverOne(true)}
                            onMouseLeave={() => setSubHoverOne(false)}
                            className="cursor-pointer text-[14px] lg:text-[16px] leading-[25px] text-black pl-4 border-l-[5px] border-[#5DD1FF] shadow-md shadow-[#f3f3f3] py-2 transition-all ease-in-out duration-300 hover:text-white hover:bg-[#5DD1FF]"
                          >
                            Web Development
                          </a>
                          <Link
                            href={"/services/app-development"}
                            onClick={() => setHover(false)}
                            onMouseEnter={() => setSubHoverTwo(true)}
                            onMouseLeave={() => setSubHoverTwo(false)}
                            className="cursor-pointer text-[14px] lg:text-[16px] leading-[25px] text-black pl-4 border-l-[5px] border-[#5DD1FF] shadow-md shadow-[#f3f3f3] py-2 transition-all ease-in-out duration-300 hover:text-white hover:bg-[#5DD1FF]"
                          >
                            App Development
                          </Link>
                          {/* <a
                            onClick={() => setHover(false)}
                            onMouseEnter={() => setSubHoverThree(true)}
                            onMouseLeave={() => setSubHoverThree(false)}
                            className="cursor-pointer text-[14px] lg:text-[16px] leading-[25px] text-black pl-4 border-l-[5px] border-[#5DD1FF] shadow-md shadow-[#f3f3f3] py-2 transition-all ease-in-out duration-300 hover:text-white hover:bg-[#5DD1FF]"
                          >
                            Digital Marketing
                          </a> */}
                          <motion.div
                            onMouseEnter={() => setSubHoverOne(true)}
                            onMouseLeave={() => setSubHoverOne(false)}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className={`w-60 lg:w-72 absolute -top-2 right-0 translate-x-[100%] ${
                              subHoverOne ? "grid" : "hidden"
                            } grid-cols-1 py-2 px-2 rounded-xl rounded-t-none bg-white`}
                          >
                            <div className="inner w-full grid grid-cols-1 gap-[10px] relative">
                              <Link
                                onClick={() => setHover(false)}
                                href={"/services/web-design"}
                                className="cursor-pointer text-[14px] lg:text-[16px] leading-[25px] text-black pl-4 border-l-[5px] border-[#5DD1FF] shadow-md shadow-[#f3f3f3] py-2 transition-all ease-in-out duration-300 hover:text-white hover:bg-[#5DD1FF]"
                              >
                                Web Design
                              </Link>
                              <Link
                                onClick={() => setHover(false)}
                                href={"/services/custom-website-development"}
                                className="cursor-pointer text-[14px] lg:text-[16px] leading-[25px] text-black pl-4 border-l-[5px] border-[#5DD1FF] shadow-md shadow-[#f3f3f3] py-2 transition-all ease-in-out duration-300 hover:text-white hover:bg-[#5DD1FF]"
                              >
                                Custom Website Development
                              </Link>
                              <Link
                                onClick={() => setHover(false)}
                                href={"/services/ecommerce-development"}
                                className="cursor-pointer text-[14px] lg:text-[16px] leading-[25px] text-black pl-4 border-l-[5px] border-[#5DD1FF] shadow-md shadow-[#f3f3f3] py-2 transition-all ease-in-out duration-300 hover:text-white hover:bg-[#5DD1FF]"
                              >
                                Ecommerce Development
                              </Link>
                              <Link
                                onClick={() => setHover(false)}
                                href={"/services/web-application"}
                                className="cursor-pointer text-[14px] lg:text-[16px] leading-[25px] text-black pl-4 border-l-[5px] border-[#5DD1FF] shadow-md shadow-[#f3f3f3] py-2 transition-all ease-in-out duration-300 hover:text-white hover:bg-[#5DD1FF]"
                              >
                                Web Application
                              </Link>
                              <Link
                                onClick={() => setHover(false)}
                                href={"/services/crm-development"}
                                className="cursor-pointer text-[14px] lg:text-[16px] leading-[25px] text-black pl-4 border-l-[5px] border-[#5DD1FF] shadow-md shadow-[#f3f3f3] py-2 transition-all ease-in-out duration-300 hover:text-white hover:bg-[#5DD1FF]"
                              >
                                CRM Development
                              </Link>
                              <Link
                                onClick={() => setHover(false)}
                                href={"/services/mvp-development"}
                                className="cursor-pointer text-[14px] lg:text-[16px] leading-[25px] text-black pl-4 border-l-[5px] border-[#5DD1FF] shadow-md shadow-[#f3f3f3] py-2 transition-all ease-in-out duration-300 hover:text-white hover:bg-[#5DD1FF]"
                              >
                                MVP Development
                              </Link>
                            </div>
                          </motion.div>
                          <motion.div
                            onMouseEnter={() => setSubHoverTwo(true)}
                            onMouseLeave={() => setSubHoverTwo(false)}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className={`w-60 lg:w-72 absolute top-[43px] right-0 translate-x-[100%] ${
                              subHoverTwo ? "grid" : "hidden"
                            } grid-cols-1 py-2 px-2 rounded-xl rounded-tl-none bg-white`}
                          >
                            <div className="inner w-full grid grid-cols-1 gap-[10px]">
                              <Link
                                onClick={() => setHover(false)}
                                href={"/services/android-application"}
                                className="cursor-pointer text-[14px] lg:text-[16px] leading-[25px] text-black pl-4 border-l-[5px] border-[#5DD1FF] shadow-md shadow-[#f3f3f3] py-2 transition-all ease-in-out duration-300 hover:text-white hover:bg-[#5DD1FF]"
                              >
                                Android Application
                              </Link>
                              <Link
                                onClick={() => setHover(false)}
                                href={"/services/ios-application"}
                                className="cursor-pointer text-[14px] lg:text-[16px] leading-[25px] text-black pl-4 border-l-[5px] border-[#5DD1FF] shadow-md shadow-[#f3f3f3] py-2 transition-all ease-in-out duration-300 hover:text-white hover:bg-[#5DD1FF]"
                              >
                                IOS Application
                              </Link>
                              <Link
                                onClick={() => setHover(false)}
                                href={"/services/react-native-application"}
                                className="cursor-pointer text-[14px] lg:text-[16px] leading-[25px] text-black pl-4 border-l-[5px] border-[#5DD1FF] shadow-md shadow-[#f3f3f3] py-2 transition-all ease-in-out duration-300 hover:text-white hover:bg-[#5DD1FF]"
                              >
                                React Native Application
                              </Link>
                              <Link
                                onClick={() => setHover(false)}
                                href={"/services/flutter-application"}
                                className="cursor-pointer text-[14px] lg:text-[16px] leading-[25px] text-black pl-4 border-l-[5px] border-[#5DD1FF] shadow-md shadow-[#f3f3f3] py-2 transition-all ease-in-out duration-300 hover:text-white hover:bg-[#5DD1FF]"
                              >
                                Flutter Application
                              </Link>
                              <Link
                                onClick={() => setHover(false)}
                                href={"/services/cross-platform-application"}
                                className="cursor-pointer text-[14px] lg:text-[16px] leading-[25px] text-black pl-4 border-l-[5px] border-[#5DD1FF] shadow-md shadow-[#f3f3f3] py-2 transition-all ease-in-out duration-300 hover:text-white hover:bg-[#5DD1FF]"
                              >
                                Cross Platform Application
                              </Link>
                            </div>
                          </motion.div>
                          <motion.div
                            onMouseEnter={() => setSubHoverThree(true)}
                            onMouseLeave={() => setSubHoverThree(false)}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className={`w-60 lg:w-72 absolute top-[94px] right-0 translate-x-[100%] ${
                              subHoverThree ? "grid" : "hidden"
                            } grid-cols-1 py-2 px-2 rounded-xl rounded-tl-none bg-white`}
                          >
                            <div className="inner w-full grid grid-cols-1 gap-[10px]">
                              {/* <a
                                onClick={() => setHover(false)}
                                href={
                                  "/services/search-engine-optimization"
                                }
                                className="cursor-pointer text-[14px] lg:text-[16px] leading-[25px] text-black pl-4 border-l-[5px] border-[#5DD1FF] shadow-md shadow-[#f3f3f3] py-2 transition-all ease-in-out duration-300 hover:text-white hover:bg-[#5DD1FF]"
                              >
                                Search Engine Optimization
                              </a> */}
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              }
            )}
          </div>
          <div className="btn-area w-[50%] sm:w-[30%] xl:w-[20%] hidden lg:flex items-center justify-end gap-3">
            <Link
              href={"tel:+19839833762"}
              className="w-fit text-sm md:text-md 2xl:text-lg text-[#5DD1FF] border-[2px] border-[#5DD1FF] px-8 py-[8px] font-['Creato_Display'] bg-transparent transition-all ease-in-out duration-300 hover:bg-[#5DD1FF] hover:text-white"
            >
              +1 983 983 3762
            </Link>
          </div>
          <div className="btn-area w-[50%] flex lg:hidden items-center justify-end">
            <div
              className={`w-fit ${
                navClick == true ? "hidden" : "flex"
              } lg:hidden`}
            >
              <i
                onClick={() => setNavClick(!navClick)}
                className={`cursor-pointer fa-solid fa-bars text-[26px]`}
              ></i>
            </div>
            <div className={`w-fit ${navClick == true ? "flex" : "hidden"}`}>
              <i
                onClick={() => setNavClick(!navClick)}
                className={`cursor-pointer fa-solid fa-xmark text-[26px]`}
              ></i>
            </div>
          </div>
        </nav>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`bottom w-full ${
            navClick == true ? "flex" : "hidden"
          } py-10 px-[30px] bg-white z-[999999999999]`}
        >
          <div className="menu h-full w-full flex flex-col items-center justify-center gap-[30px] text-[17px] font-semibold bg-white">
            <Link
              onClick={() => setNavClick(!navClick)}
              href={"/"}
              className={`navlink h-full flex items-center justify-center text-center`}
            >
              Home
            </Link>
            <Link
              onClick={() => setNavClick(!navClick)}
              href={"/about"}
              className={`navlink h-full flex items-center justify-center text-center`}
            >
              About
            </Link>
            <span
              className={`navlink h-full flex flex-col items-center justify-center text-center`}
            >
              <span
                className={`${
                  mobileNav == true ? "pb-5" : "pb-0"
                } flex items-center`}
              >
                <Link href={"/services"}>Services </Link>
                <span>
                  <i
                    onClick={() => setMobileNav(!mobileNav)}
                    className={`fa-solid fa-angle-${
                      mobileNav == true ? "up" : "down"
                    } -mr-[30px] cursor-pointer`}
                  ></i>
                </span>
              </span>
              <div
                className={`w-full h-fit ${
                  mobileNav == true ? "flex" : "hidden"
                } flex-col gap-[30px] pt-3 bg-white rounded-b-xl`}
              >
                <span
                  className={`cursor-pointer navlink h-full flex flex-col items-center justify-center text-center`}
                >
                  <span
                    className={`${
                      mobileNavOne == true ? "pb-5" : "pb-0"
                    } flex items-center`}
                  >
                    Web Development{" "}
                    <span>
                      <i
                        onClick={() => setMobileNavOne(!mobileNavOne)}
                        className={`fa-solid fa-angle-${
                          mobileNavOne == true ? "up" : "down"
                        } -mr-[30px]`}
                      ></i>
                    </span>
                  </span>
                  <div
                    className={`w-full h-fit ${
                      mobileNavOne == true ? "flex" : "hidden"
                    } flex-col gap-[30px] pt-3 bg-white rounded-b-xl`}
                  >
                    <Link
                      onClick={() => setNavClick(!navClick)}
                      href={"/services/web-design"}
                      className="w-full cursor-pointer text-[17px] leading-[25px] text-black"
                    >
                      Web Design
                    </Link>
                    <Link
                      onClick={() => setNavClick(!navClick)}
                      href={"/services/custom-website-development"}
                      className="w-full cursor-pointer text-[17px] leading-[25px] text-black"
                    >
                      Custom Website Development
                    </Link>
                    <Link
                      onClick={() => setNavClick(!navClick)}
                      href={"/services/ecommerce-development"}
                      className="w-full cursor-pointer text-[17px] leading-[25px] text-black"
                    >
                      Ecommerce Development
                    </Link>
                    <Link
                      onClick={() => setNavClick(!navClick)}
                      href={"/services/web-application"}
                      className="w-full cursor-pointer text-[17px] leading-[25px] text-black"
                    >
                      Web Application
                    </Link>
                    <Link
                      onClick={() => setNavClick(!navClick)}
                      href={"/services/crm-development"}
                      className="w-full cursor-pointer text-[17px] leading-[25px] text-black"
                    >
                      CRM Development
                    </Link>
                    <Link
                      onClick={() => setNavClick(!navClick)}
                      href={"/services/mvp-development"}
                      className="w-full cursor-pointer text-[17px] leading-[25px] text-black"
                    >
                      MVP Development
                    </Link>
                  </div>
                </span>
                <span
                  className={`cursor-pointer navlink h-full flex flex-col items-center justify-center text-center`}
                >
                  <span
                    className={`${
                      mobileNavTwo == true ? "pb-5" : "pb-0"
                    } flex items-center`}
                  >
                    App Development{" "}
                    <span>
                      <i
                        onClick={() => setMobileNavTwo(!mobileNavTwo)}
                        className={`fa-solid fa-angle-${
                          mobileNavTwo == true ? "up" : "down"
                        } -mr-[30px]`}
                      ></i>
                    </span>
                  </span>
                  <div
                    className={`w-full h-fit ${
                      mobileNavTwo == true ? "flex" : "hidden"
                    } flex-col gap-[30px] pt-3 bg-white rounded-b-xl`}
                  >
                    <Link
                      onClick={() => setNavClick(!navClick)}
                      href={"/services/android-application"}
                      className="w-full cursor-pointer text-[17px] leading-[25px] text-black"
                    >
                      Android Application
                    </Link>
                    <Link
                      onClick={() => setNavClick(!navClick)}
                      href={"/services/ios-application"}
                      className="w-full cursor-pointer text-[17px] leading-[25px] text-black"
                    >
                      IOS Application
                    </Link>
                    <Link
                      onClick={() => setNavClick(!navClick)}
                      href={"/services/react-native-application"}
                      className="w-full cursor-pointer text-[17px] leading-[25px] text-black"
                    >
                      React Native Application
                    </Link>
                    <Link
                      onClick={() => setNavClick(!navClick)}
                      href={"/services/flutter-application"}
                      className="w-full cursor-pointer text-[17px] leading-[25px] text-black"
                    >
                      Flutter Application
                    </Link>
                    <Link
                      onClick={() => setNavClick(!navClick)}
                      href={"/services/cross-platform-application"}
                      className="w-full cursor-pointer text-[17px] leading-[25px] text-black"
                    >
                      Cross Platform Application
                    </Link>
                  </div>
                </span>
              </div>
            </span>
            <Link
              onClick={() => setNavClick(!navClick)}
              href={"/portfolio"}
              className={`navlink h-full flex items-center justify-center text-center`}
            >
              Portfolio
            </Link>
            <Link
              onClick={() => setNavClick(!navClick)}
              href={"/blogs"}
              className={`navlink h-full flex items-center justify-center text-center`}
            >
              Blogs
            </Link>
            <Link
              onClick={() => setNavClick(!navClick)}
              href={"/contact"}
              className={`navlink h-full flex items-center justify-center text-center`}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
