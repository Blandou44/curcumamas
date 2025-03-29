import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/seo';

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter, html } = post;

  return (
    <div>
      <Seo 
        title={frontmatter.meta_title ? frontmatter.meta_title : frontmatter.title} 
        description={frontmatter.meta_description}
        
      />
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        meta_title
        meta_description
      }
    }
  }
`;

export default BlogPost;