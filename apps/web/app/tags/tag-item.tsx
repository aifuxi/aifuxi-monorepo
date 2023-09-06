"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export const TagItem = ({ children }: Props) => {
  return (
    <motion.div
      className="px-4 py-1.5 bg-black/5 cyberpunk-clip"
      whileHover={{ scale: 1.1 }}
    >
      {children}
    </motion.div>
  );
};
