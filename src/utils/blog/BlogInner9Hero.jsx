"use client";

import { useState } from "react";
import Swal from "sweetalert2";

const BlogInner9Hero = () => {
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
    <div className="section w-full flex flex-col lg:flex-row justify-between gap-8 px-[30px] sm:px-[50px] xl:px-[12vw] pb-5 md:pb-24 2xl:pb-32 pt-24 lg:pt-32">
      <div className="left w-full lg:w-[50%] flex flex-col justify-start gap-10">
        <div className="top w-full flex flex-col gap-3">
          <a
            href="/blogs/app-development"
            className="uppercase font-bold text-[#28D1B4]"
          >
            App Development
          </a>
          <h1
            className={`text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-[#5DD1FF]`}
          >
            Mobile App Compatibility Testing Best Practices
          </h1>
        </div>
        <div className="bottom flex flex-col gap-5">
          <p className="text-lg xl:text-xl tracking-wide font-['Creato_Display']">
            Compatibility testing of mobile applications is a vital phase in
            software development. It ensures and verifies that the app functions
            well, without errors or bugs, and performs functions among various
            devices, operating systems, and screen resolutions.
          </p>
          <p className="text-lg xl:text-xl tracking-wide font-['Creato_Display']">
            In this exponentially growing digital world, the mobile ecosystem
            has been evolving, so apps must be created and designed according to
            users' needs on various Android, iOS, or other operating systems.
            This system of mobile app compatibility testing helps us distinguish
            problems and errors in the apps that could halt their performance,
            usability, functionality, and user experience.
          </p>
        </div>
      </div>
      <div className="right w-full lg:w-[50%] flex justify-center items-start">
        <form
          onSubmit={onSubmit}
          className="form-banner-area w-full p-5 md:p-8 lg:p-12 rounded-lg"
        >
          <div className="heading-area">
            <h2 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl font-semibold">
              Get a Free Consultation!
            </h2>
          </div>
          <div className="top w-full flex flex-col items-center justify-between gap-5 pt-8">
            <div className="top w-full flex items-center justify-between gap-3 sm:gap-0">
              <input
                type="text"
                minLength={3}
                className="w-full outline-none bg-transparent border-b-[1px] text-sm 2xl:text-base border-[#5DD1FF] py-3"
                name="Name"
                placeholder="Name"
                required
              />
            </div>
            <div className="bottom w-full flex flex-col items-center justify-between gap-5">
              <input
                type="email"
                className="w-full md:w-[100%] outline-none bg-transparent border-b-[1px] text-sm 2xl:text-base border-[#5DD1FF] py-3"
                name="email"
                placeholder="Email"
                required
              />
              <input
                type="text"
                className="w-full md:w-[100%] outline-none bg-transparent border-b-[1px] text-sm 2xl:text-base border-[#5DD1FF] py-3"
                name="subject"
                placeholder="Subject"
                required
              />
              <input
                type="number"
                className="phone-input w-full md:w-[100%] outline-none bg-transparent border-b-[1px] text-sm 2xl:text-base border-[#5DD1FF] py-3"
                name="phone"
                maxLength={11}
                placeholder="Phone Number ( Optional )"
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
  );
};

export default BlogInner9Hero;
