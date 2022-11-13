import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { NewNavBar } from "../../../components/NewNavBar";
import { MenuDisplay } from "../../../components/MenuDisplay";
import { BasePage } from "../../../components/BasePage";
import { Footer } from "../../../components/Footer";

import motif from "../../../images/motif.png";

const MotifWrapper = styled.div`
  background: url(${motif});
`;

const curcumagasin = ({ data }) => {
  return (
    <BasePage>
      <NewNavBar />
      <MotifWrapper>
        <MenuDisplay
          data={data.allContentYaml.edges[0].node}
          heading="Desserts"
        />
      </MotifWrapper>
      <Footer />
    </BasePage>
  );
};

export const query = graphql`
  query DessertsQuery {
    allContentYaml(filter: { menuType: { eq: "desserts" } }) {
      edges {
        node {
          description1
          description2
          description3
          description4
          image1
          image2
          image3
          image4
          infoNut1
          infoNut2
          infoNut3
          infoNut4
          nom1
          nom3
          nom2
          nom4
        }
      }
    }
  }
`;

export default curcumagasin;
