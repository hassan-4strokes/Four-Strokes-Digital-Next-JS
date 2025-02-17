import React from "react";
import BlogInner11Hero from "@/utils/blog/BlogInner11Hero";
import BlogInner11Section from "@/components/blog/BlogInner11Section";
import { blogTableOfContentData11 } from "@/data/content/BlogTableOfContentData";
import { blog11Meta } from "@/data/meta/BlogInnerMetaData";

export const metadata = {
  title: blog11Meta.title,
  description: blog11Meta.description,
  keywords: blog11Meta.focusKeyWord,
  alternates: {
    canonical: blog11Meta.canonical
  }
};

const Blog11 = () => {
  return (
    <>
      <BlogInner11Hero />
      <BlogInner11Section blogTableOfContentData={blogTableOfContentData11} />
    </>
  )
}

export default Blog11