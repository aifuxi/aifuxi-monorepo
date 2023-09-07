import React from "react";

const ArticlesLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-[200px] pt-16">{children}</div>;
};

export default ArticlesLayout;
