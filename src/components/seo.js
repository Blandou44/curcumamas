import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql, withPrefix } from "gatsby";

const SEO = ({
  title: customTitle,
  description: customDescription,
  image: customImage,
  article,
  keywords,
  noindex = false,
  frontmatter, // Add frontmatter prop
}) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    defaultDescription,
    titleTemplate,
    siteUrl,
    defaultImage,
    defaultKeywords,
  } = site.siteMetadata;

  const title = frontmatter?.meta_title || customTitle;
  const description = frontmatter?.meta_description || customDescription;
  const image = customImage || defaultImage;

  console.log("frontmatter", frontmatter);
  console.log("title", title);
  console.log("description", description);
  console.log("image", image);


  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    keywords: defaultKeywords || keywords,
  };

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{
        lang: "fr",
      }}
    >
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#013cf2" />
      <meta name="msapplication-TileColor" content="#2d89ef" />
      <meta name="theme-color" content="#013cf2" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      {seo.keywords && !frontmatter && <meta name="keywords" content={seo.keywords} />}
      {noindex ? <meta name="robots" content="noindex,nofollow" /> : null}
    </Helmet>
  );
};
export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage: image
        defaultKeywords: keywords
      }
    }
  }
`;
