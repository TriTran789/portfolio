import React from "react";

const Introduction = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-screen flex flex-col">{children}</div>;
};

export default Introduction;
