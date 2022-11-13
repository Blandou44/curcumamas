import React, { useState } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { NewNavBar } from "../components/NewNavBar";
import { NewHero } from "../components/NewHero";
import { WhachaWaitingFor } from "../components/WhachaWaitingFor";
import { Curcumarmite } from "../components/Curcumarmite";
import { HowDoesItWork } from "../components/HowDoesItWork";
import { Portrait } from "../components/Portrait";
import { Engagement } from "../components/Engagement";
import { BasePage } from "../components/BasePage";
import { Footer } from "../components/Footer";

const IndexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Index = () => {
  return (
    <BasePage>
      <NewNavBar />

      <IndexWrapper>
        <NewHero />
        <WhachaWaitingFor />
        <Curcumarmite />
        <HowDoesItWork />
        <Portrait />
        <Engagement />
      </IndexWrapper>

      <Footer />
    </BasePage>
  );
};

export default Index;
