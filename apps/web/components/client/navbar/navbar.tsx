"use client";

import Link from "next/link";
import React from "react";
import { IconBilibili, IconGithub } from "../icons";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const baseNavItems: NavItem[] = [
  {
    label: "首页",
    link: "/",
  },
  {
    label: "文章",
    link: "/articles",
  },
  {
    label: "标签",
    link: "/tags",
  },
  {
    label: "关于",
    link: "/me",
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-12 left-12 bottom-12 w-16 flex flex-col items-center">
      <div className="w-12 h-12 bg-black/10"></div>

      <div className="mt-12" style={{ writingMode: "sideways-rl" }}>
        {baseNavItems.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            className={
              "flex justify-center items-center text-center h-[100px] p-4 font-semibold"
            }
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center">
        <motion.a
          href="#"
          whileHover={{ scale: 1.2, color: "var(--colorPrimary)" }}
          className="w-12 h-12 flex items-center justify-center text-typography-secondary"
        >
          <IconGithub className="w-6 h-6" />
        </motion.a>
        <motion.a
          href="#"
          whileHover={{ scale: 1.2, color: "var(--colorPrimary)" }}
          className="w-12 h-12 flex items-center justify-center text-typography-secondary"
        >
          <IconBilibili className="w-6 h-6" />
        </motion.a>
      </div>
    </div>
  );
};
