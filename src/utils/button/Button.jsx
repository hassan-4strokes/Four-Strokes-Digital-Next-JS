"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Button = ({ text, link, color, border }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      whilehover={{ y: -10 }}
      transition={{ duration: 0.2, ease: "linear" }}
      className="w-fit"
    >
      <Link
        href={link}
        style={{ color: color, borderColor: border }}
        className={`w-fit text-base lg:text-xl 2xl:text-2xl border-[2px] py-3 px-16 ml-1 font-["Creato_Display"] bg-transparent`}
      >
        {text}
      </Link>
    </motion.div>
  );
};

export default Button;
