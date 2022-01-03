export const getPath = (entry) => {
  const p = entry.childMdx ? entry.childMdx : entry;
  if (!p.parent?.sourceInstanceName || !p.slug) return null;
  const trailingSlash = p.slug.endsWith("/") ? "" : "/";
  return `/${p.parent.sourceInstanceName}/${p.slug}${trailingSlash}`;
};

export const isBrowser = typeof window !== "undefined";
