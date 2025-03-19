"use client";

import React from "react";
import Footer from "@/utils/footer/Footer";
import Navbar from "@/utils/navbar/Navbar";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import EditorJSHTML from "editorjs-html";
import BlogInnerPageFAQSection from "@/utils/faq/BlogInnerPageFAQSection";
import { useAppContext } from "@/context/Context";
import Swal from "sweetalert2";

const BlogInnerPage = () => {
  const { user, setUser, fullSidebar } = useAppContext();

  const [categories, setCategories] = useState([]);

  const [blogDetails, setBlogDetails] = useState({});

  const [dropDown, setDropDown] = useState(false);

  const { slug } = useParams();

  // EditorJS to HTML
  const editorJSHTML = EditorJSHTML();

  const htmlIntro = blogDetails.intro
    ? editorJSHTML.parse(blogDetails.intro)
    : "";
  const htmlContent = blogDetails.content
    ? editorJSHTML.parse(blogDetails.content)
    : "";

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
  

  // FAQ Schema

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [],
  };

  blogDetails.faq &&
    blogDetails.faq.map((item, index) => {
      return faqSchema.mainEntity.push({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      });
    });

    // const scrollToTop = () => {
    //   window.scrollTo(0, 0);
    // };

  const contentRef = useRef(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `/api/v1/categories/get-all-categories`,
          {
            withCredentials: true,
          }
        );
        setCategories(response.data.categories);
      } catch (error) {}
    };

    fetchCategory();
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `/api/v1/blogs/get-blog-details/${slug}`,
          {
            withCredentials: true,
          }
        );
        setBlogDetails(response?.data?.blog);
      } catch (error) {}
    };

    fetchBlog();

    const addImageEventListeners = () => {
      const images = contentRef.current.querySelectorAll("img");
      images.forEach((img) => {
        img.addEventListener("click", () => {
          scrollToTop();
        });
      });
    };

    if (contentRef.current) {
      addImageEventListeners();
    }

    const observer = new MutationObserver(() => {
      addImageEventListeners();
    });

    if (contentRef.current) {
      observer.observe(contentRef.current, {
        childList: true,
        subtree: true,
      });
    }

    // Cleanup observer on component unmount
    return () => {
      if (observer) observer.disconnect();
    };
  }, [htmlContent]);

  return (
    <>
      <Navbar pageName={"Blogs"} />
      <div className="section w-full h-fit flex flex-col lg:flex-row justify-between gap-8 px-[30px] sm:px-[50px] xl:px-[12vw] pb-5 md:pb-24 2xl:pb-32 pt-24 lg:pt-32">
        <div className="left w-full lg:w-[50%] flex flex-col justify-start gap-10">
          <div className="top w-full flex flex-col gap-3">
            <a
              href="/blogs/app-development"
              className="uppercase font-bold text-[#28D1B4]"
            >
              {categories.map((category) => {
                if (category._id === blogDetails.category) {
                  return category.name;
                }
              })}
            </a>
            <h1
              className={`text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-[#5DD1FF]`}
            >
              {blogDetails.title}
            </h1>
          </div>
          <div className="bottom flex flex-col gap-5">
            <div
              dangerouslySetInnerHTML={{ __html: htmlIntro }}
              className="editorjsdiv editorjsdivintro"
            />
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
                  className="w-full outline-none bg-transparent border-b-[1px] border-[#5DD1FF] py-3"
                  name="Name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="bottom w-full flex flex-col items-center justify-between gap-5">
                <input
                  type="email"
                  className="w-full md:w-[100%] outline-none bg-transparent border-b-[1px] border-[#5DD1FF] py-3"
                  name="email"
                  placeholder="Email"
                  required
                />
                <input
                  type="text"
                  className="w-full md:w-[100%] outline-none bg-transparent border-b-[1px] border-[#5DD1FF] py-3"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <input
                  type="number"
                  className="phone-input w-full md:w-[100%] outline-none bg-transparent border-b-[1px] border-[#5DD1FF] py-3"
                  name="phone"
                  maxLength={11}
                  placeholder="Phone Number ( Optional )"
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
      <div className="blog-section section h-fit w-full flex flex-col gap-10 pb-16 xl:pb-28 px-[30px] sm:px-[50px] xl:px-[12vw]">
        <div className="top h-full w-full flex flex-col">
          <div className="inner w-full lg:w-[50%] h-full flex flex-col rounded-md border-[1px] border-zinc-400 px-3">
            <div
              onClick={() => setDropDown(!dropDown)}
              className="heading-area w-full cursor-pointer flex items-center justify-between py-4"
            >
              <h3 className="text-xl md:text-lg lg:text-xl xl:text-2xl font-semibold text-[#5DD1FF]">
                Table Of Content
              </h3>
              <i
                className={`fa-solid fa-angle-${
                  dropDown ? "up" : "down"
                } text-base md:text-lg lg:text-xl text-[#5DD1FF]`}
              ></i>
            </div>
            <div
              className={`buttons-area w-full ${
                dropDown ? "flex" : "hidden"
              } flex-col`}
            >
              {blogDetails.tableOfContent &&
                blogDetails.tableOfContent.map((item, index) => {
                  return (
                    <button
                      key={index}
                      className="text-left text-sm xl:text-base 2xl:text-lg tracking-wide border-t-[1px] border-zinc-200 font-['Creato_Display'] py-2"
                    >
                      <a href={item.link ? item.link : "#"}>{item.name}</a>
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="bottom w-full flex flex-col">
          <div className="w-full flex flex-col justify-center gap-10">
            <div
              ref={contentRef}
              dangerouslySetInnerHTML={{ __html: htmlContent }}
              className="editorjsdiv img-div"
            />
          </div>
        </div>
        <div className="inner-section w-full flex flex-col gap-3 -mt-5">
          <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
            Frequently Asked Questions
          </h2>
          {blogDetails.faq &&
            blogDetails.faq.map((item, index) => {
              return (
                <div key={index} className="w-full">
                  <BlogInnerPageFAQSection faq={item} />
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogInnerPage;
