import React from "react";
import Navbar from "@/utils/navbar/Navbar";
import BlogInner10Hero from "@/utils/blog/BlogInner10Hero";
import BlogInner10Section from "@/components/blog/BlogInner10Section";
import Footer from "@/utils/footer/Footer";
import { blogTableOfContentData10 } from "@/data/content/BlogTableOfContentData";
import { blog10Meta } from "@/data/meta/BlogInnerMetaData";

export const metadata = {
  title: blog10Meta.title,
  description: blog10Meta.description,
  keywords: blog10Meta.focusKeyWord,
  alternates: {
    canonical: blog10Meta.canonical,
  },
};

const Blog10 = () => {
  return (
    <>
      <Navbar pageName={"Blogs"} />
      <BlogInner10Hero />
      <BlogInner10Section blogTableOfContentData={blogTableOfContentData10} />
      <Footer />
    </>
  );
};

export default Blog10;
