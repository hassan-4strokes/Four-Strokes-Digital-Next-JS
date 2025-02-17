import { motion } from "framer-motion";

const PortfolioImage = ({ index, image, video, animation, isImage }) => {

  return (
    <>
      <div className="image-container w-full h-[30vh] rounded-lg shadow-lg shadow-zinc-400 overflow-hidden">
        {isImage ? (
          animation ? (
            <motion.img
              initial={{ y: 0 }}
              whilehover={{ y: "-70%" }}
              transition={{ duration: 5, ease: "linear" }}
              key={index}
              src={image}
              alt="Portfolio Image"
              className="w-full rounded-lg"
            />
          ) : (
            <img
              key={index}
              src={image}
              alt="Portfolio Image"
              className="w-full h-full object-cover object-top rounded-lg"
            />
          )
        ) : (
          <iframe className="w-full h-full" src={video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        )}
      </div>
    </>
  );
};

export default PortfolioImage;
