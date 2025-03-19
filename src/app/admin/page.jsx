"use client";

import Sidebar from "@/utils/sidebar/Sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { useAppContext } from "@/context/Context";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Profile = () => {

  const router = useRouter();

  const { user, setUser, fullSidebar } = useAppContext();

  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      setUser(session?.user);
    }
  });

  return (
    <>
      <div className="profile w-full h-screen flex flex-col lg:flex-row items-center bg-[#5DD1FF]">
        <Sidebar />
        <div
          className={`right h-full w-full ${
            fullSidebar && "lg:w-[80%]"
          } py-10 px-5 md:px-10`}
        >
          <div className="profile-area flex flex-col gap-10">
            <div className="top w-full h-fit">
              <h1 className="main-heading text-4xl font-semibold text-white">
                Profile
              </h1>
            </div>
            <div className="bottom w-full h-full flex flex-col gap-10">
              <div className="card w-full h-fit flex flex-col gap-5 p-5 px-4 rounded-xl bg-white shadow-md shadow-gray-400">
                <div className="card-top flex items-center justify-between">
                  <div className="user-info w-full flex flex-col">
                    <div className="w-full user relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 border-b-[1px] border-zinc-200 pb-5">
                      {user.name ? (
                        <span className="text-xl text-zinc-400">
                          {user.name}
                        </span>
                      ) : (
                        <div className="w-full space-y-2 py-1">
                          <Skeleton className="h-4 w-[150px] md:w-[200px]" />
                        </div>
                      )}
                      {/* <div className="relative sm:absolute right-0 w-full sm:w-fit flex items-center gap-3">
                        <Link
                          href="/admin/update-info"
                          className="text-center text-white w-[40%] sm:w-fit px-0 sm:px-5 py-2 rounded-lg bg-[#5DD1FF] transition-all ease-in-out duration-300 hover:bg-[#5DD1FF]"
                        >
                          Update Info
                        </Link>
                        <Link
                          href="/admin/update-password"
                          className="text-center text-white w-[60%] sm:w-fit px-0 sm:px-5 py-2 rounded-lg bg-[#5DD1FF] transition-all ease-in-out duration-300 hover:bg-[#5DD1FF]"
                        >
                          Update Password
                        </Link>
                      </div> */}
                    </div>
                    <div className="w-full border-b-[1px] border-zinc-200 py-4 text-black">
                      <span className={`${user.username ? "" : "flex items-center gap-2"}`}>Username : {user.username ? user.username : <div className="py-1"><Skeleton className="h-4 w-[150px] md:w-[200px]" /></div>}</span>
                    </div>
                    <div className="w-full border-b-[1px] border-zinc-200 py-4 text-black">
                    <span className={`${user.email ? "" : "flex items-center gap-2"}`}>Email : {user.email ? user.email : <div className="py-1"><Skeleton className="h-4 w-[150px] md:w-[200px]" /></div>}</span>
                    </div>
                    <div className="w-full border-zinc-200 pt-4 pb-0 text-black">
                    <span className={`${user.role ? "" : "flex items-center gap-2"}`}>Role : {user.role ? user.role : <div className="py-1"><Skeleton className="h-4 w-[150px] md:w-[200px]" /></div>}</span>
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

export default Profile;
