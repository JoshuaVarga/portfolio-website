import React, { useMemo } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import "./Article.css";

function Article(props) {
  const { content } = props;

  const article = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut", staggerChildren: 0.1 },
    },
  };

  const tags = useMemo(
    () =>
      content.tags.map((tag) => (
        <li key={tag} className="tag">
          {tag}
        </li>
      )),
    [content]
  );

  const links = useMemo(
    () =>
      content.links.map((link) => (
        <li key={link.label} className="link">
          <a href={link.url} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        </li>
      )),
    [content]
  );

  return (
    <motion.article
      className="article"
      variants={article}
      initial="hidden"
      exit="hidden"
      animate="show"
      key={content.header}
    >
      <motion.img
        className="image"
        variants={article}
        src={content.image}
        alt=""
      />
      <motion.header className="article__header" variants={article}>
        <motion.h1 variants={article}>{content.header}</motion.h1>
        <motion.ul className="tags" variants={article}>
          {tags}
        </motion.ul>
        <motion.p variants={article}>{content.paragraph}</motion.p>
        <motion.ul variants={article}>{links}</motion.ul>
      </motion.header>
    </motion.article>
  );
}

Article.propTypes = {
  content: PropTypes.shape({
    header: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    paragraph: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        url: PropTypes.string,
      })
    ),
    image: PropTypes.string,
  }).isRequired,
};

export default Article;
