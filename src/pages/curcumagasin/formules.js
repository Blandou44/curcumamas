import React, { useState } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import { NewNavBar } from "../../components/NewNavBar";
import { BasePage } from "../../components/BasePage";
import { Footer } from "../../components/Footer";
import { colorBaie, Heading, maxWidth } from "../../styles/theme";

import motif from "../../images/fondleainvert.jpeg";

const MotifWrapper = styled.div`
  background: url(${motif});
`;

const SubHeading = styled.h2`
  font-size: 1rem;
  text-align: center;
  font-weight: 500;
  font-style: italic;
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

    p {
      color: ${colorBaie};
    }
  }
`;

const Formules = ({ data }) => {
  //filter data without a title
  const formules = data.allContentYaml.nodes
    .filter((item) => item.isEnabled)
    .sort((a, b) => a.sortId - b.sortId);

  console.log(formules);

  return (
    <BasePage>
      <NewNavBar />
      <MotifWrapper>
        <IndexWrapper>
          <div>
            <Heading>La Curcumarmite</Heading>
            <FormulesWrapper>
              <Formule to="/curcumagasin/menu/soupes">
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
                <p>Les boissons et collations sucrées</p>
              </Formule>
            </FormulesWrapper>
          </div>
          <div>
            <Heading>Les Curcuformules</Heading>
            <SubHeading>
              Toutes les formules peuvent s'offrir en carte cadeau
            </SubHeading>
            <FormulesWrapper>
              {formules.map((item) => (
                <Formule to={`/curcumagasin/commande?item=${item.title}`}>
                  <img src={item.image} width={300} />
                  <p>
                    {item.title} <br />
                    {item.hasGroceries || item.hasGiftCardOptions
                      ? "à partir de "
                      : ""}
                    {item.price}€
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
        sortId
        isEnabled
        title
        price
        fdp
        description
        hasGroceries
        priceWGroceries
        hasGiftCard
        giftCardPrice
        hasGiftCardOptions
        hasDelivery
        priceDeliveryToulouse
        priceDeliveryCloseToulouse
        priceDeliveryMidToulouse
        priceDeliveryFarToulouse
        lienPaiement
        image
      }
    }
  }
`;

export default Formules;
