const path = require('path');
const fs = require('fs');
const appRootDir = require('app-root-dir').get();

const componentPageTemplate = path.resolve('src/templates/ComponentPage/index.js');
const tableOfContentsTemplate = path.resolve('src/templates/TOC/index.js');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    resolve(Promise.all([
      graphql(`
          {
            allComponentMetadata {
              edges {
                node {
                  id
                  displayName
                  description {
                    text
                  }
                  props {
                    name
                    type {
                      value
                      raw
                      name
                    }
                    propDescription: description {
                      text
                    }
                    required
                  }
                }
              }
            }
          }
        `),
      graphql(`
          {
            allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/README.md/" } }
            ) {
              edges {
                node {
                  fileAbsolutePath
                  html
                }
              }
            }
          }
        `),
    ])
      .then(([docgenResult, markdownResult]) => {
        const errors = docgenResult.errors || markdownResult.errors;
        if (errors) {
          reject(new Error(errors));
          return;
        }

        const allComponents = docgenResult.data.allComponentMetadata.edges.map((edge) => {
          const markdownFile = markdownResult.data.allMarkdownRemark.edges.find(file =>
            file.node.fileAbsolutePath.includes(edge.node.displayName));
          return Object.assign({}, edge.node, {
            componentPath: `/components/${edge.node.displayName.toLowerCase()}/`,
            html: markdownFile.node.html,
          });
        });

        const exportFileContents = `${allComponents
          .reduce((accumulator, { id, displayName }) => {
            const absolutePath = id.replace(/ absPath of.*$/, '');
            accumulator.push(`export { default as ${displayName} } from "${absolutePath}"`);
            return accumulator;
          }, [])
          .join('\n')}\n`;

        fs.writeFileSync(
          path.join(appRootDir, '.cache/components.js'),
          exportFileContents,
        );

        allComponents.forEach((data) => {
          const { componentPath } = data;
          const context = Object.assign({}, data, {
            allComponents,
          });
          createPage({
            path: componentPath,
            component: componentPageTemplate,
            context,
          });
        });

        createPage({
          path: '/components/',
          component: tableOfContentsTemplate,
          context: {
            allComponents,
          },
        });
      })
      .catch((err) => {
        throw new Error(err);
      }));
  });
};
