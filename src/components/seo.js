import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({
  title,
  description,
  image,
  article,
  keywords,
  noindex = false,
}) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    defaultKeywords,
  } = site.siteMetadata;
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
      script={[
        {
          type: "text/javascript",
          innerHTML: `(function (w,d,s,o,r,js,fjs) {
    w[r]=w[r]||function() {(w[r].q = w[r].q || []).push(arguments)}
    w[r]('app', 'SCOWkxnkP2');
    if(d.getElementById(o)) return;
    js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
    js.id = o; js.src = 'https://embed.trustmary.com/embed.js';
    js.async = 1; fjs.parentNode.insertBefore(js, fjs);
  }(window, document, 'script', 'trustmary-embed', 'tmary'));`,
        },
      ]}
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
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      {noindex ? <meta name="robots" content="noindex,nofollow" /> : null}

      <script defer src="https://medama.stream2guerre.lol/script.js"></script>
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
