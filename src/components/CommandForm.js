import React, { useEffect, useState } from "react";
import styled from "styled-components";

import grains1 from "../images/illustrations/grains1.png";
import grains2 from "../images/illustrations/grains2.png";

import {
  maxWidth,
  sidePadding,
  NewButton,
  Heading,
  SmallText,
  newMainColor,
} from "../styles/theme";
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

export const CommandForm = ({ defaultCadeau, nbRepas }) => {
  const [nbEntree1, setNbEntree1] = useState(0);
  const [nbEntree2, setNbEntree2] = useState(0);
  const [nbEntree3, setNbEntree3] = useState(0);
  const [nbEntree4, setNbEntree4] = useState(0);
  const [remainingEntree, setRemainingEntree] = useState(0);

  useEffect(() => {
    setRemainingEntree(
      nbRepas - (nbEntree1 + nbEntree2 + nbEntree3 + nbEntree4)
    );
  }, [nbEntree1, nbEntree2, nbEntree3, nbEntree4]);

  const [nbPlat1, setNbPlat1] = useState(0);
  const [nbPlat2, setNbPlat2] = useState(0);
  const [nbPlat3, setNbPlat3] = useState(0);
  const [nbPlat4, setNbPlat4] = useState(0);
  const [remainingPlat, setRemainingPlat] = useState(0);

  useEffect(() => {
    setRemainingPlat(nbRepas - (nbPlat1 + nbPlat2 + nbPlat3 + nbPlat4));
  }, [nbPlat1, nbPlat2, nbPlat3, nbPlat4]);

  const [nbDessert1, setNbDessert1] = useState(0);
  const [nbDessert2, setNbDessert2] = useState(0);
  const [nbDessert3, setNbDessert3] = useState(0);
  const [nbDessert4, setNbDessert4] = useState(0);
  const [remainingDessert, setRemainingDessert] = useState(0);

  useEffect(() => {
    setRemainingDessert(
      nbRepas - (nbDessert1 + nbDessert2 + nbDessert3 + nbDessert4)
    );
  }, [nbDessert1, nbDessert2, nbDessert3, nbDessert4]);

  return (
    <Form
      name="commandev2"
      method="POST"
      data-netlify="true"
      action="/succes/commande/"
    >
      <input type="hidden" name="commandev2-form" value="commandev2" />
      <p>Est ce une curcucommande pour vous ?</p>
      <input type="radio" name="cadeau" value="oui" />
      <label for="oui">Oui</label>
      <input type="radio" name="cadeau" value="non" />
      <label for="non">Non</label>

      <p>Qui s'occupe de la commande ?</p>
      <input type="radio" name="qui" value="moi" />
      <label for="moi">
        Vous leur composez leur carte (dans cette option nous vous laissons le
        soin de les informer du cadeau ou de leur faire une surprise)
      </label>
      <input type="radio" name="qui" value="elleux" />
      <label for="elleux">Iels choisissent</label>

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

      <p>Option choisie</p>
      <input type="radio" name="variante" value="vg" />
      <label for="vg">VG</label>
      <input type="radio" name="variante" value="flexi" />
      <label for="flexi">Flexi</label>

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
        <label>Soupe Thaï</label>
        <NumberInput
          value={nbEntree1}
          setValue={setNbEntree1}
          remaining={remainingEntree}
        />
        <label>houmous de betterave</label>
        <NumberInput
          value={nbEntree2}
          setValue={setNbEntree2}
          remaining={remainingEntree}
        />
        <label>bouillon de légumes et gingembre</label>
        <NumberInput
          value={nbEntree3}
          setValue={setNbEntree3}
          remaining={remainingEntree}
        />
        <label>velouté carotte coco citronnelle</label>
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
          Curry vert aux légumes de saison, pois chiches et riz basmati (non
          pimenté)- (sg, sl)
        </label>
        <NumberInput
          value={nbPlat1}
          setValue={setNbPlat1}
          remaining={remainingPlat}
        />
        <label>
          Parmentier et sa farce végétale aux lentilles, noisettes, capres et
          champignons- (sg)
        </label>
        <NumberInput
          value={nbPlat2}
          setValue={setNbPlat2}
          remaining={remainingPlat}
        />
        <label>
          Dahl de lentilles corail, épices et légumes de saison- riz
          basmati-(sg, sl)
        </label>
        <NumberInput
          value={nbPlat3}
          setValue={setNbPlat3}
          remaining={remainingPlat}
        />
        <label>Tajine amandes, abricots et légume de saison-Quinoa</label>
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
          Cookies roses, à la betterave, graine de chia purée de cajou et
          chocolat noir
        </label>
        <NumberInput
          value={nbDessert1}
          setValue={setNbDessert1}
          remaining={remainingDessert}
        />
        <label>
          croustillant amande coco, compotée de fruits sur un porridge de chia
        </label>
        <NumberInput
          value={nbDessert2}
          setValue={setNbDessert2}
          remaining={remainingDessert}
        />
        <label>Carotte cake</label>
        <NumberInput
          value={nbDessert3}
          setValue={setNbDessert3}
          remaining={remainingDessert}
        />
        <label>Brownie chocolat noir et haricots rouges</label>
        <NumberInput
          value={nbDessert4}
          setValue={setNbDessert4}
          remaining={remainingDessert}
        />
      </ChoixContainer>

      <p>à quelle date souhaitez-vous être livré&middot;e&middot;s ?</p>
      <input type="radio" name="date" value="1" />
      <label for="1">3 novembre</label>
      <input type="radio" name="date" value="2" />
      <label for="2">10 novembre</label>
      <input type="radio" name="date" value="3" />
      <label for="3">17 novembre</label>

      <p>Livraison chez vous ou pick up à la curcumaison ?</p>
      <input type="radio" name="livraison" value="oui" />
      <label for="oui">Chez moi (+5.99€)</label>
      <input type="radio" name="livraison" value="non" />
      <label for="non">Curcumaison</label>
      <p>Vos coordonées</p>
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

      <button as="button" type="submit" disabled={false}>
        Contacte nous
      </button>
    </Form>
  );
};
