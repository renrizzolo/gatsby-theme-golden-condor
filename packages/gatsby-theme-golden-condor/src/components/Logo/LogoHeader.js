import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Logo from "@components/Logo";

const LogoHeader = (props) => {
  const data = useStaticQuery(graphql`
    query LogoFooter {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { glob: "site-logo--header.*" }) {
        childImageSharp {
          gatsbyImageData(height: 38, placeholder: BLURRED)
        }
      }
    }
  `);

  const { file, site } = data;
  const logo = file?.childImageSharp?.gatsbyImageData;
  return <Logo logo={logo} fallback={site.siteMetadata.title} {...props} />;
};

export default LogoHeader;
