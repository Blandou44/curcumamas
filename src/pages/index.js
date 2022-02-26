import React, { useState } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Navbar } from "../components/Navbar";
import {
  sidePadding,
  mainColor,
  secondaryColor,
  sidePaddingSmall,
  GlobalStyle,
  Button,
} from "../styles/theme";
import { Footer } from "../components/Footer";
import { RadioGroup } from "../components/RadioGroup";
import { CheckBox } from "../components/CheckBox";
import { Menus } from "../components/Menus";

export const Header = styled.h2`
  font-size: 32px;
  color: #253269;
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
`;

const SubHeader = styled.h3`
  font-family: "Leckerli One", cursive;
  margin: 0 0 20px 0;
  text-align: center;
  font-weight: 500;
  padding: 0;
  color: ${secondaryColor};
  font-size: 40px;
`;

export const Section = styled.div`
  background: #f7f7f7;

  opacity: ${(props) => (props.isHidden ? 0 : 1)};
  max-height: ${(props) => (props.isHidden ? "0px" : "99999px")};
  padding: ${(props) => (props.isHidden ? 0 : `2rem ${sidePadding}`)};
  overflow: hidden;

  &:nth-child(even) {
    background: #fff;
  }

  @media (max-width: 900px) {
    padding: ${(props) => (props.isHidden ? 0 : `2rem ${sidePaddingSmall}`)};
  }
`;

const FormulesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid ${mainColor};
  background-color: #f7f7f7;
  padding: 1rem;

  > div.gatsby-image-wrapper {
    max-height: 250px;
  }

  > h4 {
    font-size: 17px;
    color: ${mainColor};
    text-align: center;
  }

  > a {
    align-self: center;
    margin-top: auto;
  }
`;

const Price = styled.p`
  text-align: center;
`;

const PriceTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  > span {
    border: solid 1px #dee2e6;
    padding: 0.5rem;
  }
`;

const PetitPlusContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
`;

const PetitsPlus = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 250px 1fr 1fr;

  > h4 {
    font-weight: 700;
    font-size: 18px;
    background-color: ${secondaryColor};
    color: #fff;
    padding: 0.5rem;
    margin: 0;
    border-radius: 5px;
    justify-self: center;
    align-self: flex-start;
  }

  > p {
    margin: 0;
  }
`;

const PlusContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
`;

const Tribu = styled(PetitsPlus)`
  grid-template-rows: 150px 1fr 1fr;

  > h4 {
    text-align: center;

    > small {
      font-weight: 100;
    }
  }
`;

const EngagementContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  grid-template-areas: "title image" "description image";

  > div.gatsby-image-wrapper {
    grid-area: image;
  }

  > Header {
    grid-area: title;
    justify-self: center;
    align-self: flex-end;
  }

  > p {
    grid-area: description;
  }
`;

const TextInput = styled.input`
  background: transparent;
  border-radius: 5px;
  padding: 0.5rem;
  border: solid 1px white;
  color: white;
  padding: 1rem;
  transition: background 0.4s;
  font-size: 1rem;
  font-family: "Montserrat";

  &:focus {
    outline: none;
    background-color: ${mainColor};
  }

  &::placeholder {
    color: #ffffff99;
  }
`;

const FormContainer = styled.form`
  display: grid;
  justify-items: center;
  border-radius: 26% 74% 78% 22% / 23% 46% 54% 77%;
  background-color: ${secondaryColor};
  padding: 2rem 2rem 2rem 12rem;
  margin: 0 auto;
  max-width: 850px;
  justify-items: flex-start;

  @media (max-width: 900px) {
    border-radius: 0;
    width: calc(100% + 2rem);
    margin-left: -1rem;
    padding: 2rem;
  }
`;

const DetailsContainer = styled.div`
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
  max-height: ${(props) => (props.isHidden ? "0px" : "300px")};
  overflow: hidden;
  transition: all 0.4s;
  display: grid;
  row-gap: 1rem;

  > p {
    color: white;
    font-size: 1.2rem;
  }
`;

