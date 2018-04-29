import React from 'react';
import PropTypes from 'prop-types';

import EntryMeta from '../../atoms/EntryMeta';
import Breadcrumbs from '../../atoms/Breadcrumbs';
import SocialShareButtons from '../../atoms/SocialShareButtons';

/**
 * ORGANISM: The `<ArticleHeader>` organism creates the headline area of articles and pages.
 * Includes breadcrumbs, share buttons, and if a post includes author and updated date.
 */
const ArticleHeader = ({
  id, className, categories, article, isPost, url,
}) => (
  <header id={id} className={`article-header ${className}`}>
    <Breadcrumbs categories={categories} title={article.title} />
    <h1>{article.title}</h1>
    <div className="info-share-bar">
      {isPost && (
        <EntryMeta
          author={article.author.name}
          lastUpdated={article.modified}
          includeLink
        />
      )}
      {article.featured_media && (
        <SocialShareButtons
          className="top-social-buttons"
          title={article.title}
          url={url}
          featuredImage={article.featured_media.source_url}
        />
      )}
    </div>
  </header>
);

ArticleHeader.propTypes = {
  /** The  */
  id: PropTypes.string,
  /** The  */
  className: PropTypes.string,
  /** The  */
  categories: PropTypes.arrayOf.isRequired,
  /** The  */
  article: PropTypes.arrayOf.isRequired,
  /** The  */
  isPost: PropTypes.bool.isRequired,
  /** The  */
  url: PropTypes.string.isRequired,
};

ArticleHeader.defaultProps = {
  id: null,
  className: null,
};

export default ArticleHeader;
