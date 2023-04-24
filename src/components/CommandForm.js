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

export const CommandForm = ({ title, defaultCadeau, nbRepas, menuObject }) => {
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
      action="/succes/commandev2/"
    >
      <input type="hidden" name="form-name" value="commandev2" />
      <HiddenInput
        type="text"
        name="formule"
        value={`${title} - ${nbRepas} repas`}
      />
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
        <p>Qui s'occupe de la commande ?</p>
        <div>
          <input type="radio" name="qui" value="moi" id="moi" />
          <label htmlFor="moi">
            Vous leur composez leur carte{" "}
            <SmallText>
              (dans cette option nous vous laissons le soin de les informer du
              cadeau ou de leur faire une surprise)
            </SmallText>
          </label>
        </div>
        <div>
          <input type="radio" name="qui" value="parents" id="parents" />
          <label htmlFor="parents">Les parents choisissent</label>
        </div>

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

      <QuestionWrapper>
        <p>Option choisie</p>
        <div>
          <input type="radio" name="variante" value="vg" id="vg" />
          <label htmlFor="vg">VG</label>
        </div>
        <div>
          <input type="radio" name="variante" value="flexi" id="flexi" />
          <label htmlFor="flexi">
            Flexi{" "}
            <Tippy content="Portions de poulet mariné et cuit au four, ajoutées à un tiers des plats">
              <FontAwesomeIcon icon={faInfoCircle} />
            </Tippy>
          </label>
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

      <ChoixContainer>
        <ChoixHeader>Soupes</ChoixHeader>
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
        <ChoixHeader>boissons et collations sucrées</ChoixHeader>
        <SmallText right>
          ({remainingDessert} restante{remainingDessert > 1 ? "s" : ""})
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
          <input type="radio" name="date" value="11/05" id="1" />
          <label htmlFor="1">11 mai</label>
        </div>
        <div>
          <input type="radio" name="date" value="24/05" id="2" />
          <label htmlFor="2">24 mai</label>
        </div>
        <div>
          <input type="radio" name="date" value="7/06" id="3" />
          <label htmlFor="3">7 juin</label>
        </div>
        <div>
          <input type="radio" name="date" value="28/06" id="4" />
          <label htmlFor="4">28 juin</label>
        </div>
      </QuestionWrapper>
      <QuestionWrapper isHidden={!isCadeau}>
        <div>
          <input
            type="radio"
            name="date"
            value="ulterieurement"
            id="ulterieurement"
          />
          <label htmlFor="ulterieurement">
            Le destinataire du cadeau choisira sa date de livraison
            ultérieurement
          </label>
        </div>
      </QuestionWrapper>

      <QuestionWrapper>
        <p>Pour un cadeau de naissance sur mesure, ajoutez :</p>

        <div>
          <input type="checkbox" name="granola" value="oui" id="granola" />
          <label htmlFor="granola">Granola 245g (soit 5 portions) (+6€)</label>
        </div>
        <div>
          <input type="checkbox" name="laitdor" value="oui" id="laitdor" />
          <label htmlFor="laitdor">
            Lait d’or (5 portions a diluer dans du lait) - (4€)
          </label>
        </div>
        <div>
          <input type="checkbox" name="chai" value="oui" id="chai" />
          <label htmlFor="chai">
            Chai (5 portions a diluer dans du lait) - (4€)
          </label>
        </div>
      </QuestionWrapper>
      <QuestionWrapper>
        <p>Les curcusoins :</p>
        <div>
          <input type="checkbox" name="massage" value="oui" id="massage" />
          <label htmlFor="massage">1h15 de massage - (+75€)</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="consultation"
            value="oui"
            id="consultation"
          />
          <label htmlFor="consultation">
            La première consultation de nutrition et naturopathie de 1h30 -
            (60€)
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            name="accompagnement"
            value="oui"
            id="accompagnement"
          />
          <label htmlFor="accompagnement">
            Accompagnements pendant la grossesse et le post partum. <br /> Prix
            à voir après échange et devis personnalisé
          </label>
        </div>
      </QuestionWrapper>
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
        Contacte nous
      </NewButton>
    </Form>
  );
};
