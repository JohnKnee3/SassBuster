import React from "react";

const Footer = () => {
  return (
    <footer className="need-less-space">
      <div className="px-2 py-1 text-center ">
        <span className="footer">
          &copy;{new Date().getFullYear()} by{" "}
          <a
            className="footer"
            href="https://github.com/khklee"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kelly Hyunkyoung Lee
          </a>{" "}
          and{" "}
          <a
            className="footer"
            href="https://github.com/JohnKnee3"
            target="_blank"
            rel="noopener noreferrer"
          >
            John Clark
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
