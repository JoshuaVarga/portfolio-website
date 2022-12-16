import React from "react";
import PropTypes from "prop-types";

import "./Article.css";

function Article(props) {
  const { content } = props;

  return (
    <article className="article">
      <h1>{content.header}</h1>
      <p>{content.paragraph}</p>
    </article>
  );
}

Article.propTypes = {
  content: PropTypes.shape({
    header: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
