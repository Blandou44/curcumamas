import * as React from "react";
import { GlobalStyle } from "../styles/theme";
import SEO from "./seo";

export const BasePage = ({
  title,
  description,
  image,
  article,
  children,
  noindex,
}) => {
  return (
    <main>
      <SEO
        title={title}
        description={description}
        image={image}
        article={article}
        noindex={noindex}
      />
      <script src="https://widget.trustmary.com/TzsxEKNAi"></script>
      <GlobalStyle />

      {children}
    </main>
  );
};
