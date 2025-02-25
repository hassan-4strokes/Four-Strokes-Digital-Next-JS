import React from "react";
import Navbar from "@/utils/navbar/Navbar";
import BlogInner1Hero from "@/utils/blog/BlogInner1Hero";
import BlogInner1Section from "@/components/blog/BlogInner1Section";
import Footer from "@/utils/footer/Footer";
import { blogTableOfContentData1 } from "@/data/content/BlogTableOfContentData";
import { blog1Meta } from "@/data/meta/BlogInnerMetaData";

export const metadata = {
  title: blog1Meta.title,
  description: blog1Meta.description,
  keywords: blog1Meta.focusKeyWord,
  alternates: {
    canonical: blog1Meta.canonical,
  },
};

const Blog01 = () => {
  return (
    <>
      <Navbar pageName={"Blogs"} />
      <BlogInner1Hero />
      <BlogInner1Section blogTableOfContentData={blogTableOfContentData1} />
      <Footer />
    </>
  );
};

export default Blog01;
