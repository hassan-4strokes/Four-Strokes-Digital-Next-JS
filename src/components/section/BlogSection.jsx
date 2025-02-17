"use client";

import { useContext, useEffect, useState } from "react";
import BlogCard from "@/utils/card/BlogCard";
import { blogCardsData } from "@/data/cards/BlogCardsData";
import axios from "axios";
// import { Context } from "@/main";
import { useParams } from "react-router-dom";
import { FacebookShareButton } from "react-share";

const BlogSection = () => {
  // Local States

  const [blogs, setBlogs] = useState([]);

  const [isAdmin, setIsAdmin] = useState(false);

  const { slug } = useParams();

  // Context Hook

  // const {
  //   fullSidebar,
  //   setFullSidebar,
  //   user,
  //   isAuthenticated,
  //   localHost,
  //   renderHost,
  // } = useContext(Context);

  // Getting Blogs

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       const response = await axios.get(`${renderHost}/api/v1/blog/allblogs`, {
  //         withCredentials: true,
  //       });
  //       setBlogs(response.data.blogs);
  //     } catch (error) {
  //     }
  //   };

  //   fetchBlogs();

  //   if (isAuthenticated) {
  //     setIsAdmin(true); 
  //   } else {
  //     setIsAdmin(false);
  //   }
  // }, [isAuthenticated]);

  return (
    <>
      <div className="flex flex-col gap-5 xl:gap-8 2xl:gap-10">
        <div className="section w-full grid grid-cols-1 gap-5 xl:gap-8 2xl:gap-10 px-[30px] sm:px-[50px] xl:px-[12vw]">
          {blogs.reverse().map((blog, index) => {
            return (
              <div key={index} className={`${index == 0 ? "block" : "hidden"}`}>
                <div
                  className={`section w-full flex flex-col md:flex-row justify-between gap-8 xl:gap-16 rounded-xl py-4 xl:py-6 2xl:py-8 px-4 xl:px-6 2xl:px-8 bg-[#F3F6FE]`}
                >
                  <div className="left h-full w-full md:w-[50%] lg:w-[40%]">
                    <a href={`/blogs/${blog.slug}`}>
                      {blog.thumbnail.url && (
                        <img
                          src={blog.thumbnail.url}
                          alt={blog.alternateText}
                          className="w-full rounded-lg"
                        />
                      )}
                    </a>
                  </div>
                  <div className="right w-full md:w-[60%] h-full flex flex-col gap-5 m-auto">
                    <a
                      href="/blogs/app-development"
                      className="w-fit text-sm lg:text-base 2xl:text-lg tracking-tight font-semibold text-[#28D1B4]"
                    >
                      App Development
                    </a>
                    <a href={`/blogs/${blog.slug}`}>
                      <h2 className="w-fit text-lg md:text-2xl lg:text-3xl 2xl:text-4xl tracking-tight font-semibold">
                        {blog.title}
                      </h2>
                    </a>
                    <p className="w-fit text-sm md:text-base xl:text-lg tracking-wide font-['Creato_Display']">
                      {blog.description}{" "}
                      <a
                        href={`/blogs/${blog.slug}`}
                        className="w-fit text-base xl:text-lg tracking-wide font-['Creato_Display'] text-zinc-500"
                      >
                        Read More
                      </a>
                    </p>
                    {/* {isAuthenticated && (
                      <div className="w-full h-full flex items-end">
                        <div className="icons-area w-full flex items-center gap-3">
                          <div className="facebook-div bg-[#1877F2] rounded-full px-[12px] py-[5px]">
                            <FacebookShareButton
                              url={`https://fourstrokesdigital.com/blogs/${blog.slug}`}
                              className="w-fit"
                            >
                              <i
                                className={`fa-brands fa-facebook-f text-[#FFFFFF]`}
                              ></i>
                            </FacebookShareButton>
                          </div>
                        </div>
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="section w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8 2xl:gap-10 px-[30px] sm:px-[50px] xl:px-[12vw] pb-16 xl:pb-28">
          {blogs.map((blog, index) => {
            return (
              <div
                key={index}
                className={`${index !== 0 ? "block" : "hidden"}`}
              >
                <div
                  className={`section h-full w-full flex flex-col justify-between gap-4 xl:gap-8 rounded-xl py-4 xl:py-6 2xl:py-8 px-4 xl:px-6 2xl:px-8 bg-[#F3F6FE]`}
                >
                  <div className="left h-full w-full">
                    <a href={`/blogs/${blog.slug}`}>
                      {blog.thumbnail.url && (
                        <img
                          src={blog.thumbnail.url}
                          alt={blog.alternateText}
                          className="w-full rounded-lg"
                        />
                      )}
                    </a>
                  </div>
                  <div className="right w-full h-full flex flex-col gap-5 m-auto">
                    <a href="/blogs/app-development">
                      <h2 className="w-fit text-sm lg:text-base 2xl:text-lg tracking-tight font-semibold text-[#28D1B4]">
                        App Development
                      </h2>
                    </a>
                    <a href={`/blogs/${blog.slug}`}>
                      <h2 className="w-fit text-lg lg:text-xl 2xl:text-2xl tracking-tight font-semibold">
                        {blog.title}
                      </h2>
                    </a>
                    <p className="w-fit text-sm xl:text-base tracking-wide font-['Creato_Display']">
                      {blog.description}{" "}
                      <a
                        href={`/blogs/${blog.slug}`}
                        className="w-fit text-sm xl:text-base tracking-wide font-['Creato_Display'] text-zinc-500"
                      >
                        Read More
                      </a>
                    </p>
                    {/* {isAuthenticated && (
                      <div className="w-full h-full flex items-end">
                        {/* <a
                          href={link}
                          className="w-fit text-sm xl:text-base xl:text-lg tracking-wide font-semibold font-['Creato_Display']"
                        >
                          Read Full Story
                        </a>
                        <div className="icons-area w-full flex items-center gap-3">
                          <div className="facebook-div bg-[#1877F2] rounded-full px-[12px] py-[5px]">
                            <FacebookShareButton
                              url={`https://fourstrokesdigital.com/blogs/${blog.slug}`}
                              className="w-fit"
                            >
                              <i
                                className={`fa-brands fa-facebook-f text-[#FFFFFF]`}
                              ></i>
                            </FacebookShareButton>
                          </div>
                        </div>
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            );
          })}
          {blogCardsData.map((blog, index) => {
            return (
              <div key={index}>
                <BlogCard
                  index={index}
                  image={blog.image}
                  heading={blog.heading}
                  text={blog.text}
                  link={blog.link}
                  isAdmin={isAdmin}
                  alternateText={blog.alternateText}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogSection;
