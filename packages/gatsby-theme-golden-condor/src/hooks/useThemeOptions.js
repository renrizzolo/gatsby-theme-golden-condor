import { useStaticQuery, graphql } from "gatsby";

function useThemeOptions(collection) {
  const query = useStaticQuery(graphql`
    query ThemeOptions {
      site {
        siteMetadata {
          collections
        }
      }
    }
  `);

  const data = JSON.parse(query.site.siteMetadata.collections);
  return collection ? data[collection] || {} : data;
}

export default useThemeOptions;
