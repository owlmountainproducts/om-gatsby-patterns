import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import slugify from 'slugify';

/**
 * ATOM: The `<EntryMeta>` atom displays author and date information for Articles.
 *
 */
const EntryMeta = ({ author, lastUpdated, includeLink }) => (
  <div className="entry-meta">
    {includeLink && (
      <p className="byline author vcard">
        {new Date(lastUpdated).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}{' '}
        | by{' '}
        <Link to={`/author/${slugify(author, { lower: true })}/`}>
          {author}
        </Link>
      </p>
    )}
    {!includeLink && (
      <p className="byline author vcard">
        {new Date(lastUpdated).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}{' '}
        | by {author}
      </p>
    )}
  </div>
);

EntryMeta.propTypes = {
  /** The */
  includeLink: PropTypes.bool.isRequired,
  /** Author name. */
  author: PropTypes.string.isRequired,
  /** Date string. */
  lastUpdated: PropTypes.string.isRequired,
};

export default EntryMeta;
