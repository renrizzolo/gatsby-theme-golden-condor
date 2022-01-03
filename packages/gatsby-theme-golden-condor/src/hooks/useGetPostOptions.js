import React from "react";

function useGetPostOptions(options = {}) {
  const getProp = React.useCallback(
    (property, fallback) => ({
      [property]:
        options[property] === null
          ? fallback
            ? fallback
            : undefined
          : options[property],
    }),
    [options]
  );

  return {
    ...getProp("meta"),
    ...getProp("showExcerpt"),
    ...getProp("showImage"),
    ...getProp("layout", "card"),
    columns: options.columns && JSON.parse(options.columns),
  };
}

export default useGetPostOptions;
