import React from "react";
import Navbar from "@/utils/navbar/Navbar";
import BlogInner8Hero from "@/utils/blog/BlogInner8Hero";
import BlogInner8Section from "@/components/blog/BlogInner8Section";
import Footer from "@/utils/footer/Footer";
import { blogTableOfContentData8 } from "@/data/content/BlogTableOfContentData";
import { blog8Meta } from "@/data/meta/BlogInnerMetaData";

export const metadata = {
  title: blog8Meta.title,
  description: blog8Meta.description,
  keywords: blog8Meta.focusKeyWord,
  alternates: {
    canonical: blog8Meta.canonical,
  },
};

const Blog08 = () => {
  return (
    <>
      <Navbar pageName={"Blogs"} />
      <BlogInner8Hero />
      <BlogInner8Section blogTableOfContentData={blogTableOfContentData8} />
      <Footer />
    </>
  );
};

export default Blog08;
