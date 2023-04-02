import React from "react";
import "../header.scss";

const Header = () => {
  let isLoading = false;

  return (
    <div className="header">
      <div className="header__title">Word Masters</div>
      <div className="header__separate-line">
        <hr width="20%" color="black" size="2"></hr>
      </div>
      <div className="header__info-bar">
        <div
          className={`header__info-bar__loading-spiral ${
            isLoading ? "" : "header__info-bar__loading-spiral--hidden"
          }`}
        >
          🌀
        </div>
      </div>
    </div>
  );
};

export default Header;
