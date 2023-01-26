import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = ({ handleClick }) => {
  return (
    <div className="headerHolder">
      <Link to="/" preventScrollReset={true}>
        <div className="brandNameHolder">Responsive Viewer App</div>
      </Link>

      <div onClick={handleClick}>zooooommmm</div>
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