const Select = styled.select`
  background: transparent;
  border-radius: 5px;
  padding: 0.5rem;
  border: solid 1px white;
  color: white;
  padding: 1rem;
  transition: background 0.4s;
  font-size: 1rem;
  font-family: "Montserrat";

  &:focus {
    outline: none;
    background-color: ${mainColor};
  }
`;

// markup
const IndexPage = () => {
  const [formule, setFormule] = useState("");
  const [duree, setDuree] = useState("");
  const [variante, setVariante] = useState("");
  const [date, setDate] = useState("");
  const [cadeau, setCadeau] = useState(false);
  const [isSubscribingToNewsLetter, setIsSubscribingToNewsLetter] =
    useState(false);
  const [sujet, setSujet] = useState("général");

  const [isContact, setIsContact] = useState(true);

  const isCadeau = cadeau || formule === "carte cadeau";

  const onFormuleChange = (e) => {
    setFormule(e.target.value);
  };
  const onDureeChange = (e) => {
    setDuree(e.target.value);
  };
  const onVarianteChange = (e) => {
    setVariante(e.target.value);
  };
  const onDateChange = (e) => {
    setDate(e.target.value);
  };

  const onCadeauChange = (e) => {
    setCadeau(e.target.checked);
  };
  const onNewsLetterChange = (e) => {
    setIsSubscribingToNewsLetter(e.target.checked);
  };

  const handleContactClick = () => {
    setIsContact(true);
  };

  const onSujetChange = (e) => {
    setSujet(e.target.value);
  };

  return (
    <main>
      <GlobalStyle />
      <title>Curcumamas : une cuisine ronde, simple et engagée.</title>
      <Navbar onContactClick={handleContactClick} />
      <Section>
        <Header>Traiteur du post-partum* à Toulouse</Header>
        <p>
          * Le post partum est par définition d’une durée de 40 jours après la
          naissance. Chez les curcumamas on pense que c’est à vous de ressentir
          la durée, nous prendrons soin de vous tant que vous le souhaitez.
        </p>
      </Section>
      <Section id="formules">
        <Header>QUE MIJOTENT LES CURCUMAMAS ?</Header>
        <SubHeader>Formules & Cartes Cadeaux</SubHeader>
        <ul>
          <li>
            <p>
              Vous pouvez commander un minimum de 3 menus parmi les 4 menus à la
              carte. Les formules et cartes cadeaux comprennent 1 repas par jour
            </p>
          </li>
          <li>
            <p>Un repas comprend une entrée - un plat - un encas</p>
          </li>
          <li>
            <p>
              Deux options sont possibles : végé ou flexi (Pour l'option flexi :
              2 repas sur trois comprennent de la viande) Livraisons sur
              Toulouse et sa périphérie proche tous les mardis (fourchette
              horaire précisée la veille). Nous livrons plus loin en
              Haute-Garonne en appliquant un supplément de livraison calculé
              avec vous.
            </p>
          </li>
          <li>
            <p>
              Fin de prise des commandes : vendredi 14h (de la semaine précédant
              votre livraison). Toute autre demande sera, bien sûr, discutée
              avec vous pour trouver ensemble la solution qui vous convient
            </p>
          </li>
          <li>
            <p>
              Tout est bio, à 80% local et ayurvédique, nos plats sont à
              consommer sous 3 jours après la livraison
            </p>
          </li>
        </ul>
        <FormulesContainer>
          <Card>
            <StaticImage
              src="../images/formules/3jours.png"
              alt=""
              imgStyle={{ objectFit: "contain" }}
            />
            <h4>Formule 3 jours</h4>
            <Price>46€ VG - 49€ Flexi</Price>
            <p>
              Offre toi 3 jours pendant lesquels un bon repas chaud, gourmand et
              réconfortant t’attend. Pensés pour répondre à tes besoins de
              guerrière, il ne reste plus qu’à apprivoiser la vie avec bébé.
            </p>
            <Button
              to="/#commander"
              onAnchorLinkClick={() => {
                setIsContact(false);
                setFormule("2 jours");
              }}
            >
              Réserver
            </Button>
          </Card>
          <Card>
            <StaticImage
              src="../images/formules/duo.png"
              alt=""
              imgStyle={{ objectFit: "contain" }}
            />
            <h4>Formule duo</h4>
            <Price>90€ VG -96€ Flexi</Price>
            <p>
              Love ou self love : partager avec son partenaire ou congeler, ça
              reste une double ration de plaisir ET de temps libre. À partager
              ou non. Grâce à la formule duo, doublez les quantités de la
              formule 3 jours et libérez vous de 6 repas.
            </p>
            <Button
              to="/#commander"
              onAnchorLinkClick={() => {
                setIsContact(false);
                setFormule("6 jours");
              }}
            >
              Réserver
            </Button>
          </Card>
          <Card>
            <StaticImage
              src="../images/formules/carte cadeau.png"
              alt=""
              imgStyle={{ objectFit: "contain" }}
            />
            <h4>Cartes cadeaux</h4>
            <PriceTable>
              <span />
              <span>9 jours</span>
              <span>15 jours</span>
              <span>30 jours</span>
              <span>
                <strong>VG</strong>
              </span>
              <span>133€</span>
              <span>215€</span>
              <span>415€</span>
              <span>
                <strong>Flexi</strong>
              </span>
              <span>142€</span>
              <span>245€</span>
              <span>445€</span>
            </PriceTable>
            <p>
              Tes proches font appel à nous pour prendre en charge votre
              alimentation, pendant la durée souhaitée. À chaque bouchée,
              retrouvez la force et la chaleur de votre tribu qui vous entoure.
            </p>
            <Button
              to="/#commander"
              onAnchorLinkClick={() => {
                setIsContact(false);
                setFormule("carte cadeau");
              }}
            >
              Réserver
            </Button>
          </Card>
        </FormulesContainer>
      </Section>

      <Section>
        <SubHeader>Les petits +</SubHeader>
        <PetitPlusContainer>
          <PetitsPlus>
            <StaticImage
              src="../images/petits-plus/boisson.png"
              alt=""
              imgStyle={{ objectFit: "contain" }}
            />
            <h4>Boisson (500ml) - 3,50€</h4>
            <p>
              Pour quelques matin avec une tasse de chaï, de lait d’or ou de
              douces infusions de sorcières à la main.
            </p>
          </PetitsPlus>
          <PetitsPlus>
            <StaticImage
              src="../images/petits-plus/granola.png"
              alt=""
              imgStyle={{ objectFit: "contain" }}
            />
            <h4>Granola (350grs) - 5,50€</h4>
            <p>
              Pour quelques petits déj avec un granola amandes, miel, abricots,
              coco chocolat. Dans un yaourt avec des fruits frais, et c’est
              parti !
            </p>
          </PetitsPlus>
          <PetitsPlus>
            <StaticImage
              src="../images/petits-plus/boisson granola.png"
              alt=""
              imgStyle={{ objectFit: "contain" }}
            />
            <h4>Granola + Boisson - 7,50€</h4>
            <p>
              Pour un combo ensoleillé et enveloppant, histoire de se lever avec
              le sourire.
            </p>
          </PetitsPlus>
        </PetitPlusContainer>
      </Section>

      <Section id="plus">
        <SubHeader>En plus dans la curcumarmite</SubHeader>
        <PlusContainer>
          <Card>
            <StaticImage
              src="../images/plus/blandoula.png"
              alt=""
              imgStyle={{ objectFit: "contain" }}
            />
            <h4>Blandoula pour toi</h4>
            <p>
              Blandine, l’une des curcumamas est aussi Doula. Envie de te faire
              soutenir pendant ton post partum ? Elle sera ravie de
              t’accompagner, de te concocter de bons petits plats, te faire des
              massages pré et postnataux et bien d’autre. Écris-lui si tu as des
              questions.
            </p>
            <Button
              to="/#contact"
              onAnchorLinkClick={() => {
                setIsContact(true);
                setSujet("doula");
              }}
            >
              Contacte-nous
            </Button>
          </Card>
          <Card>
            <StaticImage
              src="../images/plus/consultation.png"
              alt=""
              imgStyle={{ objectFit: "contain" }}
            />
            <h4>
              Consultation : alimentation et naturopathie de la femme enceinte
              et du postpartum
            </h4>
            <p>
              En quoi cela consiste ? Mener une consultation nutrition pour les
              futures mamans et accompagner au changement alimentaire.
              Conseiller une alimentation adaptée à chaque trimestre de la
              grossesse Prévenir et accompagner par des moyens naturels des maux
              qui gênent les futures mamans (au 3 ème trimestre notamment :
              transit lent, prise de poids, reflux, douleurs lombaires, sommeil
              difficile etc). Conseiller et bien organiser le post-partum tant
              physiquement qu’émotionnellement.
            </p>
            <Button
              to="/#contact"
              onAnchorLinkClick={() => {
                setIsContact(true);
                setSujet("consultation");
              }}
            >
              Contacte-nous
            </Button>
          </Card>
          <Card>
            <StaticImage
              src="../images/plus/atelier.png"
              alt=""
              imgStyle={{ objectFit: "contain" }}
            />
            <h4>Les ateliers de cuisine : "prépare ton post partum"</h4>
            <p>
              Nous proposons des ateliers pour préparer ton post partum et te
              familiariser avec les secrets de la cuisine idéale pour cette
              période. Ateliers solo, duo ou en groupe, chez toi ou à la
              curcumaison, tout est faisable. Écris- nous si tu as des questions
            </p>
            <Button
              to="/#contact"
              onAnchorLinkClick={() => {
                setIsContact(true);
                setSujet("atelier");
              }}
            >
              Contacte-nous
            </Button>
          </Card>
          <Card>
            <StaticImage
              src="../images/plus/evenements.png"
              alt=""
              imgStyle={{ objectFit: "contain" }}
            />
            <h4>Curcumanime tes évènements</h4>
            <p>
              Tu souhaites organiser un blessing way, un cercle de femmes
              gourmand, un rituel de passage dans ta vie de femme ou de mère ?
              Fais appel à nous pour régaler vos papilles et celle de ton
              entourage, avec des produits bio, locaux et hormones friendly.
              Écris- nous si tu as des questions.
            </p>
            <Button
              to="/#contact"
              onAnchorLinkClick={() => {
                setIsContact(true);
                setSujet("evenements");
              }}
            >
              Contacte-nous
            </Button>
          </Card>
        </PlusContainer>
      </Section>
      <Section id="menu">
        <Header>QU’Y A T-IL DANS LE CURCUMENU ?</Header>
        <SubHeader>Un engagement nutritionnel</SubHeader>
        <StaticImage
          src="../images/menus/engagement nutri.png"
          alt=""
          imgStyle={{ objectFit: "contain" }}
        />{" "}
        <Menus />
        <p>
          La grande majorité de nos menus sont sans gluten et protéines de lait
          de vache (sauf féta et parmesan), cependant n'hésitez pas à nous
          écrire en cas d'allergies, d'éviction etc, nous nous adapterons dans
          la mesure du possible
        </p>
      </Section>
      <Section>
        <Header>CURCUMAMAS : CRÉATRICES DE TRIBUS</Header>
        <p>
          L’équivalent en grec ancien de tribu est «faire naître, faire
          pousser». Nous proposons donc une cuisine ayurvédique, bio et locale à
          destination des parents qui naissent en même temps que leurs bébés et
          qui les font pousser. Pensés pour répondre au mieux aux besoins de
          jeunes mamans qui ont vécu le tsunami de la grossesse et de
          l’accouchement, nos petits plats se partagent très bien en famille et
          à n’importe quel moment de votre nouvelle vie de parents. Ils ont
          l’ambition de soutenir d’autres mamans en difficulté grâce aux
          livraisons suspendues, pour qu’à votre tour vous créiez une tribu.
        </p>
        <PetitPlusContainer>
          <Tribu>
            <StaticImage
              src="../images/tribu/bolSoupe-03.png"
              alt=""
              imgStyle={{ objectFit: "contain" }}
            />
            <h4>
              Cadeau de naissance <br />
              <small>Je sollicite ma tribu</small>
            </h4>
            <p>
              Tes proches font appel à nous pour prendre en charge votre
              alimentation, pendant la durée souhaitée. À chaque bouchée,
              retrouvez la force de la tribu, et la sensation d’être entourés.
              Prenez ce temps offert pour être avec bébé.
            </p>
          </Tribu>
          <Tribu>
            <StaticImage
              src="../images/tribu/bolDhal-02.png"
              alt=""
              imgStyle={{ objectFit: "contain" }}
            />
            <h4>
              Cadeau pour soi
              <br />
              <small>Je prends soin de moi</small>
            </h4>
            <p>
              Si cela t’a plu et que tu veux prolonger ou que ta tribu n’y a pas
              pensé, on n'est jamais mieux servi que par soi même. Une des
              premières leçons de jeunes parents : prendre soin de soi !
              Commande nous un nombre de repas comprenant : entrée/plat/encas.
            </p>
          </Tribu>
          <Tribu>
            <StaticImage
              src="../images/tribu/bolNouilles-04.png"
              alt=""
              imgStyle={{ objectFit: "contain" }}
            />
            <h4>
              Cadeaux suspendus <br />
              <small>Je prends soin d'elles</small>
            </h4>
            <p>
              Dans le prix de vente de chaque commande, 1€ est inclus pour
              offrir de bon petits plats à des mamans dans le besoin, par le
              biais d'associations toulousaines. Toi aussi crée une tribu grâce
              aux livraisons suspendues.
            </p>
          </Tribu>
        </PetitPlusContainer>
      </Section>

      <Section>
        <EngagementContainer>
          <StaticImage
            src="../images/engagement.png"
            alt=""
            imgStyle={{ objectFit: "contain" }}
          />
          <Header>NOTRE ENGAGEMENT</Header>
          <p>
            Nous sommes deux Toulousaines profondément sensibles à la féminité,
            au post-partum* et à la périnatalité. Le constat du tabou autour du
            post partum et des conséquences qu’il peut avoir sur les familles et
            les mères nous ont poussées à se demander : qu’est ce qu’on peux
            faire, qu’est ce qu’on aime faire ? <br /> Alors c’est via des
            petits plats sur mesure que nous aurons à cœur de rêver et
            d’accompagner ces mères et ces familles vers un peu plus de liberté.
          </p>
        </EngagementContainer>
      </Section>

      <Section id="commander" isHidden={isContact}>
        <Header>Commander</Header>

        <FormContainer
          name="commande"
          method="POST"
          data-netlify="true"
          action="/pages/succes/commande"
        >
          <input type="hidden" name="commande-form" value="commande" />
          <DetailsContainer>
            <p>Vos détails</p>
            <div>
              <TextInput
                type="text"
                name="name"
                placeholder="Votre nom"
                required
              />
            </div>
            <div>
              <TextInput
                type="email"
                name="email"
                placeholder="Votre email"
                required
              />
            </div>
            <div>
              <TextInput
                type="text"
                name="phone"
                placeholder="Votre numéro de téléphone"
              />
            </div>
          </DetailsContainer>
          <RadioGroup
            label="Votre formule"
            name="formule"
            options={[
              { value: "2 jours", label: "Petite fringale - 2 jours" },
              { value: "6 jours", label: "Curcufamille - 6 jours" },
              { value: "carte cadeau", label: "Cartes cadeaux" },
            ]}
            onChange={onFormuleChange}
            selectedValue={formule}
            isRequired
          />
          <RadioGroup
            name="durée"
            options={[
              { value: "10 jours", label: "10 jours" },
              { value: "14 jours", label: "14 jours" },
              { value: "30 jours", label: "30 jours" },
            ]}
            onChange={onDureeChange}
            selectedValue={duree}
            isHidden={formule !== "carte cadeau"}
            isRequired={formule === "carte cadeau"}
          />
          <RadioGroup
            label="Variante"
            name="variante"
            options={[
              { value: "VG", label: "VG" },
              { value: "Flexi", label: "Flexi" },
            ]}
            onChange={onVarianteChange}
            selectedValue={variante}
            isRequired
          />
          <RadioGroup
            label="Livraison"
            name="date"
            options={[
              { value: "8 mars", label: "8 mars" },
              { value: "15 mars", label: "15 mars" },
            ]}
            onChange={onDateChange}
            selectedValue={date}
            isRequired
          />
          <div style={{ marginTop: "1rem" }}>
            <TextInput
              type="text"
              name="addresse"
              required
              placeholder="Addresse de livraison"
            />
          </div>
          <CheckBox
            label="C'est un cadeau !"
            name="cadeau"
            onChange={onCadeauChange}
            value={cadeau}
          />
          <CheckBox
            label="Recevoir de nos nouvelles"
            name="newsletter"
            onChange={onNewsLetterChange}
            value={isSubscribingToNewsLetter}
          />
          <DetailsContainer isHidden={!isCadeau}>
            <p>Détails de la personne recevant le cadeau</p>
            <div>
              <TextInput
                type="text"
                name="recipient-name"
                placeholder="Son nom"
                required={isCadeau}
              />
            </div>
            <div>
              <TextInput
                type="email"
                name="recipient-email"
                placeholder="Son email"
                required={isCadeau}
              />
            </div>
            <div>
              <TextInput
                type="text"
                name="recipient-phone"
                placeholder="Son numéro de téléphone"
              />
            </div>
          </DetailsContainer>
          <div style={{ marginTop: "1rem" }}>
            <TextInput
              as={"textarea"}
              name="message"
              placeholder="Laissez-nous un petit message ! (optionnel)"
              style={{ height: "7rem", width: "150%" }}
            />
          </div>
          <Button
            as="button"
            type="submit"
            style={{ marginTop: isCadeau ? "2rem" : "1rem" }}
          >
            Commander
          </Button>
        </FormContainer>
      </Section>
      <div />
      <Section id="contact" isHidden={!isContact}>
        <Header>Contact</Header>

        <FormContainer
          name="contact"
          method="POST"
          data-netlify="true"
          action="/pages/succes/contact"
        >
          <input type="hidden" name="contact-form" value="contact" />
          <DetailsContainer>
            <p>Vos détails</p>
            <div>
              <TextInput
                type="text"
                name="name"
                placeholder="Votre nom"
                required
              />
            </div>
            <div>
              <TextInput
                type="email"
                name="email"
                placeholder="Votre email"
                required
              />
            </div>
            <div>
              <TextInput
                type="text"
                name="phone"
                placeholder="Votre numéro de téléphone"
              />
            </div>
          </DetailsContainer>
          <DetailsContainer>
            <p>Je vous contacte à propos de :</p>
            <Select name="sujet" value={sujet} onChange={onSujetChange}>
              <option value="général">J'ai une question</option>
              <option value="doula">Doula</option>
              <option value="consultation">
                Consultation alimentaire et naturopathie
              </option>
              <option value="atelier">Atelier de cuisine</option>
              <option value="evenements">Évènements</option>
            </Select>
          </DetailsContainer>
          <TextInput
            as={"textarea"}
            name="message"
            placeholder="Laissez-nous un petit message ! (optionnel)"
            style={{ height: "7rem", width: "20rem", marginTop: "1rem" }}
          />
          <CheckBox
            label="Recevoir de nos nouvelles"
            name="newsletter"
            onChange={onNewsLetterChange}
            value={isSubscribingToNewsLetter}
          />
          <Button as="button" type="submit" disabled={false}>
            Contacte nous
          </Button>
        </FormContainer>
      </Section>
      <Footer />
    </main>
  );
};

export default IndexPage;
