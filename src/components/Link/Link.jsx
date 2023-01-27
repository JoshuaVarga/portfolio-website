import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Link(props) {
  const { children, href, target, rel } = props;

  return (
    <motion.a href={href} target={target} rel={rel} onTap={{ scale: 0.8 }}>
      {children}
    </motion.a>
  );
}

Link.propTypes = {
  children: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  rel: PropTypes.string.isRequired,
};

export default Link;
