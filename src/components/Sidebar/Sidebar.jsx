import React, { useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import "./Sidebar.css";

function Sidebar(props) {
  const { projectHeaders, currentIndex, onClick } = props;

  const handleClick = useCallback(
    (index) => {
      onClick(index === currentIndex ? -1 : index);
    },
    [currentIndex, onClick]
  );

  const sidebarItems = useMemo(
    () =>
      projectHeaders.map((projectHeader, index) => (
        <li key={projectHeader}>
          <motion.button
            className={
              index === currentIndex
                ? "sidebar__item--selected"
                : "sidebar__item"
            }
            type="button"
            onClick={() => handleClick(index)}
          >
            {projectHeader}
          </motion.button>
        </li>
      )),
    [projectHeaders, currentIndex, handleClick]
  );

  return (
    <nav className="sidebar">
      <h1 className="sidebar__heading">Projects</h1>
      <ul className="sidebar__items">{sidebarItems}</ul>
    </nav>
  );
}

Sidebar.propTypes = {
  projectHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Sidebar;
