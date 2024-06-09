import React, { useState } from "react";
import styled from "styled-components";
import { NewNavBar } from "../components/NewNavBar";
import { Portrait } from "../components/Portrait";
import { BasePage } from "../components/BasePage";
import { Footer } from "../components/Footer";
import { applySidePadding, maxWidth } from "../styles/theme";

import motif from "../images/fondleainvert.jpeg";

const MotifWrapper = styled.div`
  background: url(${motif});
`;

const IndexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  background: white;
  box-shadow: 0px 0px 15px 4px #00000033;
  max-width: ${maxWidth};
  margin: 0 auto;
  padding: 4rem 0;
`;

const ServiceWrapper = styled.div`
  ${applySidePadding("1rem")}
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  > div {
    flex-shrink: 1;
  }

  > .gatsby-image-wrapper {
    width: 300px;
    flex-shrink: 0;
    height: fit-content;
    border-radius: 50%;
  }

  p,
  h1 {
    text-align: left;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    p,
    h1 {
      text-align: right;
    }
  }
`;

const NosServices = () => {
  return (
    <BasePage>
      <NewNavBar />
      <MotifWrapper>
        <IndexWrapper>
          <ServiceWrapper>
            <Portrait />
          </ServiceWrapper>
        </IndexWrapper>
      </MotifWrapper>
      <Footer />
    </BasePage>
  );
};

export default NosServices;
