"use client";

import { useEffect, useState } from "react";
import { useAppContext } from "@/context/Context";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";

const Sidebar = () => {
  // Context

  const { fullSidebar, setFullSidebar, user, setUser } = useAppContext();

  const router = useRouter();

  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      setUser(session?.user);
    }
  });

  // Local States

  const [navBar, setNavBar] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(
        { callbackUrl: "/auth" },
        {
          redirect: false,
        }
      );
      toast.success("User Logged Out Successfully");
      router.push("/auth");
    } catch (error) {
      console.error("Some Error Occured While Logging Out User", error);
      toast.error("User Logout Failed");
    }
  };

  return (
    <>
      <div
        className={`sidebar relative h-fit lg:h-full w-full ${
          fullSidebar ? "lg:w-[20%]" : "lg:w-16"
        } flex flex-col px-5 ${
          fullSidebar ? "xl:px-10" : "xl:px-3"
        } bg-white border-r-[1px] border-zinc-200`}
      >
        <div
          className={`top w-full ${
            fullSidebar ? "h-fit" : "h-[12vh]"
          } flex items-center justify-between py-5 bg-white`}
        >
          <div className="left">
            <Link href={"/"}>
              <img
                src={`${fullSidebar ? "/logo.webp" : "/favicon.webp"}`}
                alt="Website Logo"
                className="w-32"
              />
            </Link>
          </div>
          <div className="visible lg:hidden right">
            <div className={`w-fit ${navBar == true ? "hidden" : "flex"}`}>
              <i
                onClick={() => setNavBar(!navBar)}
                className={`fa-solid fa-bars text-2xl ${
                  navBar ? "hidden" : "visible"
                }`}
              ></i>
            </div>
            <div className={`w-fit ${navBar == true ? "flex" : "hidden"}`}>
              <i
                onClick={() => setNavBar(!navBar)}
                className={`fa-solid fa-xmark text-2xl ${
                  navBar ? "visible" : "hidden"
                }`}
              ></i>
            </div>
          </div>
        </div>
        <div
          className={`mid w-full h-full ${
            navBar ? "visible" : "hidden"
          } lg:flex flex-col`}
        >
          {user && user.role !== "User" && (
            <div className={`nav-link-area border-t-[1px] border-zinc-200`}>
              <Link
                href={"/admin"}
                className={`w-full h-14 flex items-center ${
                  fullSidebar ? null : "justify-center"
                } gap-5 py-4 transition-all ease-in-out duration-300 hover:pl-0 ${
                  fullSidebar && "lg:hover:pl-3"
                } text-black`}
              >
                <i className={`fa-solid fa-user`}></i>
                {fullSidebar && "Profile"}
              </Link>
            </div>
          )}
          {user && user.role === "Admin" && (
            <div className={`nav-link-area border-t-[1px] border-zinc-200`}>
              <Link
                href={"/admin/users"}
                className={`w-full h-14 flex items-center ${
                  fullSidebar ? null : "justify-center"
                } gap-5 py-4 transition-all ease-in-out duration-300 hover:pl-0 ${
                  fullSidebar && "lg:hover:pl-3"
                } text-black`}
              >
                <i className={`fa-solid fa-users`}></i>
                {fullSidebar && "Users"}
              </Link>
            </div>
          )}
          {user && user.role !== "User" && (
            <div className={`nav-link-area border-t-[1px] border-zinc-200`}>
              <Link
                href={"/admin/blogs"}
                className={`w-full h-14 flex items-center ${
                  fullSidebar ? null : "justify-center"
                } gap-5 py-4 transition-all ease-in-out duration-300 hover:pl-0 ${
                  fullSidebar && "lg:hover:pl-3"
                } text-black`}
              >
                <i className={`fa-solid fa-file-signature`}></i>
                {fullSidebar && "Blogs"}
              </Link>
            </div>
          )}
          {user && user.role === "User" ? null : (
            <div className={`nav-link-area border-t-[1px] border-zinc-200`}>
              <Link
                href={"/admin/categories"}
                className={`w-full h-14 flex items-center ${
                  fullSidebar ? null : "justify-center"
                } gap-5 py-4 transition-all ease-in-out duration-300 hover:pl-0 ${
                  fullSidebar && "lg:hover:pl-3"
                } text-black`}
              >
                <i className={`fa-solid fa-list`}></i>
                {fullSidebar && "Categories"}
              </Link>
            </div>
          )}
          <div className="flex lg:hidden nav-link-area border-t-[1px] border-zinc-200">
            <Link
              onClick={handleLogout}
              href={"/auth"}
              className="w-full flex items-center gap-5 py-6 text-black"
            >
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              Logout
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex bottom w-full h-fit border-t-[1px] border-zinc-200">
          <div className="nav-link-area w-full">
            <button
              onClick={handleLogout}
              className={`w-full h-14 flex items-center ${
                fullSidebar ? null : "justify-center"
              } gap-5 py-4 transition-all ease-in-out duration-300 hover:pl-0 ${
                fullSidebar && "lg:hover:pl-3"
              } text-black`}
            >
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              {fullSidebar && "Logout"}
            </button>
          </div>
        </div>
      </div>
      <div className="h-full w-fit hidden lg:flex items-start">
        {fullSidebar === true ? (
          <i
            onClick={() => setFullSidebar(false)}
            className="fa-solid fa-angle-left text-xl bg-white cursor-pointer rounded-r-lg p-1 px-3 border-[1px] border-zinc-200"
          ></i>
        ) : (
          <i
            onClick={() => setFullSidebar(true)}
            className="fa-solid fa-angle-right text-xl bg-white cursor-pointer rounded-r-lg p-1 px-3 border-[1px] border-zinc-200"
          ></i>
        )}
      </div>
    </>
  );
};

export default Sidebar;
