import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const LocationsHero = ({ subHeading, mainHeading, text, buttonText, link }) => {
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
      id="contact-form"
      className="section w-full flex flex-col md:flex-row justify-between gap-10 2xl:gap-20 px-[30px] sm:px-[50px] xl:px-[12vw] py-16 xl:py-28 bg-[#5DD1FF]"
    >
      <div className="left w-full md:w-[50%] 2xl:w-[60%] flex flex-col justify-start gap-5">
        <div className="top w-full flex flex-col gap-3">
          <Link to={link}>
            <h2 className="w-fit uppercase cursor-pointer text-sm xl:text-base font-bold text-white p-2 bg-[#48bfee]">
              {subHeading}
            </h2>
          </Link>
          <h1
            className={`text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-white`}
          >
            {mainHeading}
          </h1>
        </div>
        <div className="bottom flex flex-col gap-10">
          <p className="text-justify text-lg xl:text-xl tracking-wide font-['Creato_Display'] text-white">
            {text}
          </p>
          {buttonText && (
            <motion.a
              initial={{ y: 0 }}
              whilehover={{ y: -10 }}
              transition={{ duration: 0.2, ease: "linear" }}
              href="#contact-form"
              className="w-fit text-base text-white border-[2px] border-white py-3 px-16 font-['Creato_Display'] bg-transparent"
            >
              {buttonText ? buttonText : "Let's Connect"}
            </motion.a>
          )}
        </div>
      </div>
      <div className="right w-full md:w-[50%] 2xl:w-[40%] flex justify-center items-start">
        <div className="form-area w-full">
          <form
            onSubmit={onSubmit}
            className="form-banner-area w-full p-8 lg:p-12 rounded-lg"
          >
            <div className="heading-area">
              <h2 className="font-semibold text-[20px] lg:text-[25px] xl:text-[30px]">
                Book a Free Consultation
              </h2>
            </div>
            <div className="mid w-full flex flex-col items-center justify-between gap-5 pt-8">
              <div className="top w-full flex items-center justify-between gap-3 sm:gap-0">
                <input
                  type="text"
                  minLength={3}
                  className="w-full md:w-[48%] outline-none bg-transparent border-b-[1px] border-[#5DD1FF] py-3"
                  name="Name"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  minLength={3}
                  className="w-full md:w-[48%] outline-none bg-transparent border-b-[1px] border-[#5DD1FF] py-3"
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
                  className="phone-input w-full md:w-[100%] outline-none bg-transparent border-b-[1px] border-[#5DD1FF] py-3"
                  name="Phone Number"
                  placeholder="Phone Number"
                  required
                />
                <textarea
                  className="w-full h-52 bg-transparent outline-none border-b-[1px] border-[#5DD1FF] py-3"
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
  );
};

export default LocationsHero;
