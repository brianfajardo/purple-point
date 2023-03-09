module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  trailingComma: "none",
  singleQuote: false,
  bracketSpacing: true,
  arrowParens: "always",
  endOfLine: "lf",

  plugins: [
    require.resolve("prettier-plugin-astro"),
    require("prettier-plugin-tailwindcss")
  ],
  pluginSearchDirs: false,

  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro"
      }
    }
  ]
}
