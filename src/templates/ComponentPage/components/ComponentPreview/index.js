import React from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import * as components from '../../../../../.cache/components';

import './prism-theme.css';

const editorStyles = {
  backgroundColor: '#f2f2f2',
  boxSizing: 'border-box',
  padding: '16px',
};

const ComponentPreview = ({ code }) => (
  <LiveProvider scope={components} code={code} mountStylesheet={false}>
    <LiveEditor style={editorStyles} />
    <LiveError />
    <LivePreview />
  </LiveProvider>
);

ComponentPreview.propTypes = {
  code: PropTypes.string.isRequired,
};

export default ComponentPreview;
