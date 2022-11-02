module.exports = {
  siteMetadata: {
    title: `Curcumamas`,
    siteUrl: `https://curcumamas.com`,
    titleTemplate: "%s · une cuisine ronde, simple et engagée.",
    description:
      "Curcumamas c'est le traiteur pour les familles et mamans en post-partum sur Toulouse.",
    keywords:
      "Curcumamas, Traiteur, Famille, Mamans, Post-partum, Toulouse, Cuisine, Bio, Ayurvédique, Tribu, Cadeau, Naissance, Livraisons",
    image: "/logo.png",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `tracedSVG`,
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://curcumamas.com`,
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
        fonts: [
          `Permanent Marker`,
          `Montserrat\:100,400,700`,
          "Rubik Mono One",
          "Rubik:300,500,700,800",
        ],
        display: "swap",
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content`,
      },
    },
  ],
};
