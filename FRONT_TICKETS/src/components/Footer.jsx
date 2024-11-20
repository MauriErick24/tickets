import React from "react";

const Footer = ({ children }) => {
  if (children != undefined) {
    return <div className="bg-black fnt-white center column">{children}</div>;
  } else {
    return (
      <div className="bg-black fnt-white center column">
        <p>BOLETOS ONLINE &copy; </p>
        <p>2024</p>
      </div>
    );
  }
};

export default Footer;
