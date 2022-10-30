import React from "react";
import styled from "styled-components";

import blandoux from "../images/blandoux.jpg";
import background from "../images/illustrations/grains2.png";
import { maxWidth, sidePadding, NewButton, Heading } from "../styles/theme";

const ChoixContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3rem;
  grid-gap: 1rem;
`;

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

export const CommandForm = ({ defaultCadeau, nbRepas }) => {
  return (
    <form
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
        <input type="text" name="nom-offrant" />
        <label for="prenom-offrant">Prénom</label>
        <input type="text" name="prenom-offrant" />
        <label for="email-offrant">Email</label>
        <input type="email" name="email-offrant" />
        <label for="telephone-offrant">Téléphone</label>
        <input type="text" name="telephone-offrant" />
      </DetailsContainer>

      <p>Option choisie</p>
      <input type="radio" name="variante" value="vg" />
      <label for="vg">VG</label>
      <input type="radio" name="variante" value="flexi" />
      <label for="flexi">Flexi</label>

      <p>Entrées</p>
      <ChoixContainer>
        <label for="entree1">Soupe Thaï</label>
        <input type="number" max={nbRepas} min={0} name="entree1" />
        <label for="entree2">houmous de betterave</label>
        <input type="number" max={nbRepas} min={0} name="entree2" />
        <label for="entree3">bouillon de légumes et gingembre</label>
        <input type="number" max={nbRepas} min={0} name="entree3" />
        <label for="entree4">velouté carotte coco citronnelle</label>
        <input type="number" max={nbRepas} min={0} name="entree4" />
      </ChoixContainer>
      <p>Plats</p>
      <ChoixContainer>
        <label for="plat1">
          Curry vert aux légumes de saison, pois chiches et riz basmati (non
          pimenté)- (sg, sl)
        </label>
        <input type="number" max={nbRepas} min={0} name="plat1" />
        <label for="plat2">
          Parmentier et sa farce végétale aux lentilles, noisettes, capres et
          champignons- (sg)
        </label>
        <input type="number" max={nbRepas} min={0} name="plat2" />
        <label for="plat3">
          Dahl de lentilles corail, épices et légumes de saison- riz
          basmati-(sg, sl)
        </label>
        <input type="number" max={nbRepas} min={0} name="plat3" />
        <label for="plat4">
          Tajine amandes, abricots et légume de saison-Quinoa
        </label>
        <input type="number" max={nbRepas} min={0} name="plat4" />
      </ChoixContainer>
      <p>desserts</p>
      <ChoixContainer>
        <label for="entree1">
          Cookies roses, à la betterave, graine de chia purée de cajou et
          chocolat noir
        </label>
        <input type="number" max={nbRepas} min={0} name="dessert1" />
        <label for="dessert2">
          croustillant amande coco, compotée de fruits sur un porridge de chia
        </label>
        <input type="number" max={nbRepas} min={0} name="dessert2" />
        <label for="dessert3">Carotte cake</label>
        <input type="number" max={nbRepas} min={0} name="dessert3" />
        <label for="dessert4">Brownie chocolat noir et haricots rouges</label>
        <input type="number" max={nbRepas} min={0} name="dessert4" />
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
        <input type="text" name="nom" />
        <label for="prenom">Prénom</label>
        <input type="text" name="prenom" />
        <label for="email">Email</label>
        <input type="email" name="email" />
        <label for="adresse">Adresse</label>
        <input type="text" name="adresse" />
        <label for="codepostal">Code postal</label>
        <input type="text" name="codepostal" />
        <label for="ville">Ville</label>
        <input type="text" name="ville" />
        <label for="telephone">Téléphone</label>
        <input type="text" name="telephone" />
        <label for="message">Message</label>
        <textarea name="message" />
      </DetailsContainer>

      <button as="button" type="submit" disabled={false}>
        Contacte nous
      </button>
    </form>
  );
};
