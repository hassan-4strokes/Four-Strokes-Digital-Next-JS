"use client";

import { useState } from "react";
import Sidebar from "@/utils/sidebar/Sidebar";
import { useAppContext } from "@/context/Context";
import Loader from "@/utils/loader/Loader";
const CreateNewCategory = () => {
  
  const { fullSidebar } = useAppContext();

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreateNewCategory = () => {
    setLoading(true);
  };

  return (
    <>
      <div className="create-new w-full h-screen flex flex-col lg:flex-row items-center bg-[#5DD1FF]">
        <Sidebar />
        <div
          className={`right h-full w-full ${
            fullSidebar && "lg:w-[80%]"
          } py-10 px-5 md:px-10 overflow-y-scroll`}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="max-w-sm w-full form-area flex flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
              <div className="flex flex-col gap-5">
                <h2 className="text-center text-lg sm:text-xl font-semibold">
                  Create New Category
                </h2>
                <input
                  className="text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Name"
                />
                <input
                  className="text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                  type="text"
                  onChange={(e) => setSlug(e.target.value)}
                  value={slug}
                  placeholder="Slug"
                />
                <button
                  type="submit"
                  disabled={loading}
                  onClick={handleCreateNewCategory}
                  className={`flex items-center justify-center gap-3 text-sm sm:text-base outline-none cursor-pointer text-white border-[1px] border-[#5DD1FF] rounded-lg px-4 py-2 ${
                    loading ? "bg-[#5DD1FF]" : "bg-[#5DD1FF]"
                  }`}
                >
                  {loading ? (
                    <>
                      <Loader size={6} />
                      <span>Creating...</span>
                    </>
                  ) : (
                    "Create New Category"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateNewCategory