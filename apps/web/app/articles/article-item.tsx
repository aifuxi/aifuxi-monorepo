"use client";

import { IconChevronRight } from "@/components/client/icons";
import Link from "next/link";
import React from "react";

export const ArticleItem = () => {
  return (
    <Link
      href="/articles/test-friendly-url"
      className="grid gap-6 py-16 px-8 border-b relative group/wrapper"
    >
      <div className="absolute inset-x-0 w-0 inset-8 bg-white z-[-1] group-hover/wrapper:w-full transition-all"></div>
      <div className="flex items-center space-x-4 mb-2">
        <div className="flex flex-col">
          <div className="w-[128px] h-0.5 bg-black"></div>
          <div className="w-[64px] h-2 bg-black cyberpunk-divider-clip"></div>
        </div>
        <span>2022年4月21日</span>
      </div>
      <h2 className="text-3xl font-semibold">
        Hello world: how I built this site
      </h2>
      <p className="leading-7 text-black/80">
        I originally built this portfolio site back in 2018, and since then its
        evolved quite a bit. Recently I migrated from Create React App to
        Next.js and made some major upgrades in the process.
      </p>
      <div className="flex justify-between items-center h-8">
        <div className="text-lg font-semibold flex items-center space-x-4 relative group/more pr-4">
          <div className="absolute inset-0 w-0 bg-black/20 z-[-1] group-hover/more:w-full transition-all"></div>
          <IconChevronRight className="w-4 h-4" />
          <span>Read article</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-[42px] h-0.5 bg-black/20"></div>
          <div className="text-black/80">00:04:36:30</div>
        </div>
      </div>
    </Link>
  );
};
