# Gatsby Theme Golden Condor workspace

## Layout

```text
.
├── README.md
├── packages
│   ├──gatsby-theme-golden-condor
│   │   ├── README.md
│   │   ├── gatsby-config.js
│   │   ├── index.js
│   │   └── package.json
├── example
│   ├── README.md
│   ├── gatsby-config.js
│   ├── package.json
│   └── src
├── docs
│   ├── README.md
│   ├── gatsby-config.js
│   ├── package.json
│   └── src
├── package.json
└── yarn.lock
```

### `packages/gatsby-theme-golden-condor`

This directory is the theme package itself.

### `docs`

This is the docs site for the theme, which uses the 'stock' theme.
You can run the docs site with:

```shell
yarn docs:dev
```

### `example`

This is an example usage of the theme. This site is customized with component shadowing, syntax highlighting themes and theme-ui theme config.

- `example/`
  - `gatsby-config.js`: Specifies which theme to use and any other one-off config a site might need.
  - `src/`: Source code such as one-off pages or components that might live in
    a user's site.

You can run the example with:

```shell
yarn dev
```
