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
    {categories.map(category => (
      <li
        key={category.order}
        itemScope
        itemType="http://data-vocabulary.org/Breadcrumb"
      >
        <Link to={category.slug}>{category.title}</Link> »
      </li>
    ))}
    <li itemScope itemType="http://data-vocabulary.org/Breadcrumb">
      <span itemProp="title">{title}</span>
    </li>
  </ul>
);

Breadcrumbs.propTypes = {
  /** The  */
  categories: PropTypes.arrayOf.isRequired,
  /** The  */
  title: PropTypes.string.isRequired,
};

export default Breadcrumbs;
