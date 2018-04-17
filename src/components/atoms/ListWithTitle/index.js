import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

/**
 * ATOM: The `<ListWithTitle>` creates __.
 *
 */
const ListWithTitle = ({
  className, header, listItems, id,
}) => (
  <nav id={id} className={`list-with-title ${className}`}>
    <h3 className="list-with-title-header">{header}</h3>
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
  /** The */
  className: PropTypes.string,
  /** The */
  header: PropTypes.string.isRequired,
  /** The */
  id: PropTypes.string,
  /** The */
  listItems: PropTypes.arrayOf.isRequired,
};

ListWithTitle.defaultProps = {
  className: '',
  id: '',
};

export default ListWithTitle;
