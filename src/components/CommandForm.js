import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import grains1 from "../images/illustrations/grains1.png";
import grains2 from "../images/illustrations/grains2.png";

import { NewButton, SmallText, newMainColor } from "../styles/theme";
import { NumberInput } from "./NumberInput";

const Form = styled.form`
  padding-right: 2rem;
`;

const Input = styled.input`
  border: 1px solid ${newMainColor};
  border-radius: 5px;
  height: 1.5rem;
`;

const ChoixContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 1rem;
  align-items: center;

  svg {
    margin-left: 0.5rem;
    cursor: help;
  }
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

const HiddenInput = styled.input`
  height: 0;
  width: 0;
  position: absolute;
  opacity: 0;
`;

const Separator = styled.span`
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

const QuestionWrapper = styled.div`
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

export const CommandForm = ({ defaultCadeau, nbRepas, menuObject }) => {
  const [isCadeau, setIsCadeau] = useState(defaultCadeau);

  const [nbEntree1, setNbEntree1] = useState(0);
  const [nbEntree2, setNbEntree2] = useState(0);
  const [nbEntree3, setNbEntree3] = useState(0);
  const [nbEntree4, setNbEntree4] = useState(0);
  const [remainingEntree, setRemainingEntree] = useState(0);

  useEffect(() => {
    setRemainingEntree(
      nbRepas - (nbEntree1 + nbEntree2 + nbEntree3 + nbEntree4)
    );
  }, [nbRepas, nbEntree1, nbEntree2, nbEntree3, nbEntree4]);

  const [nbPlat1, setNbPlat1] = useState(0);
  const [nbPlat2, setNbPlat2] = useState(0);
  const [nbPlat3, setNbPlat3] = useState(0);
  const [nbPlat4, setNbPlat4] = useState(0);
  const [remainingPlat, setRemainingPlat] = useState(0);

  useEffect(() => {
    setRemainingPlat(nbRepas - (nbPlat1 + nbPlat2 + nbPlat3 + nbPlat4));
  }, [nbRepas, nbPlat1, nbPlat2, nbPlat3, nbPlat4]);

  const [nbDessert1, setNbDessert1] = useState(0);
  const [nbDessert2, setNbDessert2] = useState(0);
  const [nbDessert3, setNbDessert3] = useState(0);
  const [nbDessert4, setNbDessert4] = useState(0);
  const [remainingDessert, setRemainingDessert] = useState(0);

  useEffect(() => {
    setRemainingDessert(
      nbRepas - (nbDessert1 + nbDessert2 + nbDessert3 + nbDessert4)
    );
  }, [nbRepas, nbDessert1, nbDessert2, nbDessert3, nbDessert4]);

  return (
    <Form
      name="commandev2"
      method="POST"
      data-netlify="true"
      action="/succes/commande/"
    >
      <input type="hidden" name="commandev2-form" value="commandev2" />
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
          <label for="oui">Oui</label>
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
          <label for="non">Non</label>
        </div>
      </QuestionWrapper>

      <QuestionWrapper isHidden={!isCadeau}>
        <p>Qui s'occupe de la commande ?</p>
        <div>
          <input type="radio" name="qui" value="moi" id="moi" />
          <label for="moi">
            Vous leur composez leur carte{" "}
            <SmallText>
              (dans cette option nous vous laissons le soin de les informer du
              cadeau ou de leur faire une surprise)
            </SmallText>
          </label>
        </div>
        <div>
          <input type="radio" name="qui" value="elleux" id="elleux" />
          <label for="elleux">Iels choisissent</label>
        </div>

        <p>Vos coordonées</p>
        <DetailsContainer>
          <label for="nom-offrant">Nom</label>
          <Input type="text" name="nom-offrant" />
          <label for="prenom-offrant">Prénom</label>
          <Input type="text" name="prenom-offrant" />
          <label for="email-offrant">Email</label>
          <Input type="email" name="email-offrant" />
          <label for="telephone-offrant">Téléphone</label>
          <Input type="text" name="telephone-offrant" />
        </DetailsContainer>
      </QuestionWrapper>

      <QuestionWrapper>
        <p>Option choisie</p>
        <div>
          <input type="radio" name="variante" value="vg" id="vg" />
          <label for="vg">VG</label>
        </div>
        <div>
          <input type="radio" name="variante" value="flexi" id="flexi" />
          <label for="flexi">Flexi</label>
        </div>
      </QuestionWrapper>

      <Separator />

      <HiddenInput
        type="number"
        max={nbRepas}
        min={0}
        name="entree1"
        value={nbEntree1}
      />
      <HiddenInput
        type="number"
        max={nbRepas}
        min={0}
        name="entree2"
        value={nbEntree2}
      />
      <HiddenInput
        type="number"
        max={nbRepas}
        min={0}
        name="entree3"
        value={nbEntree3}
      />
      <HiddenInput
        type="number"
        max={nbRepas}
        min={0}
        name="entree4"
        value={nbEntree4}
      />

      <ChoixContainer>
        <ChoixHeader>Entrées</ChoixHeader>
        <SmallText right>
          ({remainingEntree} restante{remainingEntree > 1 ? "s" : ""})
        </SmallText>

        <label>
          {menuObject.entrees.nom1}
          <Tippy content={menuObject.entrees.infoNut1}>
            <FontAwesomeIcon icon={faInfoCircle} />
          </Tippy>
        </label>

        <NumberInput
          value={nbEntree1}
          setValue={setNbEntree1}
          remaining={remainingEntree}
        />
        <label>
          {menuObject.entrees.nom2}
          <Tippy content={menuObject.entrees.infoNut2}>
            <FontAwesomeIcon icon={faInfoCircle} />
          </Tippy>
        </label>
        <NumberInput
          value={nbEntree2}
          setValue={setNbEntree2}
          remaining={remainingEntree}
        />
        <label>
          {menuObject.entrees.nom3}
          <Tippy content={menuObject.entrees.infoNut3}>
            <FontAwesomeIcon icon={faInfoCircle} />
          </Tippy>
        </label>
        <NumberInput
          value={nbEntree3}
          setValue={setNbEntree3}
          remaining={remainingEntree}
        />
        <label>
          {menuObject.entrees.nom4}
          <Tippy content={menuObject.entrees.infoNut4}>
            <FontAwesomeIcon icon={faInfoCircle} />
          </Tippy>
        </label>
        <NumberInput
          value={nbEntree4}
          setValue={setNbEntree4}
          remaining={remainingEntree}
        />
      </ChoixContainer>

      <Separator center />

      <HiddenInput
        type="number"
        max={nbRepas}
        min={0}
        name="plat1"
        value={nbPlat1}
      />
      <HiddenInput
        type="number"
        max={nbRepas}
        min={0}
        name="plat2"
        value={nbPlat2}
      />
      <HiddenInput
        type="number"
        max={nbRepas}
        min={0}
        name="plat3"
        value={nbPlat3}
      />
      <HiddenInput
        type="number"
        max={nbRepas}
        min={0}
        name="plat4"
        value={nbPlat4}
      />

      <ChoixContainer>
        <ChoixHeader>Plats</ChoixHeader>
        <SmallText right>
          ({remainingPlat} restant{remainingPlat > 1 ? "s" : ""})
        </SmallText>
        <label>
          {menuObject.plats.nom1}
          <Tippy content={menuObject.plats.infoNut1}>
            <FontAwesomeIcon icon={faInfoCircle} />
          </Tippy>
        </label>
        <NumberInput
          value={nbPlat1}
          setValue={setNbPlat1}
          remaining={remainingPlat}
        />
        <label>
          {menuObject.plats.nom2}
          <Tippy content={menuObject.plats.infoNut2}>
            <FontAwesomeIcon icon={faInfoCircle} />
          </Tippy>
        </label>
        <NumberInput
          value={nbPlat2}
          setValue={setNbPlat2}
          remaining={remainingPlat}
        />
        <label>
          {menuObject.plats.nom3}
          <Tippy content={menuObject.plats.infoNut3}>
            <FontAwesomeIcon icon={faInfoCircle} />
          </Tippy>
        </label>
        <NumberInput
          value={nbPlat3}
          setValue={setNbPlat3}
          remaining={remainingPlat}
        />
        <label>
          {menuObject.plats.nom4}
          <Tippy content={menuObject.plats.infoNut4}>
            <FontAwesomeIcon icon={faInfoCircle} />
          </Tippy>
        </label>
        <NumberInput
          value={nbPlat4}
          setValue={setNbPlat4}
          remaining={remainingPlat}
        />
      </ChoixContainer>

      <Separator left />

      <HiddenInput
        type="number"
        max={nbRepas}
        min={0}
        name="dessert1"
        value={nbDessert1}
      />
      <HiddenInput
        type="number"
        max={nbRepas}
        min={0}
        name="dessert2"
        value={nbDessert2}
      />
      <HiddenInput
        type="number"
        max={nbRepas}
        min={0}
        name="dessert3"
        value={nbDessert3}
      />
      <HiddenInput
        type="number"
        max={nbRepas}
        min={0}
        name="dessert4"
        value={nbDessert4}
      />

      <ChoixContainer>
        <ChoixHeader>desserts</ChoixHeader>
        <SmallText right>
          ({remainingDessert} restant{remainingDessert > 1 ? "s" : ""})
        </SmallText>
        <label>
          {menuObject.desserts.nom1}
          <Tippy content={menuObject.desserts.infoNut1}>
            <FontAwesomeIcon icon={faInfoCircle} />
          </Tippy>
        </label>
        <NumberInput
          value={nbDessert1}
          setValue={setNbDessert1}
          remaining={remainingDessert}
        />
        <label>
          {menuObject.desserts.nom2}
          <Tippy content={menuObject.desserts.infoNut2}>
            <FontAwesomeIcon icon={faInfoCircle} />
          </Tippy>
        </label>
        <NumberInput
          value={nbDessert2}
          setValue={setNbDessert2}
          remaining={remainingDessert}
        />
        <label>
          {menuObject.desserts.nom3}
          <Tippy content={menuObject.desserts.infoNut3}>
            <FontAwesomeIcon icon={faInfoCircle} />
          </Tippy>
        </label>
        <NumberInput
          value={nbDessert3}
          setValue={setNbDessert3}
          remaining={remainingDessert}
        />
        <label>
          {menuObject.desserts.nom4}
          <Tippy content={menuObject.desserts.infoNut4}>
            <FontAwesomeIcon icon={faInfoCircle} />
          </Tippy>
        </label>
        <NumberInput
          value={nbDessert4}
          setValue={setNbDessert4}
          remaining={remainingDessert}
        />
      </ChoixContainer>

      <QuestionWrapper>
        <p>à quelle date souhaitez-vous être livré&middot;e&middot;s ?</p>
        <div>
          <input type="radio" name="date" value="1" id="1" />
          <label for="1">3 novembre</label>
        </div>
        <div>
          <input type="radio" name="date" value="2" id="2" />
          <label for="2">10 novembre</label>
        </div>
        <div>
          <input type="radio" name="date" value="3" id="3" />
          <label for="3">17 novembre</label>
        </div>
      </QuestionWrapper>

      <QuestionWrapper>
        <p>Livraison chez vous ou pick up à la curcumaison ?</p>
        <div>
          <input type="radio" name="livraison" value="oui" id="livraisonoui" />
          <label for="livraisonoui">Chez moi (+5.99€)</label>
        </div>
        <div>
          <input type="radio" name="livraison" value="non" id="livraisonnon" />
          <label for="livraisonnon">Curcumaison</label>
        </div>
      </QuestionWrapper>
      <QuestionWrapper>
        <ChoixHeader>
          {isCadeau ? "Leurs coordonnées" : "Vos coordonnées"}
        </ChoixHeader>
        <DetailsContainer>
          <label for="nom">Nom</label>
          <Input type="text" name="nom" />
          <label for="prenom">Prénom</label>
          <Input type="text" name="prenom" />
          <label for="email">Email</label>
          <Input type="email" name="email" />
          <label for="adresse">Adresse</label>
          <Input type="text" name="adresse" />
          <label for="codepostal">Code postal</label>
          <Input type="text" name="codepostal" />
          <label for="ville">Ville</label>
          <Input type="text" name="ville" />
          <label for="telephone">Téléphone</label>
          <Input type="text" name="telephone" />
          <label for="message">Message</label>
          <Input as="textarea" name="message" />
        </DetailsContainer>
      </QuestionWrapper>

      <NewButton as="button" type="submit" disabled={false}>
        Contacte nous
      </NewButton>
    </Form>
  );
};