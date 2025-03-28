import React from "react";
import Navbar from "@/utils/navbar/Navbar";
import BlogInner3Hero from "@/utils/blog/BlogInner3Hero";
import BlogInner3Section from "@/components/blog/BlogInner3Section";
import Footer from "@/utils/footer/Footer";
import { blogTableOfContentData3 } from "@/data/content/BlogTableOfContentData";
import { blog3Meta } from "@/data/meta/BlogInnerMetaData";

export const metadata = {
  title: blog3Meta.title,
  description: blog3Meta.description,
  keywords: blog3Meta.focusKeyWord,
  alternates: {
    canonical: blog3Meta.canonical,
  },
};

const Blog03 = () => {
  return (
    <>
      <Navbar pageName={"Blogs"} />
      <BlogInner3Hero />
      <BlogInner3Section blogTableOfContentData={blogTableOfContentData3} />
      <Footer />
    </>
  );
};

export default Blog03;
