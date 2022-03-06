import * as React from "react";
import { GlobalStyle } from "../styles/theme";
import SEO from "./seo";

export const BasePage = ({ title, description, image, article, children }) => {
  return (
    <main>
      <SEO
        title={title}
        description={description}
        image={image}
        article={article}
      />
      <GlobalStyle />
      {children}
    </main>
  );
};
