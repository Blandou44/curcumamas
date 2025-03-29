import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { Heading } from '../components/NewHero';
import Seo from '../components/seo';
import { theme } from '../styles/theme';

const BlogPageContainer = styled.div`
  padding: 20px;
  max-width: 960px;
  margin: 0 auto;
`;
const newButton = styled(Link)`
  background: ${theme.colors.secondary};
  color: ${theme.colors.white};
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background-color: ${theme.colors.primary};
  }
`;
const ArticlesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ArticleContainer = styled.div`
  border: 1px solid ${theme.colors.lightGrey};
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  flex: 1 1 300px;
  min-width: 200px;

  p {
    margin-bottom: 0;
    color: ${theme.colors.darkGrey};
  }
`;

const ArticleContent = styled.div`
`;
//color: ${theme.colors.primary};
const TitleContainer = styled.h2`
    color: #333;
    margin-bottom: 0.5rem;
    &:hover {
        text-decoration: underline;
    }
`;

const DateContainer = styled.div`
  font-size: 0.9rem;
  color: ${theme.colors.mediumGrey};
  margin-bottom: 0.5rem;
`;

const BlogPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <BlogPageContainer>
      <Seo title="Blog" />
      <div> <Heading>Blog</Heading>
        <ArticlesContainer>
          {edges.map((edge) => {
            const { frontmatter, excerpt, fields } = edge.node;
            return (
              <ArticleContainer key={fields.slug}>
                <Seo
                  title={frontmatter.meta_title || frontmatter.title}
                  description={frontmatter.meta_description || excerpt}
                />
                <ArticleContent>
                  <newButton to={fields.slug}>
                    <TitleContainer>{frontmatter.title}</TitleContainer>
                  </newButton>
                  <DateContainer>{frontmatter.date}</DateContainer>
                  <p>{excerpt}</p>
                </ArticleContent>
              </ArticleContainer>
            );
          })}
        </ArticlesContainer>
      </div>
    </BlogPageContainer>
  );
};

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/blog/"}}
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            meta_title
            meta_description
          }
          excerpt(pruneLength: 200)
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BlogPage;
