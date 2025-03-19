"use client";

import { useEffect, useState } from "react";
import { useAppContext } from "@/context/Context";
import { Skeleton } from "@/components/ui/skeleton";
import Sidebar from "@/utils/sidebar/Sidebar";
import Link from "next/link";
import EditorJSHTML from "editorjs-html";
import { useParams } from "next/navigation";
import axios from "axios";

const BlogDetails = () => {
  const { slug } = useParams();

  const { user, fullSidebar } = useAppContext();

  const [blogDetails, setBlogDetails] = useState({});
  const [categories, setCategories] = useState([]);

  // EditorJS to HTML
  const editorJSHTML = EditorJSHTML();

  const htmlIntro = blogDetails.intro
    ? editorJSHTML.parse(blogDetails.intro)
    : "";
  const htmlContent = blogDetails.content
    ? editorJSHTML.parse(blogDetails.content)
    : "";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `/api/v1/categories/get-all-categories`
        );
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Some Error Occured While Fetching Categories", error);
      }
    };

    fetchCategories();

    const fetchBlogDetails = async () => {
      try {
        const response = await axios.get(
          `/api/v1/blogs/get-blog-details/${slug}`
        );
        setBlogDetails(response.data.blog);
      } catch (error) {
        console.error("Some Error Occured While Fetching Blog Details", error);
      }
    };

    fetchBlogDetails();
  }, []);

  return (
    <>
      <div className="blog w-full h-screen flex flex-col lg:flex-row items-center bg-[#5DD1FF]">
        <Sidebar />
        <div
          className={`right h-full w-full ${
            fullSidebar && "lg:w-[80%]"
          } py-10 px-5 md:px-10 overflow-y-scroll`}
        >
          <div className="blog-area flex flex-col gap-10">
            <div className="top w-full h-fit">
              <h1 className="main-heading text-4xl font-semibold text-white">
                Blog Details
              </h1>
            </div>
            <div className="bottom w-full h-full flex flex-col gap-5">
              <div className="card w-full h-fit flex flex-col gap-5 p-5 px-4 rounded-xl bg-white shadow-md shadow-gray-400">
                <div className="card-top flex items-center justify-between">
                  <div className="info w-full flex flex-col">
                    <div className="w-full user relative flex flex-row items-center justify-between gap-3 sm:gap-0">
                      {blogDetails.title ? (
                        <span className="text-xl text-zinc-400">
                          {blogDetails.title}
                        </span>
                      ) : (
                        <div className="w-full space-y-2 py-1">
                          <Skeleton className="h-4 w-full sm:w-[150px] md:w-[400px]" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex gap-5">
                <div className="left w-full xl:w-[70%] flex flex-col gap-5">
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="thumbnail-area w-full sm:w-[50%] xl:w-full flex xl:hidden flex-col p-5 px-4 rounded-xl bg-white shadow-md shadow-gray-400">
                      <div className="w-full relative flex flex-row items-center justify-between gap-3 sm:gap-0 border-b-[1px] border-zinc-200 pb-5">
                        <h2 className="w-full text-left sm:text-center text-lg xl:text-xl font-semibold">
                          Blog Image
                        </h2>
                        <div className="relative sm:absolute right-0 w-fit flex items-center gap-3">
                          {user && user.role !== "User" && (
                            <Link
                              href={
                                "/admin/blogs/" +
                                blogDetails.slug +
                                "/update-thumbnail"
                              }
                              className="text-white flex items-center gap-1 px-4 py-3 rounded-lg bg-[#5DD1FF] transition-all ease-in-out duration-300 hover:bg-[#5DD1FF]"
                            >
                              <i className="fa-solid fa-pen-to-square"></i>
                            </Link>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-between gap-5 pt-4">
                        {blogDetails.thumbnail && blogDetails.thumbnail.url ? (
                          <img
                            src={blogDetails.thumbnail.url}
                            alt={blogDetails.alternateText}
                            className="w-full h-fit sm:h-[30vh] rounded-lg"
                          />
                        ) : (
                          <div className="py-1 h-[25vh] md:h-[30vh] w-full">
                            <Skeleton className="h-full w-full rounded-xl" />
                          </div>
                        )}
                        <span className="w-full flex items-center gap-1 text-zinc-500">
                          <span className="text-black flex-shrink-0">
                            Image Alternate Text :
                          </span>{" "}
                          <span className="w-full line-clamp-1">
                            {blogDetails.alternateText ? (
                              blogDetails.alternateText
                            ) : (
                              <div className="py-1 w-full">
                                <Skeleton className="h-4 w-full" />
                              </div>
                            )}
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="seo-area w-full sm:w-[50%] xl:w-full flex flex-col p-5 px-4 rounded-xl bg-white shadow-md shadow-gray-400">
                      <div className="w-full user relative flex flex-row items-center sm:items-center justify-between gap-3 sm:gap-0 border-b-[1px] border-zinc-200 pb-5">
                        <h2 className="w-full text-left sm:text-center text-lg xl:text-xl font-semibold">
                          SEO Details
                        </h2>
                        <div className="relative sm:absolute right-0 w-fit flex items-center gap-3">
                          {user && user.role !== "User" && (
                            <Link
                              href={
                                "/admin/blogs/" +
                                blogDetails.slug +
                                "/update-seo-details"
                              }
                              className="text-white flex items-center gap-1 px-4 py-3 rounded-lg bg-[#5DD1FF] transition-all ease-in-out duration-300 hover:bg-[#5DD1FF]"
                            >
                              <i className="fa-solid fa-pen-to-square"></i>
                            </Link>
                          )}
                        </div>
                      </div>
                      <div className="flex items-start justify-between gap-5">
                        <div className="w-full flex flex-col">
                          <span className="w-full flex items-center gap-1 border-b-[1px] border-zinc-200 py-4 text-zinc-500">
                            <span className="text-black flex-shrink-0">
                              Meta Title :
                            </span>{" "}
                            <span className="w-full line-clamp-1">
                              {blogDetails.metaTitle ? (
                                blogDetails.metaTitle
                              ) : (
                                <div className="py-1">
                                  <Skeleton className="h-4 w-full xl:w-[200px]" />
                                </div>
                              )}
                            </span>
                          </span>
                          <span className="w-full flex items-center gap-1 border-b-[1px] border-zinc-200 py-4 text-zinc-500">
                            <span className="text-black flex-shrink-0">
                              Primary Keyword :
                            </span>{" "}
                            {blogDetails.primaryKeyword ? (
                              blogDetails.primaryKeyword
                            ) : (
                              <div className="py-1 w-full">
                                <Skeleton className="h-4 w-full xl:w-[200px]" />
                              </div>
                            )}
                          </span>
                          <span className="w-full flex items-center gap-1 border-b-[1px] border-zinc-200 py-4 text-zinc-500">
                            <span className="text-black flex-shrink-0">
                              Canonical :
                            </span>{" "}
                            <span className="w-full line-clamp-1">
                              {blogDetails.canonical ? (
                                blogDetails.canonical
                              ) : (
                                <div className="py-1">
                                  <Skeleton className="h-4 w-full xl:w-[200px]" />
                                </div>
                              )}
                            </span>
                          </span>
                          <span className="w-full flex items-center gap-1 border-zinc-200 pt-4 pb-0 line-clamp-1 text-zinc-500">
                            <span className="text-black flex-shrink-0">
                              Meta Description :
                            </span>{" "}
                            <span className="w-full line-clamp-1">
                              {blogDetails.metaDescription ? (
                                blogDetails.metaDescription
                              ) : (
                                <div className="py-1 w-full">
                                  <Skeleton className="h-4 w-full xl:w-[200px]" />
                                </div>
                              )}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-details-area w-full flex flex-col p-5 px-4 rounded-xl bg-white shadow-md shadow-gray-400">
                    <div className="w-full user relative flex flex-row items-center sm:items-center justify-between gap-3 sm:gap-0 border-b-[1px] border-zinc-200 pb-5">
                      <h2 className="w-full text-left sm:text-center text-lg xl:text-xl font-semibold">
                        Blog Details
                      </h2>
                      <div className="relative sm:absolute right-0 w-fit flex items-center gap-3">
                        {user && user.role !== "User" && (
                          <Link
                            href={
                              "/admin/blogs/" +
                              blogDetails.slug +
                              "/update-blog-details"
                            }
                            className="text-white flex items-center gap-1 px-4 py-3 rounded-lg bg-[#5DD1FF] transition-all ease-in-out duration-300 hover:bg-[#5DD1FF]"
                          >
                            <i className="fa-solid fa-pen-to-square"></i>
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-5">
                      <div className="w-full flex flex-col">
                        <span className="w-full flex items-center gap-1 border-b-[1px] border-zinc-200 py-4 text-zinc-500 line-clamp-1">
                          <span className="text-black flex-shrink-0">
                            Title :
                          </span>{" "}
                          {blogDetails.title ? (
                            blogDetails.title
                          ) : (
                            <div className="py-1 w-full sm:w-fit">
                              <Skeleton className="h-4 w-full sm:w-[150px] md:w-[200px]" />
                            </div>
                          )}
                        </span>
                        <span className="w-full flex items-center gap-1 border-b-[1px] border-zinc-200 py-4 text-zinc-500 line-clamp-1">
                          <span className="text-black flex-shrink-0">
                            Slug :
                          </span>{" "}
                          {blogDetails.slug ? (
                            blogDetails.slug
                          ) : (
                            <div className="py-1 w-full sm:w-fit">
                              <Skeleton className="h-4 w-full sm:w-[150px] md:w-[200px]" />
                            </div>
                          )}
                        </span>
                        <span className="w-full flex items-center justify-start gap-1 border-b-[1px] border-zinc-200 py-4 text-zinc-500">
                          <span className="text-black flex-shrink-0">
                            Short Description :
                          </span>{" "}
                          <span className="w-full line-clamp-1">
                            {blogDetails.description ? (
                              blogDetails.description
                            ) : (
                              <div className="py-1 w-full sm:w-full">
                                <Skeleton className="h-4 w-full sm:w-[150px] md:w-[200px]" />
                              </div>
                            )}
                          </span>
                        </span>
                        <span className="w-full flex items-start justify-start gap-1 border-b-[1px] border-zinc-200 py-4 text-zinc-500 line-clamp-1">
                          <span className="text-black flex-shrink-0">
                            Intro :
                          </span>{" "}
                          {htmlIntro && htmlIntro ? (
                            <div
                              dangerouslySetInnerHTML={{ __html: htmlIntro }}
                              className="editorjsdivintrodetails line-clamp-1"
                            />
                          ) : (
                            <div className="py-1 w-full sm:w-full">
                              <Skeleton className="h-4 w-full sm:w-[150px] md:w-[200px]" />
                            </div>
                          )}
                        </span>
                        <span
                          className={`w-full flex ${
                            htmlContent ? "flex-row xl:flex-col" : "flex-row"
                          } items-start justify-start gap-1 xl:gap-2 border-zinc-200 pt-4 text-zinc-500`}
                        >
                          <span className="text-black flex-shrink-0">
                            Content :
                          </span>{" "}
                          {htmlContent ? (
                            <div
                              dangerouslySetInnerHTML={{ __html: htmlContent }}
                              className="editorjsdivdetails line-clamp-1"
                            />
                          ) : (
                            <div className="py-1 w-full sm:w-full">
                              <Skeleton className="h-4 w-full sm:w-[150px] md:w-[200px]" />
                            </div>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="category-area w-full flex xl:hidden flex-col p-5 px-4 rounded-xl bg-white shadow-md shadow-gray-400">
                    <div className="w-full relative flex flex-row items-center justify-between gap-3 sm:gap-0 border-b-[1px] border-zinc-200 pb-5">
                      <h2 className="w-full text-left sm:text-center text-lg xl:text-xl font-semibold">
                        Blog Category
                      </h2>
                      <div className="relative sm:absolute right-0 w-fit flex items-center gap-3">
                        {user && user.role !== "User" && (
                          <Link
                            href={
                              "/admin/blogs/" +
                              blogDetails.slug +
                              "/update-category"
                            }
                            className="text-white flex items-center gap-1 px-4 py-3 rounded-lg bg-[#5DD1FF] transition-all ease-in-out duration-300 hover:bg-[#5DD1FF]"
                          >
                            <i className="fa-solid fa-pen-to-square"></i>
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-between gap-5">
                      <span className="w-full flex items-center gap-1 text-zinc-500 pt-4">
                        <span className="text-black flex-shrink-0">
                          Category :
                        </span>{" "}
                        {blogDetails.category ? (
                          categories.map((category) => {
                            if (category._id === blogDetails.category) {
                              return category.name;
                            }
                          })
                        ) : (
                          <div className="py-1 w-full sm:w-fit">
                            <Skeleton className="h-4 w-full sm:w-[150px] md:w-[200px]" />
                          </div>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="faq-area w-full flex xl:hidden flex-col pt-5 pb-1 px-4 rounded-xl bg-white shadow-md shadow-gray-400">
                    <div className="w-full relative flex flex-row items-center justify-between gap-3 sm:gap-0 border-b-[1px] border-zinc-200 pb-5">
                      <h2 className="w-full text-left sm:text-center text-lg xl:text-xl font-semibold">
                        Blog FAQs
                      </h2>
                      <div className="relative sm:absolute right-0 w-fit flex items-center gap-3">
                        {user && user.role !== "User" && (
                          <Link
                            href={
                              "/admin/blogs/" + blogDetails.slug + "/update-faq"
                            }
                            className="text-white flex items-center gap-1 px-4 py-3 rounded-lg bg-[#5DD1FF] transition-all ease-in-out duration-300 hover:bg-[#5DD1FF]"
                          >
                            <i className="fa-solid fa-pen-to-square"></i>
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-between gap-5">
                      <span className="w-full flex flex-col">
                        {blogDetails.faq ? (
                          blogDetails.faq.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className={`w-full flex flex-col gap-3 ${
                                  index !== 0 && "border-t-[1px]"
                                } border-zinc-200 py-4`}
                              >
                                <span className="text-zinc-500 line-clamp-1">
                                  <span className="text-black">
                                    Question :{" "}
                                  </span>
                                  {item.question}
                                </span>
                                <span className="text-zinc-500 line-clamp-1">
                                  <span className="text-black">Answer : </span>
                                  {item.answer}
                                </span>
                              </div>
                            );
                          })
                        ) : (
                          <>
                            {Array.from({ length: 3 }).map((_, index) => {
                              return (
                                <div
                                  key={index}
                                  className={`w-full flex flex-col gap-3 ${
                                    index !== 0 && "border-t-[1px]"
                                  } border-zinc-200 py-4`}
                                >
                                  <span className="text-zinc-500 line-clamp-1 flex items-center gap-1">
                                    <span className="text-black flex-shrink-0">
                                      Question :{" "}
                                    </span>
                                    <div className="py-1 w-full">
                                      <Skeleton className="h-4 w-full" />
                                    </div>
                                  </span>
                                  <span className="text-zinc-500 line-clamp-1 flex items-center gap-1">
                                    <span className="text-black flex-shrink-0">
                                      Answer :{" "}
                                    </span>
                                    <div className="py-1 w-full">
                                      <Skeleton className="h-4 w-full" />
                                    </div>
                                  </span>
                                </div>
                              );
                            })}
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="table-of-content-area w-full flex xl:hidden flex-col pt-5 pb-1 px-4 rounded-xl bg-white shadow-md shadow-gray-400">
                    <div className="w-full relative flex flex-row items-center justify-between gap-3 sm:gap-0 border-b-[1px] border-zinc-200 pb-5">
                      <h2 className="w-full text-left sm:text-center text-lg xl:text-xl font-semibold">
                        Table Of Content
                      </h2>
                      <div className="relative sm:absolute right-0 w-fit flex items-center gap-3">
                        {user && user.role !== "User" && (
                          <Link
                            href={
                              "/admin/blogs/" +
                              blogDetails.slug +
                              "/update-table-of-content"
                            }
                            className="text-white flex items-center gap-1 px-4 py-3 rounded-lg bg-[#5DD1FF] transition-all ease-in-out duration-300 hover:bg-[#5DD1FF]"
                          >
                            <i className="fa-solid fa-pen-to-square"></i>
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-between gap-5">
                      <span className="w-full flex flex-col">
                        {blogDetails.tableOfContent ? (
                          blogDetails.tableOfContent.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className={`w-full flex flex-col gap-3 ${
                                  index !== 0 && "border-t-[1px]"
                                } border-zinc-200 py-4`}
                              >
                                <span className="text-zinc-500 line-clamp-1">
                                  <span className="text-black">Name : </span>
                                  {item.name}
                                </span>
                                <span className="text-zinc-500 line-clamp-1">
                                  <span className="text-black">Link : </span>
                                  {item.link}
                                </span>
                              </div>
                            );
                          })
                        ) : (
                          <>
                            {Array.from({ length: 3 }).map((_, index) => {
                              return (
                                <div
                                  key={index}
                                  className={`w-full flex flex-col gap-3 ${
                                    index !== 0 && "border-t-[1px]"
                                  } border-zinc-200 py-4`}
                                >
                                  <span className="text-zinc-500 line-clamp-1 flex items-center gap-1">
                                    <span className="text-black flex-shrink-0">
                                      Name :{" "}
                                    </span>
                                    <div className="py-1 w-full">
                                      <Skeleton className="h-4 w-full" />
                                    </div>
                                  </span>
                                  <span className="text-zinc-500 line-clamp-1 flex items-center gap-1">
                                    <span className="text-black flex-shrink-0">
                                      Link :{" "}
                                    </span>
                                    <div className="py-1 w-full">
                                      <Skeleton className="h-4 w-full" />
                                    </div>
                                  </span>
                                </div>
                              );
                            })}
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="right w-full xl:w-[30%] hidden xl:flex flex-col gap-5">
                  <div className="thumbnail-area w-full flex flex-col p-5 px-4 rounded-xl bg-white shadow-md shadow-gray-400">
                    <div className="w-full relative flex flex-row items-center justify-between gap-3 sm:gap-0 border-b-[1px] border-zinc-200 pb-5">
                      <h2 className="w-full text-left sm:text-center text-lg xl:text-xl font-semibold">
                        Blog Image
                      </h2>
                      <div className="relative sm:absolute right-0 w-fit flex items-center gap-3">
                        {user && user.role !== "User" && (
                          <Link
                            href={
                              "/admin/blogs/" +
                              blogDetails.slug +
                              "/update-thumbnail"
                            }
                            className="text-white flex items-center gap-1 px-4 py-3 rounded-lg bg-[#5DD1FF] transition-all ease-in-out duration-300 hover:bg-[#5DD1FF]"
                          >
                            <i className="fa-solid fa-pen-to-square"></i>
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-between gap-5 pt-4">
                      {blogDetails.thumbnail ? (
                        <img
                          src={blogDetails.thumbnail.url}
                          alt={blogDetails.alternateText}
                          className="w-full h-fit sm:h-[30vh] rounded-lg"
                        />
                      ) : (
                        <div className="py-1 w-full">
                          <Skeleton className="h-[250px] w-full rounded-xl" />
                        </div>
                      )}
                      <span className="w-full flex items-center gap-1 text-zinc-500">
                        <span className="text-black flex-shrink-0">
                          Image Alternate Text :
                        </span>{" "}
                        <span className="w-full line-clamp-1">
                          {blogDetails.alternateText ? (
                            blogDetails.alternateText
                          ) : (
                            <div className="py-1 w-full">
                              <Skeleton className="h-4 w-full" />
                            </div>
                          )}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="category-area w-full flex flex-col p-5 px-4 rounded-xl bg-white shadow-md shadow-gray-400">
                    <div className="w-full relative flex flex-row items-center justify-between gap-3 sm:gap-0 border-b-[1px] border-zinc-200 pb-5">
                      <h2 className="w-full text-left sm:text-center text-lg xl:text-xl font-semibold">
                        Blog Category
                      </h2>
                      <div className="relative sm:absolute right-0 w-fit flex items-center gap-3">
                        {user && user.role !== "User" && (
                          <Link
                            href={
                              "/admin/blogs/" +
                              blogDetails.slug +
                              "/update-category"
                            }
                            className="text-white flex items-center gap-1 px-4 py-3 rounded-lg bg-[#5DD1FF] transition-all ease-in-out duration-300 hover:bg-[#5DD1FF]"
                          >
                            <i className="fa-solid fa-pen-to-square"></i>
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-between gap-5">
                      <span className="w-full flex items-center gap-1 text-zinc-500 pt-4">
                        <span className="text-black flex-shrink-0">
                          Category :
                        </span>{" "}
                        {blogDetails.category ? (
                          categories.map((category) => {
                            if (category._id === blogDetails.category) {
                              return category.name;
                            }
                          })
                        ) : (
                          <div className="py-1 w-full">
                            <Skeleton className="h-4 w-full" />
                          </div>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="faq-area w-full flex flex-col pt-5 pb-1 px-4 rounded-xl bg-white shadow-md shadow-gray-400">
                    <div className="w-full relative flex flex-row items-center justify-between gap-3 sm:gap-0 border-b-[1px] border-zinc-200 pb-5">
                      <h2 className="w-full text-left sm:text-center text-lg xl:text-xl font-semibold">
                        Blog FAQs
                      </h2>
                      <div className="relative sm:absolute right-0 w-fit flex items-center gap-3">
                        {user && user.role !== "User" && (
                          <Link
                            href={
                              "/admin/blogs/" + blogDetails.slug + "/update-faq"
                            }
                            className="text-white flex items-center gap-1 px-4 py-3 rounded-lg bg-[#5DD1FF] transition-all ease-in-out duration-300 hover:bg-[#5DD1FF]"
                          >
                            <i className="fa-solid fa-pen-to-square"></i>
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-between gap-5">
                      <span className="w-full flex flex-col">
                        {blogDetails.faq ? (
                          blogDetails.faq.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className={`w-full flex flex-col gap-3 ${
                                  index !== 0 && "border-t-[1px]"
                                } border-zinc-200 py-4`}
                              >
                                <span className="text-zinc-500 line-clamp-1">
                                  <span className="text-black">
                                    Question :{" "}
                                  </span>
                                  {item.question}
                                </span>
                                <span className="text-zinc-500 line-clamp-1">
                                  <span className="text-black">Answer : </span>
                                  {item.answer}
                                </span>
                              </div>
                            );
                          })
                        ) : (
                          <>
                            {Array.from({ length: 3 }).map((_, index) => {
                              return (
                                <div
                                  key={index}
                                  className={`w-full flex flex-col gap-3 ${
                                    index !== 0 && "border-t-[1px]"
                                  } border-zinc-200 py-4`}
                                >
                                  <span className="text-zinc-500 line-clamp-1 flex items-center gap-1">
                                    <span className="text-black flex-shrink-0">
                                      Question :{" "}
                                    </span>
                                    <div className="py-1 w-full">
                                      <Skeleton className="h-4 w-full" />
                                    </div>
                                  </span>
                                  <span className="text-zinc-500 line-clamp-1 flex items-center gap-1">
                                    <span className="text-black flex-shrink-0">
                                      Answer :{" "}
                                    </span>
                                    <div className="py-1 w-full">
                                      <Skeleton className="h-4 w-full" />
                                    </div>
                                  </span>
                                </div>
                              );
                            })}
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="table-of-content-area w-full flex flex-col pt-5 pb-1 px-4 rounded-xl bg-white shadow-md shadow-gray-400">
                    <div className="w-full relative flex flex-row items-center justify-between gap-3 sm:gap-0 border-b-[1px] border-zinc-200 pb-5">
                      <h2 className="w-full text-left sm:text-center text-lg xl:text-xl font-semibold">
                        Table Of Content
                      </h2>
                      <div className="relative sm:absolute right-0 w-fit flex items-center gap-3">
                        {user && user.role !== "User" && (
                          <Link
                            href={
                              "/admin/blogs/" +
                              blogDetails.slug +
                              "/update-table-of-content"
                            }
                            className="text-white flex items-center gap-1 px-4 py-3 rounded-lg bg-[#5DD1FF] transition-all ease-in-out duration-300 hover:bg-[#5DD1FF]"
                          >
                            <i className="fa-solid fa-pen-to-square"></i>
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-between gap-5">
                      <span className="w-full flex flex-col">
                        {blogDetails.tableOfContent ? (
                          blogDetails.tableOfContent.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className={`w-full flex flex-col gap-3 ${
                                  index !== 0 && "border-t-[1px]"
                                } border-zinc-200 py-4`}
                              >
                                <span className="text-zinc-500 line-clamp-1">
                                  <span className="text-black">Name : </span>
                                  {item.name}
                                </span>
                                <span className="text-zinc-500 line-clamp-1">
                                  <span className="text-black">Link : </span>
                                  {item.link}
                                </span>
                              </div>
                            );
                          })
                        ) : (
                          <>
                            {Array.from({ length: 3 }).map((_, index) => {
                              return (
                                <div
                                  key={index}
                                  className={`w-full flex flex-col gap-3 ${
                                    index !== 0 && "border-t-[1px]"
                                  } border-zinc-200 py-4`}
                                >
                                  <span className="text-zinc-500 line-clamp-1 flex items-center gap-1">
                                    <span className="text-black flex-shrink-0">
                                      Name :{" "}
                                    </span>
                                    <div className="py-1 w-full">
                                      <Skeleton className="h-4 w-full" />
                                    </div>
                                  </span>
                                  <span className="text-zinc-500 line-clamp-1 flex items-center gap-1">
                                    <span className="text-black flex-shrink-0">
                                      Link :{" "}
                                    </span>
                                    <div className="py-1 w-full">
                                      <Skeleton className="h-4 w-full" />
                                    </div>
                                  </span>
                                </div>
                              );
                            })}
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
