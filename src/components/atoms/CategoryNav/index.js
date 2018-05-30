import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import slugify from 'slugify';

/**
 * ATOM: The `<CategoryNav>` atom creates a menu of categories (and only categories
 * because '/category/' is built into the link structure)
 * Typically used for primary site navigation.
 *
 */
const CategoryNav = ({ id, className, navItems }) => (
  <nav id={id} className={`category-nav ${className}`}>
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
  /** The id for a specific navigation element */
  id: PropTypes.string,
  /** The className for a specific navigation element */
  className: PropTypes.string.isRequired,
  /** The */
  navItems: PropTypes.arrayOf.isRequired,
};

CategoryNav.defaultProps = {
  id: null,
};

export default CategoryNav;
