"use client";

import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Sidebar from "@/utils/sidebar/Sidebar";
import { useAppContext } from "@/context/Context";
import Link from "next/link";

const Categories = () => {
  
  const { user, fullSidebar } = useAppContext();

  const [ categories, setCategories ] = useState([])

  return (
    <>
      <div className="categories w-full h-screen flex flex-col lg:flex-row items-center bg-[#5DD1FF]">
        <Sidebar />
        <div
          className={`right h-full w-full ${
            fullSidebar && "lg:w-[80%]"
          } py-10 px-5 md:px-10 overflow-y-scroll`}
        >
          <div className="users-area flex flex-col gap-10">
            <div className="top w-full h-fit">
              <h1 className="main-heading text-4xl font-semibold text-white">
                Categories
              </h1>
            </div>
            <div className="bottom w-full h-full flex flex-col gap-10">
              <div className="card w-full h-fit flex flex-col gap-5 p-5 rounded-xl bg-white shadow-md shadow-gray-400">
                <div className="card-top w-full flex items-center justify-between">
                  <h2 className="text-lg sm:text-xl md:text-2xl">
                    Total Categories
                  </h2>
                  {user && user.role == "Admin" ? (
                    <Link
                      to={"/admin/categories/create-new"}
                      className="text-white flex items-center gap-1 px-5 py-2 rounded-lg bg-[#5DD1FF] transition-all ease-in-out duration-300 hover:bg-[#5DD1FF]"
                    >
                    <i className="fa-solid fa-list"></i>+
                    </Link>
                  ) : (
                    <i className="fa-solid fa-list text-2xl"></i>
                  )}
                </div>
                <div className="card-bottom flex items-center justify-between">
                  <h2 className="text-2xl text-zinc-400">
                    {user.role == "Admin" && categories.length ? categories.length : 0}
                  </h2>
                </div>
              </div>
              <div className="card w-full h-fit flex flex-col gap-5 p-5 rounded-xl bg-white shadow-md shadow-gray-400">
                <div className="card-inner flex flex-col">
                  <div className="heading-area w-full flex">
                    <div className="course-name w-full flex flex-col items-start justify-center">
                      <span className="w-full text-lg sm:text-xl py-2 pb-5 text-zinc-400">
                        Categories
                      </span>
                    </div>
                    <div className="course-details w-fit flex flex-col items-start justify-center">
                      <span className="w-full text-lg sm:text-xl py-2 pb-5 text-zinc-400">
                        Action
                      </span>
                    </div>
                  </div>
                  <div className="content-area w-full flex flex-col">
                    {user && user.role === "Admin" && categories ? (
                      categories.map((item, index) => (
                        <div
                          key={index}
                          className="inner-details flex border-t-[1px] border-zinc-200"
                        >
                          <div className="name w-full flex flex-col items-start justify-center">
                            <span
                              key={index}
                              className={`w-full ${
                                categories.length - 1 !== index
                                  ? "border-b-[1px] border-zinc-200"
                                  : ""
                              } border-zinc-200 py-4`}
                            >
                              {item.title}
                            </span>
                          </div>
                          <div className="users w-fit flex flex-col items-start justify-center">
                            <div className="flex items-center gap-1 sm:gap-3">
                              <Link
                                href={`/admin/categories/${item.slug}`}
                                className="w-full text-center text-white px-5 py-2 rounded-lg bg-blue-600 transition-all ease-in-out duration-300 hover:bg-blue-700"
                              >
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                              </Link>
                              {user && user.role == "Admin" && (
                                <Link
                                  onClick={() => handleDeleteAction(item.slug)}
                                  className="w-full text-center text-white px-5 py-2 rounded-lg bg-red-600 transition-all ease-in-out duration-300 hover:bg-red-700"
                                >
                                  <i className="fa-solid fa-trash"></i>
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <>
                        {Array.from({ length: 1 }).map((item) => {
                          return (
                            <div
                              key={item}
                              className="inner-details flex border-t-[1px] border-zinc-200"
                            >
                              <div className="w-full space-y-2 py-5">
                                <Skeleton className="h-4 w-[150px] md:w-[200px]" />
                              </div>
                              <div className="flex items-center gap-1 sm:gap-3">
                                <span className="w-full cursor-pointer text-center text-white px-5 py-2 rounded-lg bg-blue-600 transition-all ease-in-out duration-300 hover:bg-blue-700">
                                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </span>
                                <span className="w-full cursor-pointer text-center text-white px-5 py-2 rounded-lg bg-red-600 transition-all ease-in-out duration-300 hover:bg-red-700">
                                  <i className="fa-solid fa-trash"></i>
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Categories