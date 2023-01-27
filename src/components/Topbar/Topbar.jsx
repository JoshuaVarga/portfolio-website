import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DarkMode from "../DarkMode";
import Link from "../Link";

import { links, logo, darkMode } from "../../data";

import "./Topbar.css";

function Topbar(props) {
  const { handleLogoClick } = props;
  const topbarLinks = useMemo(
    () =>
      links.map((link) => (
        <li className="topbar__link" key={link.alt}>
          <Link href={link.url} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              className="topbar__svg"
              icon={link.icon}
              alt={link.alt}
            />
          </Link>
        </li>
      )),
    []
  );

  return (
    <div className="topbar">
      <button
        className="topbar__logo"
        type="button"
        onClick={() => handleLogoClick(-1)}
      >
        <FontAwesomeIcon
          className="topbar__svg"
          icon={logo.icon}
          alt={logo.alt}
        />
      </button>
      <div className="topbar__items">
        <ul className="topbar__links">{topbarLinks}</ul>
        <DarkMode
          iconDark={darkMode.iconDark}
          iconLight={darkMode.iconLight}
          alt={darkMode.alt}
        />
      </div>
    </div>
  );
}

Topbar.propTypes = {
  handleLogoClick: PropTypes.func.isRequired,
};

export default Topbar;
