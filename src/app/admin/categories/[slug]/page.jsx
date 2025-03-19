"use client";

import { useState, useEffect } from "react";
import { useAppContext } from "@/context/Context";
import { Skeleton } from "@/components/ui/skeleton";
import Sidebar from "@/utils/sidebar/Sidebar";
import Link from "next/link";
import axios from "axios";
import { useParams } from "next/navigation";

const CategoryDetail = () => {

  const { slug } = useParams()

  const { user, fullSidebar } = useAppContext();

  const [categoryDetails, setCategoryDetails] = useState({});

  useEffect(() => {
      const fetchCategoryDetails = async () => {
        try {
          const response = await axios.get(`/api/v1/categories/get-category-details/${slug}`);
          setCategoryDetails(response.data.category);
        } catch (error) {
          console.error("Some Error Occured While Fetching Users Details", error);
        }
      };
  
      fetchCategoryDetails();
    });

  return (
    <>
      <div className="category-detail w-full h-screen flex flex-col lg:flex-row items-center bg-[#5DD1FF]">
        <Sidebar />
        <div
          className={`right h-full w-full ${
            fullSidebar && "lg:w-[80%]"
          } py-10 px-5 md:px-10`}
        >
          <div className="profile-area flex flex-col gap-10">
            <div className="top w-full h-fit">
              <h1 className="main-heading text-4xl font-semibold text-white">
                User Details
              </h1>
            </div>
            <div className="bottom w-full h-full flex flex-col gap-10">
              <div className="card w-full h-fit flex flex-col gap-5 p-5 px-4 rounded-xl bg-white shadow-md shadow-gray-400">
                <div className="card-top flex items-center justify-between">
                  <div className="user-info w-full flex flex-col">
                    <div className="w-full user relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 border-b-[1px] border-zinc-200 pb-5">
                      {categoryDetails.name ? (
                        <span className="text-xl text-zinc-400">
                          {categoryDetails.name}
                        </span>
                      ) : (
                        <div className="w-full space-y-2 py-1">
                          <Skeleton className="h-4 w-[150px] md:w-[200px]" />
                        </div>
                      )}
                      <div className="relative sm:absolute right-0 w-full sm:w-fit flex items-center gap-3">
                        {user && user.role !== "User" && (
                          <Link
                            href={
                              "/admin/categories/" +
                              categoryDetails.slug +
                              "/update-category"
                            }
                            className="text-white flex items-center gap-1 px-4 py-3 rounded-lg bg-[#5DD1FF] transition-all ease-in-out duration-300 hover:bg-[#5DD1FF]"
                          >
                            <i className="fa-solid fa-pen-to-square"></i>
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="w-full border-zinc-200 pt-4 pb-0 text-black">
                      <span
                        className={`${
                          categoryDetails.slug ? "" : "flex items-center gap-2"
                        }`}
                      >
                        Slug :{" "}
                        {categoryDetails.slug ? (
                          `/${categoryDetails.slug}`
                        ) : (
                          <div className="py-1">
                            <Skeleton className="h-4 w-[150px] md:w-[200px]" />
                          </div>
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

export default CategoryDetail;
