"use client";

import { useState, useEffect, useRef } from "react";
import Sidebar from "@/utils/sidebar/Sidebar";
import { useAppContext } from "@/context/Context";
import Loader from "@/utils/loader/Loader";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";
import EditorJS from "@editorjs/editorjs";
import { EditorJSTools } from "@/helpers/EditorJSTools";

const CreateNewBlog = () => {
  const { user, fullSidebar } = useAppContext();

  const router = useRouter();

  const editorRef = useRef(null);
  const introEditorRef = useRef(null);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [canonical, setCanonical] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [alternateText, setAlternateText] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [primaryKeyword, setPrimaryKeyword] = useState("");
  const [preview, setPreview] = useState(null);
  const [isImagesEmpty, setIsImagesEmpty] = useState(true);
  const [categories, setCategories] = useState([]);
  const [tableOfContent, setTableOfContent] = useState([
    { name: "", link: "" },
  ]);
  const [faq, setfaq] = useState([{ question: "", answer: "" }]);
  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `/api/v1/categories/get-all-categories`,
          { withCredentials: true }
        );
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategory();

    const editor = new EditorJS({
      holder: "blogContent",
      onReady: () => {
        editorRef.current = editor;
      },
      // autofocus: true,
      placeholder: "Write Some Content For your Blog",
      tools: EditorJSTools,
    });

    const introEditor = new EditorJS({
      holder: "blogIntro",
      onReady: () => {
        introEditorRef.current = introEditor;
      },
      // autofocus: true,
      placeholder: "Write Intro Paragraph For your Blog",
      tools: EditorJSTools,
    });

    return () => {
      editor.destroy();
      introEditor.destroy();
      editorRef.current = null;
      introEditorRef.current = null;
    };
  }, []);

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

  const handleCreateNewBlog = async () => {
    setLoading(true);

    try {
      const formData = new FormData();

      const content = await editorRef.current.save();
      const intro = await introEditorRef.current.save();
      formData.append("title", title);
      formData.append("slug", slug);
      formData.append("category", category);
      formData.append("canonical", canonical);
      formData.append("intro", JSON.stringify(intro));
      formData.append("content", JSON.stringify(content));
      formData.append("description", description);
      formData.append("thumbnail", thumbnail);
      formData.append("alternateText", alternateText);
      formData.append("metaTitle", metaTitle);
      formData.append("metaDescription", metaDescription);
      formData.append("primaryKeyword", primaryKeyword);
      formData.append("tableOfContent", JSON.stringify(tableOfContent));
      formData.append("faq", JSON.stringify(faq));

      const response = await axios.post(
        `/api/v1/blogs/create-new`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      toast.success(response.data.message);
      setLoading(false);
      router.push("/admin/blogs");
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.message || "An error occurred");
    }
  };

  return (
    <>
      <div className="blog w-full h-screen flex flex-col lg:flex-row items-center bg-[#5DD1FF]">
        <Sidebar />
        <div
          className={`right h-full w-full ${
            fullSidebar && "lg:w-[80%]"
          } py-10 px-5 md:px-10 overflow-y-scroll`}
        >
          <div className="blog-area flex flex-col gap-10">
            <div className="top w-full h-fit flex items-center justify-between">
              <h1 className="main-heading w-full sm:w-fit text-center sm:text-left text-4xl font-semibold text-white">
                Create New Blog
              </h1>

              <button
                type="submit"
                disabled={loading}
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={handleCreateNewBlog}
                className={`hidden sm:flex items-center justify-center gap-3 text-sm sm:text-base outline-none cursor-pointer text-[#5DD1FF] border-[2px] border-white rounded-lg px-4 py-2 transition-all ease-in-out duration-300 bg-white hover:bg-transparent hover:text-white ${
                  loading ? "bg-[#5DD1FF]" : "bg-[#5DD1FF]"
                }`}
              >
                {loading ? (
                  <>
                    <div
                      className={`w-6 h-6 border-2 border-t-transparent ${ hover ? "border-white" : "border-[#5DD1FF]" } rounded-full animate-spin`}
                    />
                    <span>Publishing...</span>
                  </>
                ) : (
                  "Publish New Blog"
                )}
              </button>
              {/* <input
                type="submit"
                className="hidden sm:flex text-sm sm:text-base outline-none cursor-pointer text-[#5DD1FF] border-[2px] border-white rounded-lg px-4 py-2 transition-all ease-in-out duration-300 bg-white hover:bg-transparent hover:text-white"
                value={"Publish Blog"}
              /> */}
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-col-reverse xl:flex-row items-start justify-center gap-5">
                <div className="w-full xl:w-[70%] form-area flex flex-col gap-5">
                  <div className="w-full flex flex-col-reverse sm:flex-row gap-5">
                    <div className="w-full h-fit flex flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
                      <h2 className="text-center text-lg xl:text-xl font-semibold">
                        SEO Details
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
                        onChange={(e) => setCanonical(e.target.value)}
                        value={canonical}
                        placeholder="Canonical"
                      />
                      <input
                        className="text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                        type="text"
                        onChange={(e) => setPrimaryKeyword(e.target.value)}
                        value={primaryKeyword}
                        placeholder="Primary Keyword"
                      />
                      <textarea
                        rows="4"
                        className="text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                        type="text"
                        onChange={(e) => setMetaDescription(e.target.value)}
                        value={metaDescription}
                        placeholder="Meta Description"
                      />
                    </div>
                    <div className="w-full h-full flex sm:hidden flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
                      <h2 className="text-center text-lg xl:text-xl font-semibold">
                        Alternate Text
                      </h2>
                      <input
                        className="text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                        type="text"
                        onChange={(e) => setAlternateText(e.target.value)}
                        value={alternateText}
                        placeholder="Alternate Text"
                      />
                    </div>
                    <div className="w-full h-full flex xl:hidden flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
                      <h2 className="text-center text-lg xl:text-xl font-semibold">
                        Upload Thumbnail
                      </h2>
                      <div
                        className={`image-area w-full h-[20vh] md:h-[22.5vh] lg:h-[20vh] xl:h-[30vh] relative ${
                          isImagesEmpty &&
                          "border-dashed border-[2px] border-[#5DD1FF]"
                        }`}
                      >
                        {preview && (
                          <img
                            src={preview}
                            alt="Thumbnail Preview"
                            className="w-full h-full object-cover"
                          />
                        )}
                        {isImagesEmpty && (
                          <span className="text-base xl:text-lg text-[#5DD1FF] absolute top-1/2 left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2">
                            Click To Upload
                          </span>
                        )}
                        <input
                          className="h-full w-full cursor-pointer opacity-0 text-sm sm:text-base outline-none px-4 py-2 absolute top-0 left-0"
                          type="file"
                          name="thumbnail"
                          onChange={handleBlogThumbnail}
                          placeholder="Thumbnail"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex xl:hidden flex-col sm:flex-row gap-5">
                    <div className="w-full sm:w-1/2 flex xl:hidden flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
                      <h2 className="text-center text-lg xl:text-xl font-semibold">
                        Select Category
                      </h2>
                      <select
                        name="category"
                        id="category"
                        className="text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                        type="text"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                        placeholder="Select Category"
                      >
                        <option value="">Select Category</option>
                        {categories.map((category, index) => {
                          return (
                            <option key={index} value={category._id}>
                              {category.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="w-full sm:w-1/2 hidden sm:flex xl:hidden flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
                      <h2 className="text-center text-lg xl:text-xl font-semibold">
                        Alternate Text
                      </h2>
                      <input
                        className="text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                        type="text"
                        onChange={(e) => setAlternateText(e.target.value)}
                        value={alternateText}
                        placeholder="Alternate Text"
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
                    <h2 className="text-center text-lg xl:text-xl font-semibold">
                      Blog Details
                    </h2>
                    <input
                      className="text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                      type="text"
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                      placeholder="Title"
                    />
                    <input
                      className="text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                      type="text"
                      onChange={(e) => setSlug(e.target.value)}
                      value={slug}
                      placeholder="Slug"
                    />
                    <textarea
                      rows="4"
                      className="flex xl:hidden text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                      type="text"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      placeholder="Short Description"
                    />
                    <div
                      id="blogIntro"
                      className="outline-none border-b-[1px] border-[#5DD1FF] py-2"
                    ></div>
                  </div>
                  <div className="w-full flex flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
                    <h2 className="text-center text-lg xl:text-xl font-semibold">
                      Table Of Content
                    </h2>
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
                  </div>
                  <div className="w-full flex xl:hidden flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
                    <h2 className="text-center text-lg xl:text-xl font-semibold">
                      Blog FAQ
                    </h2>
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
                            className="remove-faq w-full text-sm sm:text-base outline-none cursor-pointer text-white border-[2px] border-red-600 rounded-lg px-4 py-2 transition-all ease-in-out duration-300 bg-red-600 hover:bg-transparent hover:text-red-600"
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="w-full flex flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
                    <h2 className="text-center text-lg xl:text-xl font-semibold">
                      Blog Content
                    </h2>
                    <div
                      id="blogContent"
                      className="outline-none border-b-[1px] border-[#5DD1FF] py-2"
                    ></div>
                    <input
                      type="submit"
                      className="flex sm:hidden w-full text-sm sm:text-base outline-none cursor-pointer text-white border-[2px] border-[#5DD1FF] rounded-lg px-4 py-2 transition-all ease-in-out duration-300 bg-[#5DD1FF] hover:bg-transparent hover:text-[#5DD1FF]"
                      value={"Publish Blog"}
                    />
                  </div>
                </div>
                <div className="w-full xl:w-[30%] form-area flex flex-row xl:flex-col gap-5">
                  <div className="w-full hidden xl:flex flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
                    <h2 className="text-center text-lg xl:text-xl font-semibold">
                      Upload Thumbnail
                    </h2>
                    <div
                      className={`image-area w-full h-[20vh] xl:h-[29.5vh] relative ${
                        isImagesEmpty &&
                        "border-dashed border-[2px] border-[#5DD1FF]"
                      }`}
                    >
                      {preview && (
                        <img
                          src={preview}
                          alt="Thumbnail Preview"
                          className="w-full h-full object-cover"
                        />
                      )}
                      {isImagesEmpty && (
                        <span className="text-base xl:text-lg text-[#5DD1FF] absolute top-1/2 left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2">
                          Click To Upload
                        </span>
                      )}
                      <input
                        className="h-full w-full cursor-pointer opacity-0 text-sm sm:text-base outline-none px-4 py-2 absolute top-0 left-0"
                        type="file"
                        name="thumbnail"
                        onChange={handleBlogThumbnail}
                        placeholder="Thumbnail"
                      />
                    </div>
                  </div>
                  <div className="w-full hidden xl:flex flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
                    <h2 className="text-center text-lg xl:text-xl font-semibold">
                      Alternate Text
                    </h2>
                    <input
                      className="text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                      type="text"
                      onChange={(e) => setAlternateText(e.target.value)}
                      value={alternateText}
                      placeholder="Alternate Text"
                    />
                  </div>
                  <div className="w-full hidden xl:flex flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
                    <h2 className="text-center text-lg xl:text-xl font-semibold">
                      Select Category
                    </h2>
                    <select
                      name="category"
                      id="category"
                      className="text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                      type="text"
                      onChange={(e) => setCategory(e.target.value)}
                      value={category}
                      placeholder="Select Category"
                    >
                      <option value="">Select Category</option>
                      {categories.map((category, index) => {
                        return (
                          <option key={index} value={category._id}>
                            {category.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="w-full hidden xl:flex flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
                    <h2 className="text-center text-lg xl:text-xl font-semibold">
                      Short Description
                    </h2>
                    <textarea
                      rows="4"
                      className="text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                      type="text"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      placeholder="Short Description"
                    />
                  </div>
                  <div className="w-full hidden xl:flex flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
                    <h2 className="text-center text-lg xl:text-xl font-semibold">
                      Blog FAQ
                    </h2>
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
                            className="remove-faq w-full text-sm sm:text-base outline-none cursor-pointer text-white border-[2px] border-red-600 rounded-lg px-4 py-2 transition-all ease-in-out duration-300 bg-red-600 hover:bg-transparent hover:text-red-600"
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                        </div>
                      </div>
                    ))}
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

export default CreateNewBlog;
