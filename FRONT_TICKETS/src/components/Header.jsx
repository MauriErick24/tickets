import React from "react";
import "../css/styles.css";

const Header = ({ children }) => {
  return <div className="bg-primary fnt-white center column">{children}</div>;
};

export default Header;
