module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react",
  ],
  "env": {
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "react",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-unused-expressions": ["error", { "allowTaggedTemplates": true }],
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to", "link" ]
    }]
  },
  "globals": {
    "graphql": false,
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  },
  "settings": {
    // These packages are provided 'magically' by Gatsby, might be solved in V2
    // https://github.com/gatsbyjs/gatsby/issues/1990
    'import/core-modules': ['react', 'react-helmet', 'prop-types', 'bluebird'],
  },
}
