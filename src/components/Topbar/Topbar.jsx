import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { links, logo } from "../../data";

import "./Topbar.css";

function Topbar(props) {
  const { handleLogoClick } = props;
  const topbarLinks = useMemo(
    () =>
      links.map((link) => (
        <li className="topbar__link" key={link.alt}>
          <a href={link.url} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={link.icon} alt={link.alt} />
          </a>
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
        <FontAwesomeIcon icon={logo.icon} alt={logo.alt} />
      </button>
      <ul className="topbar__links">{topbarLinks}</ul>
    </div>
  );
}

Topbar.propTypes = {
  handleLogoClick: PropTypes.func.isRequired,
};

export default Topbar;
