import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { NewNavBar } from "../../../components/NewNavBar";
import { MenuDisplay } from "../../../components/MenuDisplay";
import { BasePage } from "../../../components/BasePage";
import { Footer } from "../../../components/Footer";

import motif from "../../../images/fondleainvert.jpeg";

const MotifWrapper = styled.div`
  background: url(${motif});
`;

const curcumagasin = ({ data }) => {
  const enabledEntrees = [];

  for (let i = 1; i < 11; i++) {
    if (data.allContentYaml.edges[0].node["isEnabled" + i]) {
      enabledEntrees.push(i);
    }
  }

  return (
    <BasePage>
      <NewNavBar />
      <MotifWrapper>
        <MenuDisplay
          data={data.allContentYaml.edges[0].node}
          heading="Soupes"
          enabledItems={enabledEntrees}
        />
      </MotifWrapper>
      <Footer />
    </BasePage>
  );
};

export const query = graphql`
  query EntreesQuery {
    allContentYaml(filter: { menuType: { eq: "entrees" } }) {
      edges {
        node {
          description1
          description2
          description3
          description4
          description5
          description6
          description7
          description8
          description9
          description10
          image1
          image2
          image3
          image4
          image5
          image6
          image7
          image8
          image9
          image10
          infoNut1
          infoNut2
          infoNut3
          infoNut4
          infoNut5
          infoNut6
          infoNut7
          infoNut8
          infoNut9
          infoNut10
          nom1
          nom3
          nom2
          nom4
          nom5
          nom6
          nom7
          nom8
          nom9
          nom10
          isEnabled1
          isEnabled2
          isEnabled3
          isEnabled4
          isEnabled5
          isEnabled6
          isEnabled7
          isEnabled8
          isEnabled9
          isEnabled10
        }
      }
    }
  }
`;

export default curcumagasin;
