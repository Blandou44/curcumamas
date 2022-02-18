module.exports = {
  siteMetadata: {
    title: `Curcumamas`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `tracedSVG`,
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -40,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Leckerli One`, `Montserrat\:100,400,700`],
        display: "swap",
      },
    },
  ],
};
