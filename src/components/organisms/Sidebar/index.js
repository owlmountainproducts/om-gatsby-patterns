import React from 'react';
import PropTypes from 'prop-types';

import RelatedArticles from '../../molecules/RelatedArticles';

/**
 * ORGANSISM: The `<Sidebar>` organism creates a sidebar for articles.
 *
 */
const Sidebar = ({ relatedArticles }) => (
  <div className="sidebar">
    <div className="sidebar-top" />
    <div className="sidebar-bottom">
      <RelatedArticles
        relatedArticles={relatedArticles}
        className="sidebar-related-articles"
      />
    </div>
  </div>
);

Sidebar.propTypes = {
  /** The */
  relatedArticles: PropTypes.arrayOf.isRequired,
};

export default Sidebar;
