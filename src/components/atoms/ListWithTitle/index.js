import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

/**
 * ATOM: The `<ListWithTitle>` atom creates an unordered navigation list with an h3 header.
 *
 */
const ListWithTitle = ({
  id, className, title, listItems,
}) => (
  <nav id={id} className={`list-with-title ${className}`}>
    <h3 className="list-with-title-header">{title}</h3>
    <ul className="list-with-title-ul">
      {listItems.items.map(item => (
        <li key={item.order}>
          <Link to={`/${item.object_slug}/`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

ListWithTitle.propTypes = {
  /** The id for a specific list with title */
  id: PropTypes.string,
  /** The className for a specific list with title */
  className: PropTypes.string,
  /** The */
  title: PropTypes.string.isRequired,
  /** The */
  listItems: PropTypes.arrayOf.isRequired,
};

ListWithTitle.defaultProps = {
  id: null,
  className: null,
};

export default ListWithTitle;
