"use client";

import { useState } from "react";
import Sidebar from "@/utils/sidebar/Sidebar";
import { useAppContext } from "@/context/Context";
import Loader from "@/utils/loader/Loader";
import { toast } from "react-toastify";
import axios from "axios";

const CreateNewCategory = () => {
  const { fullSidebar } = useAppContext();

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreateNewCategory = async () => {
    setLoading(true);
    if (!name || !slug) {
      toast.error("All Fields Are Required");
      setLoading(false);
      return;
    }

    if (name.length < 3) {
      toast.error("Name Should Have Atleast 3 Characters");
      setLoading(false);
      return;
    }

    if (slug.length < 3) {
      toast.error("Slug Should Have Atleast 3 Characters");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "/api/v1/categories/create-new",
        {
          name,
          slug,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(response.data.message);
      setName("");
      setSlug("");
      setLoading(false);
    } catch (error) {
      console.error("Some Error Occured While Creating New User", error);
      toast.error(error.response.data.message);
      setLoading(false);
    }
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
  );
};

export default CreateNewCategory;
