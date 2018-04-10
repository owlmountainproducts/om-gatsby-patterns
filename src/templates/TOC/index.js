import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const TOC = ({ pathContext }) => {
  const { allComponents } = pathContext;
  return (
    <div>
      <h1>Gatsby Styleguide</h1>
      <ul>
        {allComponents.map(({ displayName, componentPath }) => (
          <li key={componentPath}>
            <Link to={componentPath}>{displayName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

TOC.propTypes = {
  pathContext: PropTypes.shape({
    allComponents: PropTypes.arrayOf(PropTypes.shape({
      displayName: PropTypes.string.isRequired,
      componentPath: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  }).isRequired,
};

export default TOC;
