"use client";
import dynamic from 'next/dynamic';


const CreateNewBlog = () => {
  
  const Editor = dynamic(() => import('@/components/editor/Editor'), { ssr: false });
  return (
    <>
      <Editor />
    </>
  );
};

export default CreateNewBlog;
