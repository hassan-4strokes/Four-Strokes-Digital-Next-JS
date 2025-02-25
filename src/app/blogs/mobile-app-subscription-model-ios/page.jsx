import React from "react";
import Navbar from "@/utils/navbar/Navbar";
import BlogInner5Hero from "@/utils/blog/BlogInner5Hero";
import BlogInner5Section from "@/components/blog/BlogInner5Section";
import Footer from "@/utils/footer/Footer";
import { blogTableOfContentData5 } from "@/data/content/BlogTableOfContentData";
import { blog5Meta } from "@/data/meta/BlogInnerMetaData";

export const metadata = {
  title: blog5Meta.title,
  description: blog5Meta.description,
  keywords: blog5Meta.focusKeyWord,
  alternates: {
    canonical: blog5Meta.canonical,
  },
};

const Blog05 = () => {
  return (
    <>
      <Navbar pageName={"Blogs"} />
      <BlogInner5Hero />
      <BlogInner5Section blogTableOfContentData={blogTableOfContentData5} />
      <Footer />
    </>
  );
};

export default Blog05;
