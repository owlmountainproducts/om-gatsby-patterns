import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import slugify from 'slugify';

/**
 * MOLECULE: The `<CategoryNav>` molecule creates ___.
 *
 */
const CategoryNav = ({ id, className, navItems }) => (
  <nav id={id} className={className}>
    <ul className="category-nav-ul">
      {navItems.items.map(item => (
        <li key={item.order} className="category-nav-item">
          <Link
            to={`/category/${slugify(item.title, { lower: true })}/`}
            className="category-nav-item-link"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

CategoryNav.propTypes = {
  /** The */
  navItems: PropTypes.arrayOf.isRequired,
  /** The */
  id: PropTypes.string,
  /** The */
  className: PropTypes.string.isRequired,
};

CategoryNav.defaultProps = {
  id: '',
};

export default CategoryNav;
