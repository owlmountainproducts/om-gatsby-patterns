import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

/**
 * ATOM: The `<Breadcrumbs>` atom creates breadcrumbs showing category structure.
 * NOTE: Using HTML5: https://coderwall.com/p/p0nvjw/creating-a-semantic-breadcrumb-using-html5-microdata
 */
const Breadcrumbs = ({ categories, title }) => (
  <ul className="breadcrumbs">
    <li itemScope itemType="http://data-vocabulary.org/Breadcrumb">
      <Link to="/" itemProp="url">
        <span itemProp="title">Home »</span>
      </Link>
    </li>
    {categories &&
      categories.map(category => (
        <li
          key={category.order}
          itemScope
          itemType="http://data-vocabulary.org/Breadcrumb"
        >
          <Link to={`/category/${category.slug}`}>{category.name}</Link> »
        </li>
      ))}
    <li itemScope itemType="http://data-vocabulary.org/Breadcrumb">
      <span itemProp="title">{title}</span>
    </li>
  </ul>
);

Breadcrumbs.propTypes = {
  /** The  */
  categories: PropTypes.arrayOf,
  /** The  */
  title: PropTypes.string.isRequired,
};

Breadcrumbs.defaultProps = {
  categories: false,
};

export default Breadcrumbs;
