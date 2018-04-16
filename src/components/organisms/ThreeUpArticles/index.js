import React from 'react';
import PropTypes from 'prop-types';

import ArticleListing from '../../molecules/ArticleListing';

/**
 * ATOM: The `<ThreeUpArticles>` creates __.
 *
 */
const ThreeUpArticles = ({ articles }) => (
  <ul className="three-up-articles-ul">
    {articles.map(article => (
      <li key={article.node.id} className="three-up-articles-li">
        <ArticleListing
          className="article_listing_vertical"
          slug={article.node.slug}
          title={article.node.title}
          imageFiles={article.node.featured_media.source_url}
          imageText={article.node.featured_media.alt_text}
          authorName={article.node.author.name}
          lastUpdated={article.node.date}
          excerpt={article.node.yoast.metadesc}
        />
      </li>
    ))}
  </ul>
);

ThreeUpArticles.propTypes = {
  /** The */
  articles: PropTypes.arrayOf.isRequired,
};

export default ThreeUpArticles;
