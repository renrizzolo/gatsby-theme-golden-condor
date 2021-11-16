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
      file(relativePath: { glob: "site-logo--footer.*" }) {
        childImageSharp {
          gatsbyImageData(height: 38, placeholder: BLURRED)
        }
      }
    }
  `);

  const { file, site } = data;
  const logo = file?.childImageSharp?.gatsbyImageData;

  return (
    <Logo
      logo={logo}
      fallback={site.siteMetadata.title}
      color={"light"}
      {...props}
    />
  );
};

export default LogoFooter;
