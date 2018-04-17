import React from 'react';
import PropTypes from 'prop-types';

import RelatedArticles from '../../molecules/RelatedArticles';

/**
 * ORGANSISM: The `<Sidebar>` creates __.
 *
 */
const Sidebar = ({ posts }) => (
  <div className="sidebar">
    <div className="sidebar-top" />
    <div className="sidebar-bottom">
      <RelatedArticles posts={posts} className="sidebar-related-articles" />
    </div>
  </div>
);

Sidebar.propTypes = {
  /** The */
  posts: PropTypes.arrayOf.isRequired,
};

export default Sidebar;
