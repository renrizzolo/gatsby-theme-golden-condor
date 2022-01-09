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
      logoDefault: file(relativePath: { glob: "site-logo--header.*" }) {
        childImageSharp {
          gatsbyImageData(height: 38, placeholder: BLURRED)
        }
      }
      logoDark: file(relativePath: { glob: "site-logo--header-dark.*" }) {
        childImageSharp {
          gatsbyImageData(height: 38, placeholder: BLURRED)
        }
      }
    }
  `);

  const { logoDefault, logoDark, site } = data;
  const logoData = logoDefault?.childImageSharp?.gatsbyImageData;
  const logoDarkData = logoDark?.childImageSharp?.gatsbyImageData;
  return (
    <Logo
      logo={logoData}
      logoDark={logoDarkData}
      fallback={site.siteMetadata.title}
      {...props}
    />
  );
};

export default LogoHeader;
