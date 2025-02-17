import React from "react";
import BlogInner4Hero from "@/utils/blog/BlogInner4Hero";
import BlogInner4Section from "@/components/blog/BlogInner4Section";
import { blogTableOfContentData4 } from "@/data/content/BlogTableOfContentData";
import { blog4Meta } from "@/data/meta/BlogInnerMetaData";

export const metadata = {
  title: blog4Meta.title,
  description: blog4Meta.description,
  keywords: blog4Meta.focusKeyWord,
  alternates: {
    canonical: blog4Meta.canonical
  }
};

const Blog04 = () => {
  return (
    <>
      <BlogInner4Hero />
      <BlogInner4Section blogTableOfContentData={blogTableOfContentData4} />
    </>
  )
}

export default Blog04