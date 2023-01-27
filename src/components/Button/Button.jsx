import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Button(props) {
  const { children, onClick, className } = props;

  return (
    <motion.button
      className={className}
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.2 }}
    >
      {children}
    </motion.button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOf(PropTypes.element, PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
