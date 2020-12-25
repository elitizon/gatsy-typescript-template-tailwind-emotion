import { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Gatsby typescript template",
    description: "A typescript template created with 😍 by Elitizon Ltd"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true // defaults to false
      }
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        rule: {
          include: /\.svg$/ // // See below to configure properly
        }
      }
    },
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")]
      }
    }
  ]
}

export default config
