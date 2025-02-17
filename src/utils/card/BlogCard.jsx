import Link from "next/link";
// import { FacebookShareButton } from "react-share";

const BlogCard = ({
  image,
  heading,
  text,
  link,
  alternateText,
  index,
  isAdmin,
}) => {
  const currentPageURL = window.location.href;

  return (
    <>
      <div
        className={`section h-full w-full flex flex-col justify-between gap-4 xl:gap-8 rounded-xl py-4 xl:py-6 2xl:py-8 px-4 xl:px-6 2xl:px-8 bg-[#F3F6FE]`}
      >
        <div className="left h-full w-full">
          <a href={link}>
            <img
              src={image}
              alt={alternateText}
              className="w-full rounded-lg"
            />
          </a>
        </div>
        <div className="right w-full h-full flex flex-col gap-5 m-auto">
          <a
            href="/blogs/app-development"
            className="w-fit text-sm lg:text-base 2xl:text-lg tracking-tight font-semibold text-[#28D1B4]"
          >
            App Development
          </a>
          <a href={link}>
            <h2 className="w-fit text-lg lg:text-xl 2xl:text-2xl tracking-tight font-semibold">
              {heading}
            </h2>
          </a>
          <p className="w-fit text-sm xl:text-base tracking-wide font-['Creato_Display']">
            {text}{" "}
            <a
              href={link}
              className="w-fit text-sm xl:text-base tracking-wide font-['Creato_Display'] text-zinc-500"
            >
              Read More
            </a>
          </p>
          {/* {isAdmin && (
            <div className="w-full h-full flex items-end">
              <div className="icons-area w-full flex items-center gap-3">
                <div className="facebook-div bg-[#1877F2] rounded-full px-[12px] py-[5px]">
                  <FacebookShareButton
                    url={`https://fourstrokesdigital.com/${link}`}
                    image={image}
                    className="w-fit"
                  >
                    <i className={`fa-brands fa-facebook-f text-[#FFFFFF]`}></i>
                  </FacebookShareButton>
                </div>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};

export default BlogCard;
