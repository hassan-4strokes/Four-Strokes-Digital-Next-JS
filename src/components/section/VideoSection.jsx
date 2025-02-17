import React from "react";

const VideoSection = () => {
  return (
    <div className="section w-full flex items-center justify-center px-[30px] sm:px-[50px] xl:px-[12vw] pt-16 xl:pt-28">
      <iframe
        width="1130"
        height="636"
        src="https://www.youtube.com/embed/sdC7nlHRU58"
        title="Why Content Writing Matters for Your Business?"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="hidden md:flex shadow-lg shadow-zinc-400"
      ></iframe>
      <iframe
        width="1130"
        height="250"
        src="https://www.youtube.com/embed/sdC7nlHRU58"
        title="Why Content Writing Matters for Your Business?"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="flex md:hidden shadow-lg shadow-zinc-400"
      ></iframe>
    </div>
  );
};

export default VideoSection;
