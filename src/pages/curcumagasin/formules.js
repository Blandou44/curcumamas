import React, { useState } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import { NewNavBar } from "../../components/NewNavBar";
import { NewHero } from "../../components/NewHero";
import { WhachaWaitingFor } from "../../components/WhachaWaitingFor";
import { Curcumarmite } from "../../components/Curcumarmite";
import { HowDoesItWork } from "../../components/HowDoesItWork";
import { Portrait } from "../../components/Portrait";
import { Engagement } from "../../components/Engagement";
import { BasePage } from "../../components/BasePage";
import { Footer } from "../../components/Footer";
import { colorBaie, Heading, maxWidth } from "../../styles/theme";

import motif from "../../images/motif.png";

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

const Formules = ({ data }) => {
  //filter data without a title
  const filteredData = data.allContentYaml.nodes.filter((item) => item.title);

  //create an array of data where isCadeau is false
  const formules = filteredData.filter((item) => !item.isCadeau);

  //create an array of data where isCadeau is true
  const cadeaux = filteredData.filter((item) => item.isCadeau);

  return (
    <BasePage>
      <NewNavBar />
      <MotifWrapper>
        <IndexWrapper>
          <div>
            <Heading>La Curcumarmite</Heading>
            <FormulesWrapper>
              <Formule to="/curcumagasin/menu/entrees">
                <StaticImage
                  src="../../images/carousel/21.jpg"
                  layout="constrained"
                  width={300}
                />
                <p>Les soupes</p>
              </Formule>
              <Formule to="/curcumagasin/menu/plats">
                <StaticImage
                  src="../../images/carousel/23.jpg"
                  layout="constrained"
                  width={300}
                />
                <p>Les plats</p>
              </Formule>
              <Formule to="/curcumagasin/menu/desserts">
                <StaticImage
                  src="../../images/carousel/24.jpg"
                  layout="constrained"
                  width={300}
                />
                <p>Les collations sucrées</p>
              </Formule>
            </FormulesWrapper>
          </div>
          <div>
            <Heading>Les Curcuformules</Heading>
            <FormulesWrapper>
              {formules.map((item) => (
                <Formule to={`/curcumagasin/commande?item=${item.title}`}>
                  <img src={item.image} width={300} />
                  <p>
                    {item.title} <br />à partir de {item.priceVG}€
                  </p>
                </Formule>
              ))}
            </FormulesWrapper>
          </div>
          <div>
            <Heading>les Curcucartes cadeau</Heading>
            <FormulesWrapper>
              {cadeaux.map((item) => (
                <Formule to={`/curcumagasin/commande?item=${item.title}`}>
                  <img src={item.image} width={300} />
                  <p>
                    {item.title} <br />à partir de {item.priceVG}€
                  </p>
                </Formule>
              ))}
            </FormulesWrapper>
          </div>
        </IndexWrapper>
      </MotifWrapper>
      <Footer />
    </BasePage>
  );
};

export const query = graphql`
  query OtherFormulesQuery {
    allContentYaml {
      nodes {
        title
        priceVG
        priceFlexi
        nbRepas
        image
        isCadeau
      }
    }
  }
`;

export default Formules;
