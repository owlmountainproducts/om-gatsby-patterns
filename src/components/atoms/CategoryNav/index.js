import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

/**
 * MOLECULE: The `<CategoryNav>` molecule creates ___.
 *
 */
const CategoryNav = ({ className, id }) => (
  <nav id={id} className={className}>
    <ul className="category-nav-ul">
      <li className="category-nav-item">
        <Link to="/" className="category-nav-item-link">
          Nav Item 01
        </Link>
      </li>
      <li className="category-nav-item">
        <Link to="/" className="category-nav-item-link">
          Nav Item 02
        </Link>
      </li>
      <li className="category-nav-item">
        <Link to="/" className="category-nav-item-link">
          Nav Item 03
        </Link>
      </li>
      <li className="category-nav-item">
        <Link to="/" className="category-nav-item-link">
          Nav Item 04
        </Link>
      </li>
    </ul>
  </nav>
);

CategoryNav.propTypes = {
  /** The */
  id: PropTypes.string,
  /** The */
  className: PropTypes.string.isRequired,
};

CategoryNav.defaultProps = {
  id: '',
};

export default CategoryNav;
