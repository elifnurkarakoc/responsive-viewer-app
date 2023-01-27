import Logo from "components/svg/Logo";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="headerHolder">
      <Logo />
      <Link to="/" preventScrollReset={true}>
        <div className="brandNameHolder">responsiveViewer</div>
      </Link>

      {/* <div className="headerTitleHolder">
        <Link to="/product" preventScrollReset={true}>
          <div className="headerTitle">Product</div>
        </Link>

        <Link to="/about" preventScrollReset={true}>
          <div className="headerTitle">About</div>
        </Link>
      </div> */}
    </div>
  );
};

export default Header;
