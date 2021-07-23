import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location, data }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero data={data.hero.edges} />
      <About data={data.about.edges} />
      <Jobs data={data.jobs.edges} />
      <Featured data={data.featured.edges} />
      <Projects data={data.projects.edges} />
      <Contact data={data.contact.edges} />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
            buttonText
            hireLink
          }
          html
        }
      }
    }
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
            skills
          }
          html
        }
      }
    }
    jobs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/jobs/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            company
            range
            url
          }
          html
        }
      }
    }
    featured: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/featured/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            cover {
              childImageSharp {
                gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
            tech
            github
            external,
            ios,
            android,
            image {
              childImageSharp {
                gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
          }
          html
        }
      }
    }
    projects: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { showInProjects: { ne: false } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            tech
            github
            external,
            ios,
            android,
            image {
              childImageSharp {
                gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
          }
          html
        }
      }
    }
    contact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
      edges {
        node {
          frontmatter {
            title
            buttonText
          }
          html
        }
      }
    }
  }
`;
