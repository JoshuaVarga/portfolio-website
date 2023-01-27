import React, { useState } from "react";
import PropTypes from "prop-types";
import "./DarkMode.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../Button";

function DarkMode(props) {
  const { iconLight, iconDark, alt } = props;

  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const clickedClass = "clicked";
  const { body } = document;
  const lightTheme = "light";
  const darkTheme = "dark";

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(darkTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      setTheme(lightTheme);
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "dark");
      setTheme(darkTheme);
    }
  };

  return (
    <Button className="darkMode" onClick={(e) => switchTheme(e)}>
      {theme === "dark" ? (
        <FontAwesomeIcon className="toolbar__item" icon={iconDark} alt={alt} />
      ) : (
        <FontAwesomeIcon className="toolbar__item" icon={iconLight} alt={alt} />
      )}
    </Button>
  );
}

DarkMode.propTypes = {
  iconLight: PropTypes.string.isRequired,
  iconDark: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default DarkMode;
