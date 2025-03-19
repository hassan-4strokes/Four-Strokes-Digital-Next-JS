"use client";

import { useState, useEffect } from "react";
import Navbar from "@/utils/navbar/Navbar";
import Footer from "@/utils/footer/Footer";
import BlogCategoriesHero from "@/components/hero/BlogCategoriesHero";
import { useParams } from "next/navigation";
import axios from "axios";
import { blogCardsData } from "@/data/cards/BlogCardsData";
import BlogCard from "@/utils/card/BlogCard";

const AppDevelopment = () => {
    // Local States
  
    const [blogs, setBlogs] = useState([]);
  
    const [categoryDetails, setCategoryDetails] = useState({});
  
    const { slug } = useParams();

    // Getting Blogs
  
    useEffect(() => {
      const fetchCategory = async () => {
        try {
          const response = await axios.get(
            `/api/v1/categories/get-category-details/app-development`,
            {
              withCredentials: true,
            }
          );
          setCategoryDetails(response.data.category);
        } catch (error) {
        }
      };
  
      fetchCategory();
      const fetchBlogs = async () => {
        try {
          const response = await axios.get(`/api/v1/blogs/get-all-blogs`, {
            withCredentials: true,
          });
          setBlogs(response.data.blogs.reverse());
        } catch (error) {
        }
      };
  
      fetchBlogs();
    }, []);
  return (
    <>
      <Navbar pageName={"Blogs"} />
      <BlogCategoriesHero heading={"App Development"} />

      <div className="flex flex-col gap-5 xl:gap-8 2xl:gap-10">
        <div className="section w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8 2xl:gap-10 px-[30px] sm:px-[50px] xl:px-[12vw] pb-16 xl:pb-28">
          {blogs.map((blog, index) => {
            return (
              <div
                key={index}
                className={`${
                  blog.category == categoryDetails._id ? "block" : "hidden"
                }`}
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
                    <a
                      href="/blogs/app-development"
                      className="w-fit text-sm lg:text-base 2xl:text-lg tracking-tight font-semibold text-[#28D1B4]"
                    >
                      App Development
                    </a>
                    <a href={`/blogs/${blog.slug}`}>
                      <h2 className="w-fit text-lg lg:text-xl 2xl:text-2xl tracking-tight font-semibold">
                        {blog.title}
                      </h2>
                    </a>
                    <p className="w-fit text-sm xl:text-base tracking-wide font-['Creato_Display']">
                      {blog.description}
                    </p>
                    <div className="w-full h-full flex items-end">
                      <a
                        href={`/blogs/${blog.slug}`}
                        className="w-fit text-base xl:text-lg tracking-wide font-semibold font-['Creato_Display']"
                      >
                        Read Full Story
                      </a>
                    </div>
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
                  alternateText={blog.alternateText}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AppDevelopment;
