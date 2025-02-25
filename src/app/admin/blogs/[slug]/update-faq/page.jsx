"use client";

import { useState } from "react";
import { useAppContext } from "@/context/Context";
import Sidebar from "@/utils/sidebar/Sidebar";
import Loader from "@/utils/loader/Loader";

const UpdateFAQ = () => {
    
  const { fullSidebar } = useAppContext();

  const [faq, setfaq] = useState([{ question: "", answer: "" }]);
  const [loading, setLoading] = useState(false);

  const handleFAQChange = (index, field, value) => {
    const updatedfaq = [...faq];
    updatedfaq[index][field] = value;
    setfaq(updatedfaq);
  };

  const addFAQ = () => {
    setfaq([...faq, { question: "", answer: "" }]);
  };

  const removeFAQ = (index) => {
    const updatedfaq = faq.filter((_, i) => i !== index);
    setfaq(updatedfaq);
  };

  const handleUpdateFAQs = () => {
    setLoading(true);
  };

  return (
    <>
      <div className="update-faqs w-full h-screen flex flex-col lg:flex-row items-center bg-[#5DD1FF]">
        <Sidebar />
        <div
          className={`right h-full w-full ${
            fullSidebar && "lg:w-[80%]"
          } py-10 px-5 md:px-10 overflow-y-scroll`}
        >
          <div className="auth w-full h-full flex items-start justify-center">
            <div className="max-w-xl w-full form-area flex flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
              <div className="flex flex-col gap-10">
                <div className="heading-area">
                  <h2 className="text-center text-xl font-semibold">
                    Update FAQs
                  </h2>
                </div>
                <div className="input-area flex flex-col gap-5">
                  {faq.map((faq, index) => (
                    <div key={index} className="w-full flex flex-col gap-5">
                      <input
                        type="text"
                        value={faq.question}
                        onChange={(e) =>
                          handleFAQChange(index, "question", e.target.value)
                        }
                        placeholder="Question"
                        className="faq-question text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                      />
                      <textarea
                        value={faq.answer}
                        onChange={(e) =>
                          handleFAQChange(index, "answer", e.target.value)
                        }
                        placeholder="Answer"
                        className="faq-answer text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                      />
                      <div className="flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={addFAQ}
                          className="add-faq w-full text-sm sm:text-base outline-none cursor-pointer text-white border-[2px] border-[#5DD1FF] rounded-lg px-4 py-2 transition-all ease-in-out duration-300 bg-[#5DD1FF] hover:bg-transparent hover:text-[#5DD1FF]"
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                        <button
                          type="button"
                          disabled={index > 0 ? false : true}
                          onClick={() => removeFAQ(index)}
                          className={`remove-faq w-full text-sm sm:text-base outline-none cursor-pointer text-white border-[2px] border-red-600 rounded-lg px-4 py-2 transition-all ease-in-out duration-300 bg-red-600 hover:bg-transparent hover:text-red-600`}
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    type="submit"
                    disabled={loading}
                    onClick={handleUpdateFAQs}
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
                      "Update FAQs"
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

export default UpdateFAQ;
