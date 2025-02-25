import React from "react";
import Navbar from "@/utils/navbar/Navbar";
import BlogInner4Hero from "@/utils/blog/BlogInner4Hero";
import BlogInner4Section from "@/components/blog/BlogInner4Section";
import Footer from "@/utils/footer/Footer";
import { blogTableOfContentData4 } from "@/data/content/BlogTableOfContentData";
import { blog4Meta } from "@/data/meta/BlogInnerMetaData";

export const metadata = {
  title: blog4Meta.title,
  description: blog4Meta.description,
  keywords: blog4Meta.focusKeyWord,
  alternates: {
    canonical: blog4Meta.canonical,
  },
};

const Blog04 = () => {
  return (
    <>
      <Navbar pageName={"Blogs"} />
      <BlogInner4Hero />
      <BlogInner4Section blogTableOfContentData={blogTableOfContentData4} />
      <Footer />
    </>
  );
};

export default Blog04;
