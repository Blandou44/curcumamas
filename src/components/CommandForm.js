import React, { useEffect, useState } from "react";
import styled from "styled-components";

import grains1 from "../images/illustrations/grains1.png";
import grains2 from "../images/illustrations/grains2.png";

import { NewButton, newMainColor } from "../styles/theme";

const Form = styled.form`
  padding-right: 2rem;
`;

const Input = styled.input`
  border: 1px solid ${newMainColor};
  border-radius: 5px;
  height: 1.5rem;
`;

const ChoixHeader = styled.p`
  font-family: "Rubik Mono One", sans-serif;
  margin: 0;
`;

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

export const Separator = styled.span`
  background: url(${grains1});
  height: 4rem;
  margin: 2rem 0;
  background-size: contain;
  display: flex;
  background-repeat: no-repeat;
  background-position: right;

  ${(props) =>
    props.center &&
    `
    background-position: center;
    background-image: url(${grains2});
  `};

  ${(props) =>
    props.left &&
    `
  transform: rotate(180deg);
  `};
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    font-family: "Rubik Mono One", sans-serif;
    margin: 0;
    margin-bottom: 1rem;
    margin-top: 3rem;
  }

  > div {
    margin-bottom: 0.5rem;
  }

  ${(props) =>
    props.isHidden &&
    `
      opacity: 0;
      height: 0;
      position: absolute;
      overflow: hidden;
  `};
`;

export const CommandForm = ({ defaultCadeau, lienPaiement, title }) => {
  const [isCadeau, setIsCadeau] = useState(defaultCadeau);

  return (
    <Form
      name="commandev2"
      method="POST"
      data-netlify="true"
      action={`/succes/commandev2/${
        lienPaiement ? `?lienpaiement=${encodeURIComponent(lienPaiement)}` : ""
      }`}
    >
      <input type="hidden" name="form-name" value="commandev2" />
      <input type="hidden" name="formule" value={title} />
      <QuestionWrapper>
        <p>Est ce une curcucommande pour vous ?</p>
        <div>
          <input
            type="radio"
            name="cadeau"
            value="oui"
            id="oui"
            checked={!isCadeau}
            onChange={() => setIsCadeau(false)}
          />
          <label htmlFor="oui">Oui</label>
        </div>
        <div>
          <input
            type="radio"
            name="cadeau"
            value="non"
            id="non"
            checked={isCadeau}
            onChange={() => setIsCadeau(true)}
          />
          <label htmlFor="non">Non</label>
        </div>
      </QuestionWrapper>

      <QuestionWrapper isHidden={!isCadeau}>
        <p>Vos coordonnées</p>
        <DetailsContainer>
          <label htmlFor="nom-offrant">Nom</label>
          <Input type="text" name="nom-offrant" />
          <label htmlFor="prenom-offrant">Prénom</label>
          <Input type="text" name="prenom-offrant" />
          <label htmlFor="email-offrant">Email</label>
          <Input type="email" name="email-offrant" />
          <label htmlFor="telephone-offrant">Téléphone</label>
          <Input type="text" name="telephone-offrant" />
        </DetailsContainer>
      </QuestionWrapper>

      <Separator />

      <QuestionWrapper>
        <ChoixHeader>
          {isCadeau ? "Leurs coordonnées" : "Vos coordonnées"}
        </ChoixHeader>
        <DetailsContainer>
          <label htmlFor="nom">Nom</label>
          <Input type="text" name="nom" />
          <label htmlFor="prenom">Prénom</label>
          <Input type="text" name="prenom" />
          <label htmlFor="email">Email</label>
          <Input type="email" name="email" />
          <label htmlFor="adresse">Adresse</label>
          <Input type="text" name="adresse" />
          <label htmlFor="codepostal">Code postal</label>
          <Input type="text" name="codepostal" />
          <label htmlFor="ville">Ville</label>
          <Input type="text" name="ville" />
          <label htmlFor="telephone">Téléphone</label>
          <Input type="text" name="telephone" />
          <label htmlFor="message">Message</label>
          <Input as="textarea" name="message" />
        </DetailsContainer>
      </QuestionWrapper>

      <NewButton
        as="button"
        type="submit"
        disabled={false}
        style={{ marginTop: "2rem" }}
      >
        Passe ta commande
      </NewButton>
    </Form>
  );
};
