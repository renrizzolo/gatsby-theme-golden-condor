module.exports = [
  `gatsby-remark-unwrap-images`,
  {
    resolve: "gatsby-remark-embed-video-lite",
    options: {
      width: 700,
      ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
      // height: 400, // Optional: Overrides optional.ratio
      related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
      noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
      urlOverrides: [
        {
          id: "youtube",
          embedURL: (videoId) =>
            `https://www.youtube-nocookie.com/embed/${videoId}`,
        },
      ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
    },
  },

  {
    resolve: `gatsby-remark-images`,
    options: {
      maxWidth: 1024,
      linkImagesToOriginal: false,
      quality: 60,
      showCaptions: true,
    },
  },
  {
    resolve: `gatsby-remark-responsive-iframe`,
    options: {
      wrapperStyle: `margin-bottom: 1.0725rem`,
    },
  },
  {
    resolve: "gatsby-remark-external-links",
    options: {
      target: "_blank",
      rel: "noreferrer",
    },
  },
  {
    resolve: `gatsby-remark-autolink-headers`,
    options: {
      offsetY: -100,
      icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
      className: `heading-anchor`,
      maintainCase: false,
      removeAccents: true,
      isIconAfterHeader: true,
      elements: [`h2`, `h3`],
    },
  },
];
