import React from "react";
export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();

  const embedScripts = {
    "/static/lite-youtube.js": "yt",
    "/static/lite-vimeo.js": "vimeo",
  };
  headComponents.forEach((c, i) => {
    if (Object.keys(embedScripts).includes(c.props?.src)) {
      headComponents[i] = (
        <script
          defer
          key={embedScripts[c.props.src]}
          type="module"
          src={c.props.src}
        />
      );
    }
  });
  replaceHeadComponents(headComponents);
};
