"use client";

import { useState } from "react";
import { useAppContext } from "@/context/Context";
import Sidebar from "@/utils/sidebar/Sidebar";
import Loader from "@/utils/loader/Loader";

const UpdateMyPassword = () => {
  const { user, fullSidebar } = useAppContext();

  const [oldShow, setOldShow] = useState(false);
  const [newShow, setNewShow] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdateUserPassword = () => {
    setLoading(true);
  };

  return (
    <>
      <div className="update-password w-full h-screen flex flex-col lg:flex-row items-center bg-[#5DD1FF]">
        <Sidebar />
        <div
          className={`right h-full w-full ${
            fullSidebar && "lg:w-[80%]"
          } py-10 px-5 md:px-10 overflow-y-scroll`}
        >
          <div className="auth w-full h-full flex items-center justify-center">
            <div className="max-w-sm w-full form-area flex flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
              <form className="flex flex-col gap-10">
                <div className="heading-area">
                  <h2 className="text-center text-xl font-semibold">
                    Update Your Password
                  </h2>
                </div>
                <div className="input-area flex flex-col gap-5">
                  <div className="w-full flex items-center justify-between border-b-[1px] border-[#5DD1FF]">
                    <input
                      className="outline-none text-sm sm:text-base px-4 py-2"
                      type={oldShow ? "text" : "password"}
                      onChange={(e) => setOldPassword(e.target.value)}
                      value={oldPassword}
                      placeholder="Old Password"
                    />
                    {oldShow ? (
                      <i
                        onClick={() => setOldShow(false)}
                        className="fa-regular fa-eye cursor-pointer text-[#5DD1FF]"
                      ></i>
                    ) : (
                      <i
                        onClick={() => setOldShow(true)}
                        className="fa-regular fa-eye-slash cursor-pointer text-[#5DD1FF]"
                      ></i>
                    )}
                  </div>
                  <div className="w-full flex items-center justify-between border-b-[1px] border-[#5DD1FF]">
                    <input
                      className="outline-none text-sm sm:text-base px-4 py-2"
                      type={newShow ? "text" : "password"}
                      onChange={(e) => setNewPassword(e.target.value)}
                      value={newPassword}
                      placeholder="New Password"
                    />
                    {newShow ? (
                      <i
                        onClick={() => setNewShow(false)}
                        className="fa-regular fa-eye cursor-pointer text-[#5DD1FF]"
                      ></i>
                    ) : (
                      <i
                        onClick={() => setNewShow(true)}
                        className="fa-regular fa-eye-slash cursor-pointer text-[#5DD1FF]"
                      ></i>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    onClick={handleUpdateUserPassword}
                    className={`flex items-center justify-center gap-3 text-sm sm:text-base outline-none cursor-pointer text-white border-[1px] border-[#5DD1FF] rounded-lg px-4 py-2 ${
                      loading ? "bg-[#5DD1FF]" : "bg-[#5DD1FF]"
                    }`}
                  >
                    {loading ? (
                      <>
                        <Loader size={6} />
                        <span>Updating...</span>
                      </>
                    ) : (
                      "Update Password"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateMyPassword;
