import React from 'react';
import PropTypes from 'prop-types';

/**
 * MOLECULE: The `<EntryMeta>` is for displaying author and date information.
 *
 */
const EntryMeta = ({ author, lastUpdated }) => (
  <p className="byline author vcard">
    {author} |{' '}
    {new Date(lastUpdated).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}
  </p>
);

EntryMeta.propTypes = {
  /** Author name. */
  author: PropTypes.string.isRequired,
  /** Date string. */
  lastUpdated: PropTypes.string.isRequired,
};

export default EntryMeta;
