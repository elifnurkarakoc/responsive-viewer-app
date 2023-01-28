import Github from "components/svg/Github";
import Logo from "components/svg/Logo";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="headerHolder">
      <div className="logoHolder">
        <Logo />
        <Link to="/" preventScrollReset={true}>
          <div className="brandNameHolder">responsiveViewer</div>
        </Link>
      </div>

      <Link to="https://github.com/elifnurkarakoc/responsive-viewer-app">
        <Github />
      </Link>
    </div>
  );
};

export default Header;
