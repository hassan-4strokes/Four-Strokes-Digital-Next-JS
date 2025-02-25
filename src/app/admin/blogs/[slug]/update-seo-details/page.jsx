"use client";

import { useState } from "react";
import { useAppContext } from "@/context/Context";
import Sidebar from "@/utils/sidebar/Sidebar";
import Loader from "@/utils/loader/Loader";

const UpdateSEODetail = () => {
  const { fullSidebar } = useAppContext();

  const [metaTitle, setMetaTitle] = useState("");
  const [primaryKeyword, setPrimaryKeyword] = useState("");
  const [canonical, setCanonical] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdateBlogSEODetails = () => {
    setLoading(true);
  };

  return (
    <>
      <div className="update-seo-details w-full h-screen flex flex-col lg:flex-row items-center bg-[#5DD1FF]">
        <Sidebar />
        <div
          className={`right h-full w-full ${
            fullSidebar && "lg:w-[80%]"
          } py-10 px-5 md:px-10 overflow-y-scroll`}
        >
          <div className="blog-area w-full h-full flex items-center">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-col-reverse xl:flex-row items-center xl:items-start justify-center gap-5">
                <div className="max-w-xl w-full form-area flex flex-col gap-5">
                  <div className="w-full flex flex-col-reverse sm:flex-row gap-5">
                    <div className="w-full h-fit flex flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
                      <h2 className="text-center text-lg xl:text-xl font-semibold">
                        Update Blog SEO Details
                      </h2>
                      <input
                        className="text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                        type="text"
                        onChange={(e) => setMetaTitle(e.target.value)}
                        value={metaTitle}
                        placeholder="Meta Title"
                      />
                      <input
                        className="text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                        type="text"
                        onChange={(e) => setPrimaryKeyword(e.target.value)}
                        value={primaryKeyword}
                        placeholder="Primary Keyword"
                      />
                      <input
                        className="text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                        type="text"
                        onChange={(e) => setCanonical(e.target.value)}
                        value={canonical}
                        placeholder="Canonical"
                      />
                      <textarea
                        rows="4"
                        className="text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                        type="text"
                        onChange={(e) => setMetaDescription(e.target.value)}
                        value={metaDescription}
                        placeholder="Meta Description"
                      />
                      <button
                        type="submit"
                        disabled={loading}
                        onClick={handleUpdateBlogSEODetails}
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
                          "Update Details"
                        )}
                      </button>
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

export default UpdateSEODetail;
