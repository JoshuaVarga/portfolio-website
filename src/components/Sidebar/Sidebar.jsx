import React, { useCallback, useMemo, useState } from "react";
import PropTypes from "prop-types";

import "./Sidebar.css";

function Sidebar(props) {
  const { projectHeaders, onClick } = props;
  const [activeButton, setActiveButton] = useState(-1);

  const handleClick = useCallback(
    (index) => {
      onClick(index);
      if (activeButton === index) {
        setActiveButton(-1);
      } else {
        setActiveButton(index);
      }
    },
    [activeButton, onClick]
  );

  const sidebarItems = useMemo(
    () =>
      projectHeaders.map((projectHeader, index) => {
        let className = "sidebar__item";
        if (activeButton !== -1 && activeButton !== index) {
          className += " sidebar__item-deselected";
        } else if (index === activeButton) {
          className += " sidebar__item-selected";
        }

        return (
          <li key={projectHeader}>
            <button
              className={className}
              type="button"
              onClick={() => handleClick(index)}
            >
              {projectHeader}
            </button>
          </li>
        );
      }),
    [projectHeaders, activeButton, handleClick]
  );

  return (
    <nav className="sidebar">
      <h1>Projects</h1>
      <hr />
      <ul className="sidebar__items">{sidebarItems}</ul>
    </nav>
  );
}

Sidebar.propTypes = {
  projectHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Sidebar;
