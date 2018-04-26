import React from 'react';
import PropTypes from 'prop-types';

import EntryMeta from '../../atoms/EntryMeta';
import Breadcrumbs from '../../atoms/Breadcrumbs';
import SocialShareButtons from '../../atoms/SocialShareButtons';

/**
 * ORGANISM: The `<ArticleHeader>` creates ___.
 */
const ArticleHeader = ({ categories, article }) => (
  <header className="article-header">
    <Breadcrumbs categories={categories} title={article.title} />
    <h1>{article.title}</h1>
    <div className="info-share-bar">
      <EntryMeta
        author={article.author.name}
        lastUpdated={article.modified}
        includeLink
      />
      <SocialShareButtons
        className="top-social-buttons"
        title={article.title}
        url={article.url}
        featuredImage={article.featured_media.source_url}
      />
    </div>
  </header>
);

ArticleHeader.propTypes = {
  /** The  */
  categories: PropTypes.arrayOf.isRequired,
  /** The  */
  article: PropTypes.arrayOf.isRequired,
};

export default ArticleHeader;
