"use client";

import { useState } from "react";
import { useAppContext } from "@/context/Context";
import Sidebar from "@/utils/sidebar/Sidebar";
import Loader from "@/utils/loader/Loader";

const UpdateCategory = () => {

  const { fullSidebar } = useAppContext();

  const [categoryDetails, setCategoryDetails] = useState({});
  const [name, setName] = useState(categoryDetails.name);
  const [userSlug, setUserSlug] = useState(categoryDetails.slug);
  const [loading, setLoading] = useState(false);

  const handleUpdateCategory = () => {
    setLoading(true);
  }

  return (
    <>
      <div className="update-category w-full h-screen flex flex-col lg:flex-row items-center bg-[#5DD1FF]">
        <Sidebar />
        <div
          className={`right h-full w-full ${
            fullSidebar && "lg:w-[80%]"
          } py-10 px-5 md:px-10 overflow-y-scroll`}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="max-w-sm w-full form-area flex flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
              <div className="flex flex-col gap-10">
                <div className="heading-area">
                  <h2 className="text-center text-xl font-semibold">
                    Update Category
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
                    type="text"
                    onChange={(e) => setUserSlug(e.target.value)}
                    value={userSlug}
                    placeholder="Slug"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    onClick={handleUpdateCategory}
                    className={`flex items-center justify-center gap-3 text-sm sm:text-base outline-none cursor-pointer text-white border-[1px] border-[#5DD1FF] rounded-lg px-4 py-2 ${
                      loading ? "bg-[#5DD1FF]" : "bg-[#5DD1FF]"
                    }`}
                  >
                    {loading ? (
                      <>
                        <Loader />
                        <span>Updating...</span>
                      </>
                    ) : (
                      "Update Category"
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

export default UpdateCategory;
