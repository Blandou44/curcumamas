import React, { useState } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import { NewNavBar } from "../components/NewNavBar";
import { NewHero } from "../components/NewHero";
import { WhachaWaitingFor } from "../components/WhachaWaitingFor";
import { Curcumarmite } from "../components/Curcumarmite";
import { HowDoesItWork } from "../components/HowDoesItWork";
import { Portrait } from "../components/Portrait";
import { Engagement } from "../components/Engagement";
import { BasePage } from "../components/BasePage";
import { Footer } from "../components/Footer";
import { colorBaie, Heading, maxWidth } from "../styles/theme";

import motif from "../images/motif.png";

const MotifWrapper = styled.div`
  background: url(${motif});
`;

const IndexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  background: white;
  max-width: ${maxWidth};
  margin: 0 auto;
  padding: 4rem 0;
`;

const FormulesWrapper = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 5rem;
  row-gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const Formule = styled(Link)`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  font-family: "Rubik", sans-serif;
  font-size: 1.5rem;

  &:visited {
    color: ${colorBaie};
  }
`;

const NouvelIndexSecretDeOuf = () => {
  return (
    <BasePage noindex>
      <NewNavBar />
      <MotifWrapper>
        <IndexWrapper>
          <div>
            <Heading>La Curcumarmite</Heading>
            <FormulesWrapper>
              <Formule to="/curcumagasin?item=entree">
                <StaticImage
                  src="../images/carousel/21.jpg"
                  layout="constrained"
                  width={300}
                />
                <p>Les entrées</p>
              </Formule>
              <Formule to="/curcumagasin?item=plat">
                <StaticImage
                  src="../images/carousel/23.jpg"
                  layout="constrained"
                  width={300}
                />
                <p>Les plats</p>
              </Formule>
              <Formule to="/curcumagasin?item=dessert">
                <StaticImage
                  src="../images/carousel/24.jpg"
                  layout="constrained"
                  width={300}
                />
                <p>Les desserts et collations</p>
              </Formule>
            </FormulesWrapper>
          </div>
          <div>
            <Heading>Les Curcuformules</Heading>
            <FormulesWrapper>
              <Formule to="/curcumagasin?item=fringale">
                <StaticImage
                  src="../images/carousel/21.jpg"
                  layout="constrained"
                  width={300}
                />
                <p>
                  La fringale
                  <br />2 repas
                  <br />
                  54€
                </p>
              </Formule>
              <Formule to="/curcumagasin?item=curcufamille">
                <StaticImage
                  src="../images/carousel/23.jpg"
                  layout="constrained"
                  width={300}
                />
                <p>
                  La Curcufamille
                  <br />6 repas
                  <br />
                  150€
                </p>
              </Formule>
            </FormulesWrapper>
          </div>
          <div>
            <Heading>les Curcucartes cadeau</Heading>
            <FormulesWrapper>
              <Formule to="/curcumagasin?item=curcutribu">
                <StaticImage
                  src="../images/carousel/21.jpg"
                  layout="constrained"
                  width={300}
                />
                <p>
                  Curcutribu
                  <br />
                  10 repas
                  <br />
                  250€
                </p>
              </Formule>
              <Formule to="/curcumagasin?item=curcuvillage">
                <StaticImage
                  src="../images/carousel/23.jpg"
                  layout="constrained"
                  width={300}
                />
                <p>
                  Curcuvillage
                  <br />
                  14 repas
                </p>
              </Formule>
              <Formule to="/curcumagasin?item=curcumoisdor">
                <StaticImage
                  src="../images/carousel/24.jpg"
                  layout="constrained"
                  width={300}
                />
                <p>
                  Curcumoisd'or
                  <br />2 repas
                  <br />
                  54€
                </p>
              </Formule>
            </FormulesWrapper>
          </div>
        </IndexWrapper>
      </MotifWrapper>
      <Footer />
    </BasePage>
  );
};

export default NouvelIndexSecretDeOuf;
