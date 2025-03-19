"use client";
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('@/components/editor/Editor'), { ssr: false });

const CreateNewBlog = () => {

  return (
    <>
      <Editor />
    </>
  );
};

export default CreateNewBlog;
