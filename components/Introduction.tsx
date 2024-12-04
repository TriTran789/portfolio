import React from "react";

const Introduction = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-auto lg:h-screen flex flex-col">{children}</div>;
};

export default Introduction;
