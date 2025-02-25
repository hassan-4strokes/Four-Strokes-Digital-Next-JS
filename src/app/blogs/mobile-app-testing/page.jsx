import React from "react";
import Navbar from "@/utils/navbar/Navbar";
import BlogInner7Hero from "@/utils/blog/BlogInner7Hero";
import BlogInner7Section from "@/components/blog/BlogInner7Section";
import Footer from "@/utils/footer/Footer";
import { blogTableOfContentData7 } from "@/data/content/BlogTableOfContentData";
import { blog7Meta } from "@/data/meta/BlogInnerMetaData";

export const metadata = {
  title: blog7Meta.title,
  description: blog7Meta.description,
  keywords: blog7Meta.focusKeyWord,
  alternates: {
    canonical: blog7Meta.canonical,
  },
};

const Blog07 = () => {
  return (
    <>
      <Navbar pageName={"Blogs"} />
      <BlogInner7Hero />
      <BlogInner7Section blogTableOfContentData={blogTableOfContentData7} />
      <Footer />
    </>
  );
};

export default Blog07;
