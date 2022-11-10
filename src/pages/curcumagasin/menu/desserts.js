import React, { useState } from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { NewNavBar } from "../../../components/NewNavBar";
import { MenuDisplay } from "../../../components/MenuDisplay";
import { BasePage } from "../../../components/BasePage";
import { Footer } from "../../../components/Footer";

import motif from "../../../images/motif.png";

const MotifWrapper = styled.div`
  background: url(${motif});
`;

const curcumagasin = ({ data }) => {
  // find node where menuType is "desserts"
  const filteredData = data.allContentYaml.nodes.find(
    (item) => item.menuType === "desserts"
  );

  return (
    <BasePage noindex>
      <NewNavBar />
      <MotifWrapper>
        <MenuDisplay data={filteredData} heading="Desserts" />
      </MotifWrapper>
      <Footer />
    </BasePage>
  );
};

export const query = graphql`
  query DessertsQuery {
    allContentYaml {
      nodes {
        nom1
        nom2
        nom3
        nom4
        infoNut1
        infoNut3
        infoNut2
        infoNut4
        description1
        description2
        description3
        description4
        image1
        image2
        image3
        image4
      }
    }
  }
`;

export default curcumagasin;
