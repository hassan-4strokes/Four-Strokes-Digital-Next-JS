import React from "react";
import Navbar from "@/utils/navbar/Navbar";
import BlogInner11Hero from "@/utils/blog/BlogInner11Hero";
import BlogInner11Section from "@/components/blog/BlogInner11Section";
import Footer from "@/utils/footer/Footer";
import { blogTableOfContentData11 } from "@/data/content/BlogTableOfContentData";
import { blog11Meta } from "@/data/meta/BlogInnerMetaData";

export const metadata = {
  title: blog11Meta.title,
  description: blog11Meta.description,
  keywords: blog11Meta.focusKeyWord,
  alternates: {
    canonical: blog11Meta.canonical,
  },
};

const Blog11 = () => {
  return (
    <>
      <Navbar pageName={"Blogs"} />
      <BlogInner11Hero />
      <BlogInner11Section blogTableOfContentData={blogTableOfContentData11} />
      <Footer />
    </>
  );
};

export default Blog11;
