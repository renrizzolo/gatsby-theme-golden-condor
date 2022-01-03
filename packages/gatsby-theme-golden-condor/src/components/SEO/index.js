import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { getSrc } from "gatsby-plugin-image";

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        twitterHandle
        defaultImage: image
      }
    }
  }
`;

function SEO({ title, description, image, pathname, article }) {
  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            titleTemplate,
            defaultDescription,
            siteUrl,
            twitterHandle,
            defaultImage,
          },
        },
      }) => {
        const img = getSrc(image);
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          image: img,
          url: `${siteUrl}${pathname ? pathname : ""}`,
        };
        const docImage =
          seo.image || defaultImage
            ? `${siteUrl}${seo.image ? seo.image : defaultImage}`
            : undefined;

        return (
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description} />
            {docImage && <meta name="image" content={docImage} />}
            {seo.url && <meta property="og:url" content={seo.url} />}
            {article && <meta property="og:type" content="article" />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {docImage && <meta property="og:image" content={docImage} />}

            <meta name="twitter:card" content="summary_large_image" />
            {twitterHandle && (
              <meta name="twitter:site" content={twitterHandle} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {docImage && <meta name="twitter:image" content={docImage} />}
            {seo.url && <link rel="canonical" href={seo.url} />}
          </Helmet>
        );
      }}
    />
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object,
  pathname: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
};

export default SEO;
