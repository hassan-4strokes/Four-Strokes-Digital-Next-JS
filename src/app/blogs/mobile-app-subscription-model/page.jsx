import React from "react";
import Navbar from "@/utils/navbar/Navbar";
import BlogInner6Hero from "@/utils/blog/BlogInner6Hero";
import BlogInner6Section from "@/components/blog/BlogInner6Section";
import Footer from "@/utils/footer/Footer";
import { blogTableOfContentData6 } from "@/data/content/BlogTableOfContentData";
import { blog6Meta } from "@/data/meta/BlogInnerMetaData";

export const metadata = {
  title: blog6Meta.title,
  description: blog6Meta.description,
  keywords: blog6Meta.focusKeyWord,
  alternates: {
    canonical: blog6Meta.canonical,
  },
};

const Blog06 = () => {
  return (
    <>
      <Navbar pageName={"Blogs"} />
      <BlogInner6Hero />
      <BlogInner6Section blogTableOfContentData={blogTableOfContentData6} />
      <Footer />
    </>
  );
};

export default Blog06;
