import React, { useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Button from "../Button";

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
        <motion.li
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          key={projectHeader}
        >
          <Button
            className={
              index === currentIndex
                ? "sidebar__item--selected"
                : "sidebar__item"
            }
            onClick={() => handleClick(index)}
          >
            {projectHeader}
          </Button>
        </motion.li>
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
