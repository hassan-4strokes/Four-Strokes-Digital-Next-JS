import React from "react";
import BlogHero from "@/components/hero/BlogHero";
import BlogSection from "@/components/section/BlogSection";
import { blogsMetaData } from "@/data/meta/PagesMetaData";

export const metadata = {
  title: blogsMetaData.title,
  description: blogsMetaData.description,
  keywords: blogsMetaData.focusKeyWord,
  alternates: {
    canonical: blogsMetaData.canonical
  }
};

const Blogs = () => {
  return (
    <>
      <BlogHero />
      <BlogSection />
    </>
  );
};

export default Blogs;
