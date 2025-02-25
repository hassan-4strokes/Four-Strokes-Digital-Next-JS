import React from "react";
import Navbar from "@/utils/navbar/Navbar";
import BlogHero from "@/components/hero/BlogHero";
import BlogSection from "@/components/section/BlogSection";
import Footer from "@/utils/footer/Footer";
import { blogsMetaData } from "@/data/meta/PagesMetaData";

export const metadata = {
  title: blogsMetaData.title,
  description: blogsMetaData.description,
  keywords: blogsMetaData.focusKeyWord,
  alternates: {
    canonical: blogsMetaData.canonical,
  },
};

const Blogs = () => {
  return (
    <>
      <Navbar pageName={"Blogs"} />
      <BlogHero />
      <BlogSection />
      <Footer />
    </>
  );
};

export default Blogs;
