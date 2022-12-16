import React, { useMemo } from "react";
import PropTypes from "prop-types";

import "./Sidebar.css";

function Sidebar(props) {
  const { projectHeaders, onClick } = props;
  const sidebarItems = useMemo(
    () =>
      projectHeaders.map((projectHeader, index) => (
        <li key={projectHeader}>
          <button type="button" onClick={() => onClick(index)}>
            {projectHeader}
          </button>
        </li>
      )),
    [projectHeaders, onClick]
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
