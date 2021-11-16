import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const PostPlaceholder = ({ alt = "", ...rest }) => {
  const data = useStaticQuery(graphql`
    query Placeholder {
      file(relativePath: { eq: "placeholder.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 75, placeholder: BLURRED)
        }
      }
    }
  `);

  const { file } = data;
  const image = file?.childImageSharp?.gatsbyImageData;
  return image ? (
    <GatsbyImage image={image} alt={alt} {...rest} />
  ) : (
    <StaticImage
      src="../../images/placeholder.png"
      alt={alt}
      layout="fullWidth"
    />
  );
};

export default PostPlaceholder;
