"use client";

import { useState } from "react";
import { useAppContext } from "@/context/Context";
import { Skeleton } from "@/components/ui/skeleton";
import Sidebar from "@/utils/sidebar/Sidebar";
import Loader from "@/utils/loader/Loader";

const UpdateThumbnail = () => {
  const { fullSidebar } = useAppContext();

  const [blogDetails, setBlogDetails] = useState({});
  const [thumbnail, setThumbnail] = useState(blogDetails.thumbnail);
  const [alternateText, setAlternateText] = useState(blogDetails.alternateText);
  const [preview, setPreview] = useState("");
  const [isImagesEmpty, setIsImagesEmpty] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleBlogThumbnail = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setThumbnail(null);
      setPreview(null);
      setIsImagesEmpty(true);
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setThumbnail(file);
      setPreview(reader.result);
      setIsImagesEmpty(false);
    };
  };

  const handleUpdateBlogThumbnailDetails = () => {
    setLoading(true);
  };

  return (
    <>
      <div className="update-thumbnail w-full h-screen flex flex-col lg:flex-row items-center bg-[#5DD1FF]">
        <Sidebar />
        <div
          className={`right h-full w-full ${
            fullSidebar && "lg:w-[80%]"
          } py-10 px-5 md:px-10 overflow-y-scroll`}
        >
          <div className="blog-area w-full h-full flex items-center">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-col-reverse xl:flex-row items-start justify-center gap-5">
                <div className="max-w-sm w-full form-area flex flex-col gap-5">
                  <div className="w-full flex flex-col-reverse sm:flex-row gap-5">
                    <div className="w-full h-fit flex flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
                      <h2 className="text-center text-lg xl:text-xl font-semibold">
                        Update Thumbnail Details
                      </h2>
                      <div
                        className={`image-area w-full h-[20vh] xl:h-[29.5vh] relative rounded-xl`}
                      >
                        {preview && (
                          <img
                            src={preview}
                            alt="Thumbnail Preview"
                            className="w-full h-full object-cover rounded-xl"
                          />
                        )}
                        {isImagesEmpty ? (
                          <div className="py-1 w-full">
                            <Skeleton className="h-[250px] w-full rounded-xl" />
                          </div>
                        ) : (
                          <img src={thumbnail} className="w-full h-full rounded-xl" />
                        )}
                        <input
                          className="h-full w-full cursor-pointer opacity-0 text-sm sm:text-base outline-none px-4 py-2 absolute top-0 left-0"
                          type="file"
                          name="thumbnail"
                          onChange={handleBlogThumbnail}
                          placeholder="Thumbnail"
                        />
                      </div>
                      <input
                        className="text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                        type="text"
                        onChange={(e) => setAlternateText(e.target.value)}
                        value={alternateText}
                        placeholder="Alternate Text"
                      />
                      <button
                        type="submit"
                        disabled={loading}
                        onClick={handleUpdateBlogThumbnailDetails}
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

export default UpdateThumbnail;
