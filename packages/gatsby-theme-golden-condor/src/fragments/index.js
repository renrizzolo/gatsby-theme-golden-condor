import { graphql } from "gatsby";

export const recentPostsConfig = graphql`
  fragment recentPostsConfig on MdxFrontmatter {
    recentPosts {
      heading
      layout
      columns
      container
      showExcerpt
      showImage
      meta
    }
  }
`;
export const mdxContentFragment = graphql`
  fragment mdxContent on Mdx {
    path
    collection
    frontmatter {
      id
      title
      parent
      date(formatString: "dddd MMMM Do, YYYY")
      subTitle
      author
      tags
      category {
        name
        slug
      }
      image {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1.666, layout: FULL_WIDTH)
        }
      }
      embeddedImages {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      excerpt
      hideTOC
    }
    timeToRead
    tableOfContents
    body
    parent {
      ... on File {
        sourceInstanceName
      }
    }
  }
`;

export const mdxLinkFragment = graphql`
  fragment mdxLink on Mdx {
    slug
    path
    collection

    frontmatter {
      id
      title
      parent
    }
    parent {
      ... on File {
        sourceInstanceName
      }
    }
  }
`;

export const postPreviewFragment = graphql`
  fragment postPreview on Mdx {
    slug
    path
    collection
    frontmatter {
      date(formatString: "MMM Do, YYYY")
      title
      category {
        name
        slug
      }
      tags
      excerpt
      image {
        childImageSharp {
          gatsbyImageData(
            width: 400
            height: 225
            aspectRatio: 1.666
            layout: FULL_WIDTH
          )
        }
      }
    }
    parent {
      ... on File {
        sourceInstanceName
      }
    }
  }
`;
