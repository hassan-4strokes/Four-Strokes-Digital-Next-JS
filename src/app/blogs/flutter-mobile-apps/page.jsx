import React from "react";
import Navbar from "@/utils/navbar/Navbar";
import BlogInner2Hero from "@/utils/blog/BlogInner2Hero";
import BlogInner2Section from "@/components/blog/BlogInner2Section";
import Footer from "@/utils/footer/Footer";
import { blogTableOfContentData2 } from "@/data/content/BlogTableOfContentData";
import { blog2Meta } from "@/data/meta/BlogInnerMetaData";

export const metadata = {
  title: blog2Meta.title,
  description: blog2Meta.description,
  keywords: blog2Meta.focusKeyWord,
  alternates: {
    canonical: blog2Meta.canonical,
  },
};

const Blog02 = () => {
  return (
    <>
      <Navbar pageName={"Blogs"} />
      <BlogInner2Hero />
      <BlogInner2Section blogTableOfContentData={blogTableOfContentData2} />
      <Footer />
    </>
  );
};

export default Blog02;
