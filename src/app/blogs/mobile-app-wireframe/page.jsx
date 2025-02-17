import React from "react";
import BlogInner8Hero from "@/utils/blog/BlogInner8Hero";
import BlogInner8Section from "@/components/blog/BlogInner8Section";
import { blogTableOfContentData8 } from "@/data/content/BlogTableOfContentData";
import { blog8Meta } from "@/data/meta/BlogInnerMetaData";

export const metadata = {
  title: blog8Meta.title,
  description: blog8Meta.description,
  keywords: blog8Meta.focusKeyWord,
  alternates: {
    canonical: blog8Meta.canonical
  }
};

const Blog08 = () => {
  return (
    <>
      <BlogInner8Hero />
      <BlogInner8Section blogTableOfContentData={blogTableOfContentData8} />
    </>
  )
}

export default Blog08