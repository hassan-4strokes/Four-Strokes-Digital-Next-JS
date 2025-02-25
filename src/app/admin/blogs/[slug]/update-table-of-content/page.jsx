"use client";

import { useState } from "react";
import { useAppContext } from "@/context/Context";
import Sidebar from "@/utils/sidebar/Sidebar";
import Loader from "@/utils/loader/Loader";

const UpdateTableOfContent = () => {
  const { fullSidebar } = useAppContext();

  const [blogDetails, setBlogDetails] = useState({});
  const [tableOfContent, setTableOfContent] = useState([
    { name: "", link: "" },
  ]);
  const [loading, setLoading] = useState(false);

  const handleTableOfContentChange = (index, field, value) => {
    const updatedTableOfContent = [...tableOfContent];
    updatedTableOfContent[index][field] = value;
    setTableOfContent(updatedTableOfContent);
  };

  const addTableOfContent = () => {
    setTableOfContent([...tableOfContent, { name: "", link: "" }]);
  };

  const removeTableOfContent = (index) => {
    const updatedTableOfContent = tableOfContent.filter((_, i) => i !== index);
    setTableOfContent(updatedTableOfContent);
  };

  const handleUpdateTableOfContent = () => {
    setLoading(true);
  };

  return (
    <>
      <div className="update-table-of-content w-full h-screen flex flex-col lg:flex-row items-center bg-[#5DD1FF]">
        <Sidebar />
        <div
          className={`right h-full w-full ${
            fullSidebar && "lg:w-[80%]"
          } py-10 px-5 md:px-10 overflow-y-scroll`}
        >
          <div className="auth w-full h-full flex items-start justify-center">
            <div className="max-w-2xl w-full form-area flex flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
              <form
                onSubmit={handleUpdateTableOfContent}
                className="flex flex-col gap-10"
              >
                <div className="heading-area">
                  <h2 className="text-center text-xl font-semibold">
                    Update Table Of Content
                  </h2>
                </div>
                <div className="input-area flex flex-col gap-5">
                  {tableOfContent.map((table, index) => (
                    <div
                      key={index}
                      className="w-full flex flex-col sm:flex-row gap-5"
                    >
                      <input
                        type="text"
                        value={table.name}
                        onChange={(e) =>
                          handleTableOfContentChange(
                            index,
                            "name",
                            e.target.value
                          )
                        }
                        placeholder="Name"
                        className="table-name text-sm sm:text-base w-full outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                      />
                      <input
                        value={table.link}
                        onChange={(e) =>
                          handleTableOfContentChange(
                            index,
                            "link",
                            e.target.value
                          )
                        }
                        placeholder="Link"
                        className="table-link text-sm sm:text-base w-full outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                      />
                      <div className="flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={addTableOfContent}
                          className="add-faq w-full text-sm sm:text-base outline-none cursor-pointer text-white border-[2px] border-[#5DD1FF] rounded-lg px-4 py-2 transition-all ease-in-out duration-300 bg-[#5DD1FF] hover:bg-transparent hover:text-[#5DD1FF]"
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                        <button
                          type="button"
                          disabled={index > 0 ? false : true}
                          onClick={() => removeTableOfContent(index)}
                          className="remove-faq w-full text-sm sm:text-base outline-none cursor-pointer text-white border-[2px] border-red-600 rounded-lg px-4 py-2 transition-all ease-in-out duration-300 bg-red-600 hover:bg-transparent hover:text-red-600"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    type="submit"
                    disabled={loading}
                    onClick={handleUpdateTableOfContent}
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
                      "Update Table Of Content"
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

export default UpdateTableOfContent;
