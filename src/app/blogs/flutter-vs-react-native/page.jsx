import React from "react";
import BlogInner12Hero from "@/utils/blog/BlogInner12Hero";
import BlogInner12Section from "@/components/blog/BlogInner12Section";
import { blogTableOfContentData12 } from "@/data/content/BlogTableOfContentData";
import { blog12Meta } from "@/data/meta/BlogInnerMetaData";

export const metadata = {
  title: blog12Meta.title,
  description: blog12Meta.description,
  keywords: blog12Meta.focusKeyWord,
  alternates: {
    canonical: blog12Meta.canonical
  }
};

const Blog12 = () => {
  return (
    <>
      <BlogInner12Hero />
      <BlogInner12Section blogTableOfContentData={blogTableOfContentData12} />
    </>
  )
}

export default Blog12