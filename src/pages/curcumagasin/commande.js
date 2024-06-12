import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { NewNavBar } from "../../components/NewNavBar";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { BasePage } from "../../components/BasePage";
import { Footer } from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import {
  Heading,
  maxWidth,
  NewButton,
  newMainColor,
  newSecondaryColor,
  smallBreakpoint,
  SmallText,
} from "../../styles/theme";

import motif from "../../images/fondleainvert.jpeg";
import {
  CommandForm,
  QuestionWrapper,
  Separator,
} from "../../components/CommandForm";

const MotifWrapper = styled.div`
  background: url(${motif});
`;

const ShopWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  box-shadow: 0px 0px 15px 4px #00000033;
  background: white;
  max-width: ${maxWidth};
  margin: 0 auto;
  padding: 0 1rem;

  > img {
    max-height: 20vh;
    justify-self: center;
  }

  @media (min-width: ${smallBreakpoint}) {
    padding: 4rem 0;
    padding-right: 2rem;
    grid-template-columns: 50% 1fr;

    > img {
      max-height: 80vh;
      max-width: 100%;
      position: sticky;
      top: 0;
    }
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Rubik", sans-serif;
`;

const Price = styled.h2`
  font-family: "Rubik Mono One", sans-serif;
  color: transparent;
  -webkit-text-stroke: 1px ${newSecondaryColor};
  text-stroke: 1px ${newSecondaryColor};
  font-style: normal;
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Answers = styled.div`
  display: grid;
  grid-template-columns: 7rem 1fr;
  gap: 1rem;

  span:first-child {
    justify-self: flex-end;
    color: ${newSecondaryColor};
  }

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const GiftCardOptions = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > li {
    color: black;
    list-style: none;

    display: grid;
    grid-template-columns: 1rem 1fr;
    gap: 1rem;

    &:before {
      content: "";
      display: block;
      height: 1rem;
      width: 1rem;
      margin-top: 5px;
      background-color: ${newSecondaryColor};
      border-radius: 38% 62% 66% 34% / 55% 42% 58% 45%;
    }

    &:nth-child(even):before {
      transform: rotate(90deg);
    }
  }
`;

const formatPrice = ({ amount, isAddon = true }) => {
  if (amount === 0) {
    return "Gratuit";
  }
  return `${isAddon ? "+" : ""}${amount}€`;
};

const curcumagasin = ({ data }) => {
  //filter data without a title
  const filteredData = data.allContentYaml.nodes.filter(
    (item) => item.isEnabled
  );

  // turn filteredData into an object using title as a key
  const formulesObject = filteredData.reduce((acc, item) => {
    acc[encodeURIComponent(item.title.toLowerCase())] = item;
    return acc;
  }, {});

  // get the item from the query parameter
  const urlParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );
  const item = urlParams.get("item") ?? filteredData[0].title;

  const selectedItem = formulesObject[encodeURIComponent(item.toLowerCase())];

  const {
    isEnabled,
    title,
    price,
    hasFdp,
    fdp,
    isEverywhere,
    description,
    hasGroceries,
    groceriesLink,
    priceWGroceries,
    hasGiftCard,
    giftCardPrice,
    hasGiftCardOptions,
    options,
    hasDelivery,
    priceDeliveryToulouse,
    priceDeliveryCloseToulouse,
    priceDeliveryMidToulouse,
    priceDeliveryFarToulouse,
    hasCalendlyLink,
    calendlyLink,
    lienPaiement,
    image,
  } = selectedItem;

  console.log({ selectedItem });

  return (
    <BasePage>
      <NewNavBar />
      <MotifWrapper>
        <ShopWrapper>
          <img src={image} alt="" />
          <FormWrapper>
            <Heading>{title}</Heading>
            <Price>
              {hasGroceries || hasGiftCardOptions ? "à partir de " : ""}
              {formatPrice({ amount: price, isAddon: false })}{" "}
              {hasFdp ? `${formatPrice({ amount: fdp })} de frais de port` : ""}
            </Price>
            <SmallText center>
              {isEverywhere
                ? "Livré partout en France"
                : "A Toulouse et région toulousaine"}
            </SmallText>
            <p>{description}</p>
            {hasGroceries ? (
              <>
                <QuestionWrapper>
                  <p>Qui fait les courses ?</p>
                  <Answers>
                    <span>
                      {formatPrice({ amount: price, isAddon: false })}&nbsp;
                      &mdash;
                    </span>
                    <span>
                      Je fais les courses moi-même (ou les futurs parents si
                      c’est un cadeau)
                      {groceriesLink ? (
                        <span style={{ color: "black" }}>
                          {" "}
                          avec la liste des courses à télécharger{" "}
                          <a href={groceriesLink} target="_blank">
                            ici
                          </a>
                        </span>
                      ) : null}
                    </span>
                  </Answers>
                  <Answers>
                    <span>
                      {formatPrice({ amount: priceWGroceries, isAddon: false })}
                      &nbsp; &mdash;
                    </span>
                    <span>Je laisse les Curcumamas s’occuper de tout</span>
                  </Answers>
                </QuestionWrapper>
                <Separator />
              </>
            ) : null}
            {hasGiftCardOptions ? (
              <>
                <QuestionWrapper>
                  <p>Les cartes cadeau disponibles sont</p>
                  <GiftCardOptions>
                    {options.map((option) => (
                      <li>{option}</li>
                    ))}
                  </GiftCardOptions>
                </QuestionWrapper>
                <Separator center />
              </>
            ) : null}
            {hasGiftCard ? (
              <>
                <QuestionWrapper>
                  <p>Si c’est un cadeau</p>
                  <Answers>
                    <span>
                      {formatPrice({ amount: giftCardPrice })}&nbsp; &mdash;
                    </span>
                    <span>Carte cadeau imprimée et envoyée par la poste</span>
                  </Answers>
                  <Answers>
                    <span>Gratuit &nbsp; &mdash;</span>
                    <span>E-carte envoyée par email</span>
                  </Answers>
                </QuestionWrapper>
                <Separator center />
              </>
            ) : null}
            {hasDelivery ? (
              <>
                <QuestionWrapper>
                  <p>Les futurs parents habitent</p>
                  <Answers>
                    <span>
                      {formatPrice({ amount: priceDeliveryToulouse })}&nbsp;
                      &mdash;
                    </span>
                    <span>A Toulouse</span>
                  </Answers>
                  <Answers>
                    <span>
                      {formatPrice({ amount: priceDeliveryCloseToulouse })}
                      &nbsp; &mdash;
                    </span>
                    <span>Dans une ville limitrophe de Toulouse</span>
                  </Answers>
                  <Answers>
                    <span>
                      {formatPrice({ amount: priceDeliveryMidToulouse })}&nbsp;
                      &mdash;
                    </span>
                    <span>Dans une ville à moins de 20km de Toulouse</span>
                  </Answers>
                  <Answers>
                    <span>
                      {formatPrice({ amount: priceDeliveryFarToulouse })}&nbsp;
                      &mdash;
                    </span>
                    <span>Dans une ville entre 20 et 40km de Toulouse</span>
                  </Answers>
                </QuestionWrapper>
                <Separator left />
              </>
            ) : null}
            {hasCalendlyLink ? (
              <>
                <NewButton href={calendlyLink} target="_blank" as="a">
                  <FontAwesomeIcon icon={faCalendar} color="white" />
                  &nbsp;réserver mon créneau
                </NewButton>
                <p>
                  <small>(dès à présent ou jusqu'à 72h à l'avance)</small>
                </p>
              </>
            ) : null}

            <CommandForm lienPaiement={lienPaiement} />
          </FormWrapper>
        </ShopWrapper>
      </MotifWrapper>
      <Footer />
    </BasePage>
  );
};

export const query = graphql`
  query FormulesQuery {
    allContentYaml {
      nodes {
        isEnabled
        title
        price
        hasFdp
        fdp
        isEverywhere
        description
        hasGroceries
        groceriesLink
        priceWGroceries
        hasGiftCard
        giftCardPrice
        hasGiftCardOptions
        options
        hasDelivery
        priceDeliveryToulouse
        priceDeliveryCloseToulouse
        priceDeliveryMidToulouse
        priceDeliveryFarToulouse
        hasCalendlyLink
        calendlyLink
        lienPaiement
        image
      }
    }
  }
`;

export default curcumagasin;
