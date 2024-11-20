import React from "react";

const Content = ({ children, className }) => {
  return (
    <div className={`bg-secondary fnt-white ${className}`}>{children}</div>
  );
};

export default Content;
