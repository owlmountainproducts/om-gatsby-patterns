import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

/**
 * ATOM: The `<ListWithTitle>` creates __.
 *
 */
const ListWithTitle = ({ className, header, id }) => (
  <div id={id} className={`list-with-title ${className}`}>
    <h3 className="list-with-title-header">{header}</h3>
    <ul className="list-with-title-ul">
      <li>
        <Link to="/">List Item 01</Link>
      </li>
      <li>
        <Link to="/">List Item 02</Link>
      </li>
      <li>
        <Link to="/">List Item 03</Link>
      </li>
      <li>
        <Link to="/">List Item 04</Link>
      </li>
    </ul>
  </div>
);

ListWithTitle.propTypes = {
  /** The */
  className: PropTypes.string,
  /** The */
  header: PropTypes.string.isRequired,
  /** The */
  id: PropTypes.string,
};

ListWithTitle.defaultProps = {
  className: '',
  id: '',
};

export default ListWithTitle;
