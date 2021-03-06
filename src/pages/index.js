import React, { useState } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { Navbar } from "../components/Navbar";
import {
  sidePadding,
  mainColor,
  secondaryColor,
  sidePaddingSmall,
  Button,
  maxWidth,
  smallBreakpoint,
} from "../styles/theme";
import { Footer } from "../components/Footer";
import { RadioGroup } from "../components/RadioGroup";
import { CheckBox } from "../components/CheckBox";
import { Menus } from "../components/Menus";
import { Carousel } from "../components/Carousel";
import { BasePage } from "../components/BasePage";

export const Header = styled.h2`
  font-size: 32px;
  color: #253269;
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
`;

const SubHeader = styled.h3`
  font-family: "Permanent Marker", cursive;
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

  > * {
    max-width: ${maxWidth};
    margin: 0 auto;
  }
`;

const FormulesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;

  @media (max-width: ${smallBreakpoint}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid ${mainColor};
  background-color: white;
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

  @media (max-width: ${smallBreakpoint}) {
    grid-template-columns: 1fr;
  }
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

  @media (max-width: ${smallBreakpoint}) {
    grid-template-columns: 1fr;
  }
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

const datesLivraison = {
  1: "22 mars",
  2: "29 mars",
};

// markup
const IndexPage = ({ data }) => {
  const [formule, setFormule] = useState("");
  const [duree, setDuree] = useState("");
  const [variante, setVariante] = useState("");
  const [date, setDate] = useState("");
  const [cadeau, setCadeau] = useState(false);
  const [isSubscribingToNewsLetter, setIsSubscribingToNewsLetter] =
    useState(false);
  const [sujet, setSujet] = useState("g??n??ral");

  const [isContact, setIsContact] = useState(true);

  const isCadeau = cadeau;

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

  const menuNode = data.allContentYaml.edges[0].node;

  return (
    <BasePage>
      <Navbar onContactClick={handleContactClick} />
      <Section>
        <Header>Traiteur du post-partum* ?? Toulouse</Header>
        <Carousel />
        <p>
          * Le post partum est par d??finition d???une dur??e de 40 jours apr??s la
          naissance. Chez les curcumamas on pense que c???est ?? vous de ressentir
          la dur??e, nous prendrons soin de vous tant que vous le souhaitez.
        </p>
      </Section>
      <Section id="formules">
        <Header>QUE MIJOTENT LES CURCUMAMAS ?</Header>
        <SubHeader>Formules & Cartes Cadeaux</SubHeader>
        <ul>
          <li>
            <p>
              Vous pouvez commander un minimum de 2 menus parmi les 3 menus ?? la
              carte. Les formules et cartes cadeaux comprennent 1 repas par jour
            </p>
          </li>
          <li>
            <p>Un repas comprend une entr??e - un plat - un encas</p>
          </li>
          <li>
            <p>
              Deux options sont possibles : v??g?? ou flexi (Pour l'option flexi :
              2 repas sur trois comprennent de la viande)
            </p>
          </li>
          <li>
            <p>
              Livraisons sur Toulouse et sa p??riph??rie proche tous les mardis ou
              mercredis (en fonction du nombres de commandes), heure et jour
              pr??cis??s le vendredi pr??c??dant votre livraison. Nous livrons plus
              loin en Haute-Garonne en appliquant un suppl??ment de livraison
              calcul?? avec vous.
            </p>
          </li>
          <li>
            <p>
              Fin de prise des commandes : vendredi 14h (de la semaine pr??c??dant
              votre livraison). Toute autre demande sera, bien s??r, discut??e
              avec vous pour trouver ensemble la solution qui vous convient
            </p>
          </li>
          <li>
            <p>
              Tout est bio, ?? 80% local et ayurv??dique, nos plats sont ??
              consommer sous 3 jours apr??s la livraison
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
            <h4>Petite fringale - 2 jours</h4>
            <Price>36??? VG - 38??? Flexi</Price>
            <p>
              Offre toi 2 jours pendant lesquels un bon repas chaud, gourmand et
              r??confortant t???attend. Pens??s pour r??pondre ?? tes besoins de
              guerri??re, il ne reste plus qu????? apprivoiser la vie avec b??b??.
            </p>
            <Button
              to="/#commander"
              onAnchorLinkClick={() => {
                setIsContact(false);
                setFormule("2 jours");
              }}
            >
              R??server
            </Button>
          </Card>
          <Card>
            <StaticImage
              src="../images/formules/duo.png"
              alt=""
              imgStyle={{ objectFit: "contain" }}
            />
            <h4>Curcufamille - 6 jours</h4>
            <Price>94??? VG - 98??? Flexi</Price>
            <p>
              Love ou self love : partager avec son partenaire ou congeler, ??a
              reste une double ration de plaisir ET de temps libre. ?? partager
              ou non. Gr??ce ?? la formule duo, doublez les quantit??s de la
              formule 3 jours et lib??rez vous de 6 repas.
            </p>
            <Button
              to="/#commander"
              onAnchorLinkClick={() => {
                setIsContact(false);
                setFormule("6 jours");
              }}
            >
              R??server
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
              <span>10 jours</span>
              <span>14 jours</span>
              <span>30 jours</span>
              <span>
                <strong>VG</strong>
              </span>
              <span>154???</span>
              <span>215???</span>
              <span>420???</span>
              <span>
                <strong>Flexi</strong>
              </span>
              <span>160???</span>
              <span>224???</span>
              <span>440???</span>
            </PriceTable>
            <p>
              Tes proches font appel ?? nous pour prendre en charge votre
              alimentation, pendant la dur??e souhait??e. ?? chaque bouch??e,
              retrouvez la force et la chaleur de votre tribu qui vous entoure.
            </p>
            <Button
              to="/#commander"
              onAnchorLinkClick={() => {
                setIsContact(false);
                setFormule("carte cadeau");
              }}
            >
              R??server
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
            <h4>Boisson (500ml) - 3,50???</h4>
            <p>
              Pour quelques matin avec une tasse de cha??, de lait d???or ou de
              douces infusions de sorci??res ?? la main.
            </p>
          </PetitsPlus>
          <PetitsPlus>
            <StaticImage
              src="../images/petits-plus/granola.png"
              alt=""
              imgStyle={{ objectFit: "contain" }}
            />
            <h4>Granola (350grs) - 5,50???</h4>
            <p>
              Pour quelques petits d??j avec un granola amandes, miel, abricots,
              coco chocolat. Dans un yaourt avec des fruits frais, et c???est
              parti !
            </p>
          </PetitsPlus>
          <PetitsPlus>
            <StaticImage
              src="../images/petits-plus/boisson granola.png"
              alt=""
              imgStyle={{ objectFit: "contain" }}
            />
            <h4>Granola + Boisson - 7,50???</h4>
            <p>
              Pour un combo ensoleill?? et enveloppant, histoire de se lever avec
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
              Blandine, l???une des curcumamas est aussi Doula. Envie de te faire
              soutenir pendant ton post partum ? Elle sera ravie de
              t???accompagner, de te concocter de bons petits plats, te faire des
              massages pr?? et postnataux et bien d???autre. ??cris-lui si tu as des
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
              Conseiller une alimentation adapt??e ?? chaque trimestre de la
              grossesse Pr??venir et accompagner par des moyens naturels des maux
              qui g??nent les futures mamans (au 3 ??me trimestre notamment :
              transit lent, prise de poids, reflux, douleurs lombaires, sommeil
              difficile etc). Conseiller et bien organiser le post-partum tant
              physiquement qu?????motionnellement.
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
            <h4>Les ateliers de cuisine : "pr??pare ton post partum"</h4>
            <p>
              Nous proposons des ateliers pour pr??parer ton post partum et te
              familiariser avec les secrets de la cuisine id??ale pour cette
              p??riode. Ateliers solo, duo ou en groupe, chez toi ou ?? la
              curcumaison, tout est faisable. ??cris- nous si tu as des questions
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
            <h4>Curcumanime tes ??v??nements</h4>
            <p>
              Tu souhaites organiser un blessing way, un cercle de femmes
              gourmand, un rituel de passage dans ta vie de femme ou de m??re ?
              Fais appel ?? nous pour r??galer vos papilles et celle de ton
              entourage, avec des produits bio, locaux et hormones friendly.
              ??cris- nous si tu as des questions.
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
        <Header>QU???Y A T-IL DANS LE CURCUMENU ?</Header>
        <SubHeader>Un engagement nutritionnel</SubHeader>
        <div>
          <StaticImage
            src="../images/menus/engagement nutri.png"
            alt=""
            imgStyle={{ objectFit: "contain" }}
          />{" "}
        </div>
        <Menus menuNode={menuNode} />
        <p>
          La grande majorit?? de nos menus sont sans gluten et prot??ines de lait
          de vache (sauf f??ta et parmesan), cependant n'h??sitez pas ?? nous
          ??crire en cas d'allergies, d'??viction etc, nous nous adapterons dans
          la mesure du possible
        </p>
      </Section>
      <Section>
        <Header>CURCUMAMAS : CR??ATRICES DE TRIBUS</Header>
        <p>
          L?????quivalent en grec ancien de tribu est ??faire na??tre, faire
          pousser??. Nous proposons donc une cuisine ayurv??dique, bio et locale ??
          destination des parents qui naissent en m??me temps que leurs b??b??s et
          qui les font pousser. Pens??s pour r??pondre au mieux aux besoins de
          jeunes mamans qui ont v??cu le tsunami de la grossesse et de
          l???accouchement, nos petits plats se partagent tr??s bien en famille et
          ?? n???importe quel moment de votre nouvelle vie de parents. Ils ont
          l???ambition de soutenir d???autres mamans en difficult?? gr??ce aux
          livraisons suspendues, pour qu????? votre tour vous cr??iez une tribu.
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
              Tes proches font appel ?? nous pour prendre en charge votre
              alimentation, pendant la dur??e souhait??e. ?? chaque bouch??e,
              retrouvez la force de la tribu, et la sensation d?????tre entour??s.
              Prenez ce temps offert pour ??tre avec b??b??.
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
              Si cela t???a plu et que tu veux prolonger ou que ta tribu n???y a pas
              pens??, on n'est jamais mieux servi que par soi m??me. Une des
              premi??res le??ons de jeunes parents : prendre soin de soi !
              Commande nous un nombre de repas comprenant : entr??e/plat/encas.
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
              Dans le prix de vente de chaque commande, 1??? est inclus pour
              offrir de bon petits plats ?? des mamans dans le besoin, par le
              biais d'associations toulousaines. Toi aussi cr??e une tribu gr??ce
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
            Nous sommes deux Toulousaines profond??ment sensibles ?? la f??minit??,
            au post-partum* et ?? la p??rinatalit??. Le constat du tabou autour du
            post partum et des cons??quences qu???il peut avoir sur les familles et
            les m??res nous ont pouss??es ?? se demander : qu???est ce qu???on peux
            faire, qu???est ce qu???on aime faire ? <br /> Alors c???est via des
            petits plats sur mesure que nous aurons ?? c??ur de r??ver et
            d???accompagner ces m??res et ces familles vers un peu plus de libert??.
          </p>
        </EngagementContainer>
      </Section>

      <Section id="commander" isHidden={isContact}>
        <Header>Commander</Header>

        <FormContainer
          name="commande"
          method="POST"
          data-netlify="true"
          action="/succes/commande/"
        >
          <input type="hidden" name="commande-form" value="commande" />
          <DetailsContainer>
            <p>Vos d??tails</p>
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
                placeholder="Votre num??ro de t??l??phone"
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
            name="dur??e"
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
          <CheckBox
            label="C'est un cadeau !"
            name="cadeau"
            onChange={onCadeauChange}
            value={cadeau}
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
              { value: menuNode.date_1, label: menuNode.date_1 },
              { value: menuNode.date_2, label: menuNode.date_2 },
              ...(isCadeau
                ? [{ value: "Iels choisissent", label: "Iels choisissent" }]
                : []),
            ]}
            onChange={onDateChange}
            selectedValue={date}
            isRequired
          />

          <div style={{ marginTop: "1rem" }}>
            <TextInput
              type="text"
              name="menus"
              required
              placeholder="Menus choisis. ex: 1, 2, 3"
            />
          </div>

          <div style={{ marginTop: "1rem" }}>
            <TextInput
              type="text"
              name="addresse"
              required
              placeholder="Addresse de livraison"
            />
          </div>
          <CheckBox
            label="Recevoir de nos nouvelles"
            name="newsletter"
            onChange={onNewsLetterChange}
            value={isSubscribingToNewsLetter}
          />
          <DetailsContainer isHidden={!isCadeau}>
            <p>D??tails de la personne recevant le cadeau</p>
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
                placeholder="Son num??ro de t??l??phone"
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
          action="/succes/contact/"
        >
          <input type="hidden" name="contact-form" value="contact" />
          <DetailsContainer>
            <p>Vos d??tails</p>
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
                placeholder="Votre num??ro de t??l??phone"
              />
            </div>
          </DetailsContainer>
          <DetailsContainer>
            <p>Je vous contacte ?? propos de :</p>
            <Select name="sujet" value={sujet} onChange={onSujetChange}>
              <option value="g??n??ral">J'ai une question</option>
              <option value="doula">Doula</option>
              <option value="consultation">
                Consultation alimentaire et naturopathie
              </option>
              <option value="atelier">Atelier de cuisine</option>
              <option value="evenements">??v??nements</option>
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
    </BasePage>
  );
};

export const query = graphql`
  query MenusQuery {
    allContentYaml {
      edges {
        node {
          menu_1
          menu_2
          date_1
          date_2
        }
      }
    }
  }
`;

export default IndexPage;
