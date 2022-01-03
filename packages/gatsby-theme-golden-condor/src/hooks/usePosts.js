import PropTypes from "prop-types";

function usePosts({
  posts,
  category,
  tags,
  collectionName,
  collectionsIn,
  collectionsNotIn,
}) {
  const filteredPosts = posts.filter((p) => {
    const post = p.childMdx ?? p;

    let collectionMatch = true;

    if (!post.slug) return false;
    if (!post.path) return false;

    if (Array.isArray(collectionsIn)) {
      collectionMatch = collectionsIn.includes(post.parent?.sourceInstanceName);
    } else if (Array.isArray(collectionsNotIn)) {
      collectionMatch = !collectionsNotIn.includes(
        post.parent?.sourceInstanceName
      );
    } else if (collectionName) {
      collectionMatch = post.parent?.sourceInstanceName === collectionName;
    }
    if (collectionMatch) {
      if (!category && !tags) return true;
      if (
        (category && category === post.frontmatter?.category?.slug) ||
        tags?.some((tag) => tags.includes(tag))
      ) {
        return true;
      }
    }
  });
  return filteredPosts;
}

usePosts.propTypes = {
  posts: PropTypes.object.isRequired,
  category: PropTypes.string,
  collectionName: PropTypes.string,
  collectionsIn: PropTypes.array,
  collectionsNotIn: PropTypes.array,
  tags: PropTypes.array,
  heading: PropTypes.string,
  wrapperProps: PropTypes.object,
  headingProps: PropTypes.object,
};

export default usePosts;
