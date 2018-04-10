import React from 'react';
import PropTypes from 'prop-types';
import { Parser, ProcessNodeDefinitions } from 'html-to-react';
import ComponentPreview from '../ComponentPreview';

import '../../../../styles/main.scss';

const isValidNode = () => true;
const isCodeExample = ({ name = '' } = {}) => name === 'pre';

const parser = new Parser();
const processNodeDefinitions = new ProcessNodeDefinitions(React);
const getHtmlCode = children => children[0].children[0].data;

const ExampleNodeProcessor = ({ children }) =>
  React.createElement(ComponentPreview, { code: getHtmlCode(children) });

ExampleNodeProcessor.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const processingInstructions = [
  {
    shouldProcessNode: isCodeExample,
    processNode: ExampleNodeProcessor,
  },
  {
    shouldProcessNode: isValidNode,
    processNode: processNodeDefinitions.processDefaultNode,
  },
];

const Example = ({ html }) => {
  const htmlParser = parser.parseWithInstructions(
    html,
    isValidNode,
    processingInstructions,
  );
  const htmlArray = React.Children.toArray(htmlParser);
  return <div>{htmlArray}</div>;
};

Example.propTypes = {
  html: PropTypes.string.isRequired,
};

export default Example;
