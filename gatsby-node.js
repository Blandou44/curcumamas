const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  
  const result = await graphql(`
    query {
        allMarkdownRemark(filter: { frontmatter: { slug: { ne: null } } }) {
          nodes {
            id
            frontmatter {
              slug
            }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const blogPostTemplate = path.resolve(`./src/components/BlogPost.js`);

    result.data.allMarkdownRemark.nodes.forEach((node) => {
      createPage({
        path: `/blog/${node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          id: node.id,
        },
      });
    });
};