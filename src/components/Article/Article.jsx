import React, { useMemo } from "react";
import PropTypes from "prop-types";

import "./Article.css";

function Article(props) {
  const { content } = props;

  const tags = useMemo(
    () =>
      content.tags.map((tag) => (
        <li key={tag} className="tag">
          {tag}
        </li>
      )),
    [content]
  );

  return (
    <article className="article">
      <h1 className="header">{content.header}</h1>
      <p>{content.paragraph}</p>
      <ul>{tags}</ul>
    </article>
  );
}

Article.propTypes = {
  content: PropTypes.shape({
    header: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    paragraph: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
