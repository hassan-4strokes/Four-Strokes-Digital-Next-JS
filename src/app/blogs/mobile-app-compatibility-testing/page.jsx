import React from "react";
import BlogInner9Hero from "@/utils/blog/BlogInner9Hero";
import BlogInner9Section from "@/components/blog/BlogInner9Section";
import { blogTableOfContentData9 } from "@/data/content/BlogTableOfContentData";
import { blog9Meta } from "@/data/meta/BlogInnerMetaData";

export const metadata = {
  title: blog9Meta.title,
  description: blog9Meta.description,
  keywords: blog9Meta.focusKeyWord,
  alternates: {
    canonical: blog9Meta.canonical
  }
};

const Blog09 = () => {
  return (
    <>
      <BlogInner9Hero />
      <BlogInner9Section blogTableOfContentData={blogTableOfContentData9} />
    </>
  )
}

export default Blog09