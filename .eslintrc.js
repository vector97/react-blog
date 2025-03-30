module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
        "plugin:i18next/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "i18next",
    ],
    rules: {
        "react/function-component-definition": 0,
        "react/jsx-filename-extension": 0,
        "import/prefer-default-export": 0,
        "import/extensions": 0,
        "import/no-unresolved": 0,
        "react/react-in-jsx-scope": 0,
        "no-underscore-dangle": 0,
        "react/jsx-props-no-spreading": 1,
        "react/require-default-props": 1,
        "no-unused-vars": 1,
        "no-shadow": 1,
        "import/no-extraneous-dependencies": 1,
        quotes: [2, "double", { avoidEscape: true }],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        indent: [2, 4],
    },
    globals: {
        __IS_DEV__: true,
    },
};
