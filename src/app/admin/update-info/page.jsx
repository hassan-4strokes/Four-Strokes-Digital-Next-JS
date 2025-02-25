"use client";

import { useState } from "react";
import { useAppContext } from "@/context/Context";
import Sidebar from "@/utils/sidebar/Sidebar";
import Loader from "@/utils/loader/Loader";

const UpdateMyInfo = () => {
  const { user, fullSidebar } = useAppContext();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);
  const [loading, setLoading] = useState(false);

  const handleUpdateUserInfo = () => {
    setLoading(true);
  };

  return (
    <>
      <div className="update-my-info w-full h-screen flex flex-col lg:flex-row items-center bg-[#5DD1FF]">
        <Sidebar />
        <div
          className={`right h-full w-full ${
            fullSidebar && "lg:w-[80%]"
          } py-10 px-5 md:px-10 overflow-y-scroll`}
        >
          <div className="auth w-full h-full flex items-center justify-center">
            <div className="max-w-sm w-full form-area flex flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
              <div className="flex flex-col gap-10">
                <div className="heading-area">
                  <h2 className="text-center text-xl font-semibold">
                    Update Your Info
                  </h2>
                </div>
                <div className="input-area flex flex-col gap-5">
                  <input
                    className="outline-none text-sm sm:text-base border-b-[1px] border-[#5DD1FF] px-4 py-2"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Name"
                  />
                  <input
                    className="outline-none text-sm sm:text-base border-b-[1px] border-[#5DD1FF] px-4 py-2"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                  />
                  {/* {user && user.role == "Admin" && ( */}
                    <select
                      name="role"
                      id="role"
                      className="text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                      type="text"
                      onChange={(e) => setRole(e.target.value)}
                      value={role}
                      placeholder="Role"
                    >
                      <option value="">Select Role</option>
                      <option value="Admin">Admin</option>
                      <option value="Editor">Editor</option>
                    </select>
                  {/* )} */}
                  <button
                    type="submit"
                    disabled={loading}
                    onClick={handleUpdateUserInfo}
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
                      "Update Info"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateMyInfo;
