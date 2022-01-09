import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Logo from "@components/Logo";

const LogoFooter = (props) => {
  const data = useStaticQuery(graphql`
    query LogoHeader {
      site {
        siteMetadata {
          title
        }
      }
      logoDefault: file(relativePath: { glob: "site-logo--footer.*" }) {
        childImageSharp {
          gatsbyImageData(height: 38, placeholder: BLURRED)
        }
      }
      logoDark: file(relativePath: { glob: "site-logo--footer-dark.*" }) {
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
      color={"gray.1"}
      {...props}
      nav={false}
    />
  );
};

export default LogoFooter;
