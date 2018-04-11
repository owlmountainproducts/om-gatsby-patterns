import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

/**
 * MOLECULE: The `<Pagination>` creates next and previous pagination buttons wiht page number below.
 *
 */
const Pagination = ({
  first,
  last,
  previousPageUrl,
  nextPageUrl,
  index,
  pageCount,
}) => (
  <div className="pagination-wrapper">
    {!first && (
      <Link to={previousPageUrl} className="secondary-button pagination-button">
        Newer Posts
      </Link>
    )}
    {!last && (
      <Link to={nextPageUrl} className="secondary-button pagination-button">
        Older Posts
      </Link>
    )}
    <p>
      {index} of {pageCount}
    </p>
  </div>
);

Pagination.propTypes = {
  /** The  */
  first: PropTypes.bool.isRequired,
  /** The  */
  last: PropTypes.bool.isRequired,
  /** The  */
  previousPageUrl: PropTypes.string.isRequired,
  /** The  */
  nextPageUrl: PropTypes.string.isRequired,
  /** The  */
  index: PropTypes.number.isRequired,
  /** The  */
  pageCount: PropTypes.number.isRequired,
};

export default Pagination;
