"use client";

import { useState } from "react";
import Section2Column from "@/utils/section/Section2Column";
import Swal from "sweetalert2";

const ContactFormSection = () => {
  const [service, setService] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "21b7d3d1-da6a-49b7-87b8-772317126fe7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Thank you!",
        text: "Thank you for reaching out to us through our website! We appreciate you taking the time to fill out the form. Your inquiry is important to us, and our team members will be in touch with you soon",
        icon: "success",
      });
    }
  };

  // document.querySelectorAll(".phone-input").forEach((input) => {
  //   input.oninput = () => {
  //     if (input.value.length > input.maxLength)
  //       input.value = input.value.slice(0, input.maxLength);
  //   };
  // });

  return (
    <div
      id="contact-section"
      className="contact-section w-full py-16 xl:py-28 bg-[#F3F6FE]"
    >
      <div className="top w-[80%] md:w-[45%] border-b-[1px] border-[#000000]"></div>
      <div className="bottom w-full px-[30px] sm:px-[50px] xl:px-[12vw]">
        <Section2Column />
        <div className="inner w-full flex flex-col lg:flex-row items-start justify-center sm:justify-between gap-8 2xl:gap-16">
          <div className="left w-full flex flex-col justify-center gap-5 lg:gap-10">
            <div className="inner-top flex flex-col justify-center">
              <h2 className="font-semibold text-[16px] xl:text-[20px]">
                Get In Touch
              </h2>
              <h2 className="font-semibold text-[30px] xl:text-[40px] 2xl:text-[50px]">
                Contact us
              </h2>
              <span className="w-full md:w-[80%] text-justify text-[14px] lg:text-[16px] xl:text-[18px] leading-[26px] xl:leading-[35px] pt-5 text-zinc-700">
                At Four Strokes Digital Success, We prioritize customer
                satisfaction and strive to exceed your expectations. Our
                dedicated support team is always available to address your
                queries and provide timely assistance.
              </span>
            </div>
            <div className="inner-bottom flex flex-col gap-3">
              <div className="inner-section flex flex-col">
                <span className="text-[14px] lg:text-[16px] xl:text-[18px] font-semibold">
                  Phone:
                </span>
                <a href="tel:+1-983-983-3762">
                  <span className="text-[14px] lg:text-[16px] xl:text-[18px] text-zinc-700">
                    +1 ( 983 ) 983-3762
                  </span>
                </a>
              </div>
              <div className="inner-section flex flex-col">
                <span className="text-[14px] lg:text-[16px] xl:text-[18px] font-semibold">
                  Email:
                </span>
                <a href="mailto:info@boostdigitalsuccess.com">
                  <span className="text-[14px] lg:text-[16px] xl:text-[18px] text-zinc-700">
                    info@fourstrokesdigital.com
                  </span>
                </a>
              </div>
              <div className="inner-section flex flex-col">
                <span className="text-[14px] lg:text-[16px] xl:text-[18px] font-semibold">
                  Address:
                </span>
                <a
                  href="https://maps.app.goo.gl/mukx3LYhqaQv2rZm7"
                  target="_blank"
                >
                  <span className="text-[14px] lg:text-[16px] xl:text-[18px] text-zinc-700">
                    1942 Broadway Ste 314C, Boulder, CO 80302, US
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="right w-full">
            <form
              onSubmit={onSubmit}
              className="form-banner-area w-full p-5 md:p-8 lg:p-18 2xl:p-12 rounded-lg"
            >
              <div className="heading-area">
                <h2 className="font-semibold text-[30px] xl:text-[40px]">
                  Drop Us a Line
                </h2>
              </div>
              <div className="top w-full flex flex-wrap items-center gap-3 pt-8">
                <span
                  onClick={() => setService("Web Development")}
                  className={`cursor-pointer flex items-center justify-between gap-3 2xl:gap-5 text-[12px] md:text-[16px] lg:text-[14px] font-semibold px-[10px] sm:px-[20px] 2xl:px-[35px] py-[5px] lg:py-[10px] rounded-full border-[1px] border-[#5DD1FF] ${
                    service == "Web Development"
                      ? "bg-[#5DD1FF] text-white"
                      : "bg-transparent"
                  }`}
                >
                  <span>
                    {service == "Web Development" ? (
                      <i className="fa-solid fa-check"></i>
                    ) : (
                      <i className="fa-solid fa-plus"></i>
                    )}
                  </span>
                  <span>Web Development</span>
                </span>
                <span
                  onClick={() => setService("App Development")}
                  className={`cursor-pointer flex items-center justify-between gap-3 2xl:gap-5 text-[12px] md:text-[16px] lg:text-[14px] font-semibold px-[10px] sm:px-[20px] 2xl:px-[35px] py-[5px] lg:py-[10px] rounded-full border-[1px] border-[#5DD1FF] ${
                    service == "App Development"
                      ? "bg-[#5DD1FF] text-white"
                      : "bg-transparent"
                  }`}
                >
                  <span>
                    {service == "App Development" ? (
                      <i className="fa-solid fa-check"></i>
                    ) : (
                      <i className="fa-solid fa-plus"></i>
                    )}
                  </span>
                  <span>App Development</span>
                </span>
                <span
                  onClick={() => setService("Ecommerce Development")}
                  className={`cursor-pointer flex items-center justify-between gap-3 2xl:gap-5 text-[12px] md:text-[16px] lg:text-[14px] font-semibold px-[10px] sm:px-[20px] 2xl:px-[35px] py-[5px] lg:py-[10px] rounded-full border-[1px] border-[#5DD1FF] ${
                    service == "Ecommerce Development"
                      ? "bg-[#5DD1FF] text-white"
                      : "bg-transparent"
                  }`}
                >
                  <span>
                    {service == "Ecommerce Development" ? (
                      <i className="fa-solid fa-check"></i>
                    ) : (
                      <i className="fa-solid fa-plus"></i>
                    )}
                  </span>
                  <span>Ecommerce Development</span>
                </span>
                <span
                  onClick={() => setService("Digital Marketing")}
                  className={`cursor-pointer flex items-center justify-between gap-3 2xl:gap-5 text-[12px] md:text-[16px] lg:text-[14px] font-semibold px-[10px] sm:px-[20px] 2xl:px-[35px] py-[5px] lg:py-[10px] rounded-full border-[1px] border-[#5DD1FF] ${
                    service == "Digital Marketing"
                      ? "bg-[#5DD1FF] text-white"
                      : "bg-transparent"
                  }`}
                >
                  <span>
                    {service == "Digital Marketing" ? (
                      <i className="fa-solid fa-check"></i>
                    ) : (
                      <i className="fa-solid fa-plus"></i>
                    )}
                  </span>
                  <span>Digital Marketing</span>
                </span>
              </div>
              <div className="mid w-full flex flex-col items-center justify-between gap-5 pt-8">
                <div className="top w-full flex items-center justify-between gap-3 sm:gap-0">
                  <input
                    type="text"
                    minLength={3}
                    className="w-full md:w-[48%] outline-none bg-transparent border-b-[1px] text-sm 2xl:text-base border-[#5DD1FF] py-3"
                    name="Name"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    minLength={3}
                    className="w-full md:w-[48%] outline-none bg-transparent border-b-[1px] text-sm 2xl:text-base border-[#5DD1FF] py-3"
                    name="Email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="bottom w-full flex flex-col items-center justify-between gap-5">
                  {/* <input type="text" value={service} className='w-full hidden md:w-[32%] outline-none bg-transparent border-[2px] border-gray-500 rounded-lg px-5 py-3' name='Service' placeholder='Service' required /> */}
                  <input
                    type="number"
                    minLength={11}
                    maxLength={11}
                    className="phone-input w-full md:w-[100%] outline-none bg-transparent border-b-[1px] text-sm 2xl:text-base border-[#5DD1FF] py-3"
                    name="Phone Number"
                    placeholder="Phone Number"
                    required
                  />
                  <textarea
                    className="w-full h-52 bg-transparent outline-none border-b-[1px] text-sm 2xl:text-base border-[#5DD1FF] py-3"
                    name="Message"
                    placeholder="Enter Your Message Here"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="bottom w-full flex flex-col items-start justify-between gap-5 pt-5">
                <input
                  type="submit"
                  className="form-click-btn w-full sm:w-fit text-white cursor-pointer text-[12px] md:text-[16px] font-semibold border-[1px] border-[#5DD1FF] px-[20px] lg:px-[25px] py-[10px] lg:py-[15px] rounded-md bg-[#5DD1FF] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#5DD1FF] "
                  value={"Submit"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
