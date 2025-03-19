"use client";

import { useEffect, useState } from "react";
import { useAppContext } from "@/context/Context";
import { Skeleton } from "@/components/ui/skeleton";
import Sidebar from "@/utils/sidebar/Sidebar";
import Link from "next/link";
import axios from "axios";
import { useParams } from "next/navigation";

const UserDetail = () => {

  const { username } = useParams();
  
  const { user, fullSidebar } = useAppContext();

  const [userDetails, setUserDetails] = useState({});
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`/api/v1/users/get-user-details/${username}`);
        setUserDetails(response.data.user);
      } catch (error) {
        console.error("Some Error Occured While Fetching Users Details", error);
      }
    };

    fetchUserDetails();
  });


  return (
    <>
      <div className="user-detail w-full h-screen flex flex-col lg:flex-row items-center bg-[#5DD1FF]">
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
                      {userDetails.name ? (
                        <span className="text-xl text-zinc-400">
                          {userDetails.name}
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
                              "/admin/users/" +
                              userDetails.username +
                              "/update-info"
                            }
                            className="text-white flex items-center gap-1 px-4 py-3 rounded-lg bg-[#5DD1FF] transition-all ease-in-out duration-300 hover:bg-[#5DD1FF]"
                          >
                            <i className="fa-solid fa-pen-to-square"></i>
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="w-full border-b-[1px] border-zinc-200 py-4 text-black">
                      <span
                        className={`${
                          userDetails.username ? "" : "flex items-center gap-2"
                        }`}
                      >
                        Username :{" "}
                        {userDetails.username ? (
                          userDetails.username
                        ) : (
                          <div className="py-1">
                            <Skeleton className="h-4 w-[150px] md:w-[200px]" />
                          </div>
                        )}
                      </span>
                    </div>
                    <div className="w-full border-b-[1px] border-zinc-200 py-4 text-black">
                      <span
                        className={`${
                          userDetails.email ? "" : "flex items-center gap-2"
                        }`}
                      >
                        Email :{" "}
                        {userDetails.email ? (
                          userDetails.email
                        ) : (
                          <div className="py-1">
                            <Skeleton className="h-4 w-[150px] md:w-[200px]" />
                          </div>
                        )}
                      </span>
                    </div>
                    <div className="w-full border-zinc-200 pt-4 pb-0 text-black">
                      <span
                        className={`${
                          userDetails.role ? "" : "flex items-center gap-2"
                        }`}
                      >
                        Role :{" "}
                        {userDetails.role ? (
                          userDetails.role
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

export default UserDetail;
