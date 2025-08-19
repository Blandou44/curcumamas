import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { NewNavBar } from "../../components/NewNavBar";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { BasePage } from "../../components/BasePage";
import { Footer } from "../../components/Footer";
import Mapsmodal from "../../components/Mapsmodal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ReactCarousel } from "react-responsive-carousel";

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

const ImageWrapper = styled.div`
  flex-direction: column;
  gap: 2rem;
  display: none;

  > img {
    max-width: 100%;
  }
  
  > img:not(:first-child) {
    display: none;
  }

  @media (min-width: ${smallBreakpoint}) {\
    display: flex;
    > img:not(:first-child) {
      display: block;
    }
  }
`;

const CarouselWrapper = styled.div`
  @media (min-width: ${smallBreakpoint}) {
    display: none;
  }
`;

const FormWrapper = styled.div`
  max-width: calc(100vw - 2rem);
  display: flex;
  flex-direction: column;
  font-family: "Rubik", sans-serif;
  padding-bottom: 2rem;
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

const Price2 = styled.h2`
  font-family: "Rubik Mono One", sans-serif;
  color: transparent;
  -webkit-text-stroke: 1px ${newMainColor};
  text-stroke: 1px ${newMainColor};
  font-style: normal;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
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
    acc[encodeURIComponent(item.id)] = item;
    return acc;
  }, {});

  // get the item from the query parameter
  const urlParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );
  const item = urlParams.get("item") ?? filteredData[0].id;

  const selectedItem = formulesObject[encodeURIComponent(item.toLowerCase())];

  const {
    isEnabled,
    title,
    price,
    hasFdp,
    fdp,
    isEverywhere,
    hasCreditImpots,
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
    lienPaiement,
    image,
    imageAdd1,
    imageAdd2,
  } = selectedItem;

  return (
    <BasePage>
      <NewNavBar />
      <MotifWrapper>
        <ShopWrapper>
          <CarouselWrapper>
            <ReactCarousel
              emulateTouch={true}
              showArrows={true}
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              infiniteLoop={true}
              interval={8000}
            >
              <div>
                <img src={image} alt="" />
              </div>
              {imageAdd1 ? (
                <div>
                  <img src={imageAdd1} alt="" />{" "}
                </div>
              ) : null}
              {imageAdd2 ? (
                <div>
                  <img src={imageAdd2} alt="" />{" "}
                </div>
              ) : null}
            </ReactCarousel>
          </CarouselWrapper>
          <ImageWrapper>
            <img src={image} alt="" />
            {imageAdd1 ? <img src={imageAdd1} alt="" /> : null}
            {imageAdd2 ? <img src={imageAdd2} alt="" /> : null}
          </ImageWrapper>

          <FormWrapper>
            <Heading>{title}</Heading>
            <Price>
              {hasGroceries || hasGiftCardOptions ? "à partir de " : ""}
              {formatPrice({ amount: price, isAddon: false })}
              {hasCreditImpots ? "*" : ""}{" "}
              {hasFdp ? `${formatPrice({ amount: fdp })} de frais de port` : ""}
            </Price>
            <SmallText center>
              {isEverywhere ? (
                "Livré partout en France"
              ) : (
                <span>
                  A Toulouse et région toulousaine <Mapsmodal />
                </span>
              )}
            </SmallText>
            {hasCreditImpots ? (
              <>
                <Price2>
                  {hasGroceries || hasGiftCardOptions ? "*Ou " : ""}
                  {formatPrice({ amount: price / 2, isAddon: false })}{" "}
                </Price2>
                <SmallText center>
                  en bénéficiant du crédit d'impôt{" "}
                  <Link to="/credit-impots">En savoir plus</Link>
                </SmallText>
              </>
            ) : null}
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

            <CommandForm lienPaiement={lienPaiement} title={title} />
          </FormWrapper>
        </ShopWrapper>
        <div data-trustmary-widget="TzsxEKNAi"></div>
      </MotifWrapper>
      <Footer />
    </BasePage>
  );
};

export const query = graphql`
  query FormulesQuery {
    allContentYaml {
      nodes {
        id
        isEnabled
        title
        price
        hasFdp
        hasCreditImpots
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
        lienPaiement
        image
        imageAdd1
        imageAdd2
      }
    }
  }
`;

export default curcumagasin;
