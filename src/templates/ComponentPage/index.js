import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Example from './components/Example';
import '../../styles/main.scss';

const ComponentPage = ({ pathContext }) => {
  const {
    displayName, props, html, description,
  } = pathContext;

  return (
    <div>
      <h1>{displayName}</h1>
      <p>{description.text}</p>
      <h2>Props/Methods</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
            <th>Required</th>
          </tr>
        </thead>
        <tbody>
          {props.map(({ // eslint-disable-line react/prop-types
            name, propDescription, type, required,
}) => (
  <tr key={name}>
    <td>{name}</td>
    <td>{propDescription.text}</td>
    <td>{type.name}</td>
    <td>{String(Boolean(required))}</td>
  </tr>
          ))}
        </tbody>
      </table>
      <Example html={html} />
      <p>
        <Link to="/components/">[index]</Link>
      </p>
    </div>
  );
};

ComponentPage.propTypes = {
  pathContext: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    props: PropTypes.arrayOf(PropTypes.object).isRequired,
    html: PropTypes.string.isRequired,
    description: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ComponentPage;
