import * as React from "react";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { secondaryColor } from "../styles/theme";
import { Header, Section } from "./index";
import { BasePage } from "../components/BasePage";

const Article = styled.h2`
  font-size: 1.5rem;
  color: ${secondaryColor};
  margin-top: 3rem;
`;

// markup
const CGU = () => {
  return (
    <BasePage title={"CGU"}>
      <Navbar />
      <Section>
        <Header>Conditions générales d'utilisation</Header>
        <p>
          En vigueur au 15/02/2021 Les présentes conditions générales
          d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique
          des modalités de mise à disposition du site et des services par
          Curcumamas et de définir les conditions d’accès et d’utilisation des
          services par « l'Utilisateur ». Les présentes CGU sont accessibles sur
          le site à la rubrique «CGU».
        </p>
        <Article>Article 1 : Les mentions légales</Article>
        <p>
          Copyright Chaumylène farmer Ayoooo L’édition et la direction de la
          publication du site https://curcumamas.com/ est assurée par Julien
          Demaria. Adresse e-mail julien-demaria@live.fr. L'hébergeur du site
          https://curcumamas.com/ est la société PlaneHoster avec le numéro de
          téléphone : 0 805 080 426.
        </p>
        <Article>ARTICLE 2 : Accès au site</Article>
        <p>
          Le site https://curcumamas.com/ permet à l'Utilisateur un accès
          gratuit aux services suivants : Traiteur, Cuisine, Bio, Livraisons.{" "}
        </p>
        <p>
          Le site est accessible gratuitement en tout lieu à tout Utilisateur
          ayant un accès à Internet. Tous les frais supportés par l'Utilisateur
          pour accéder au service (matériel informatique, logiciels, connexion
          Internet, etc.) sont à sa charge.
        </p>
        <Article>ARTICLE 3 : Collecte des données</Article>
        <p>
          Le site est exempté de déclaration à la Commission Nationale
          Informatique et Libertés (CNIL) dans la mesure où il ne collecte
          aucune donnée concernant les Utilisateurs.
        </p>
        <Article>ARTICLE 4 : Propriété intellectuelle</Article>
        <p>
          Les marques, logos, signes ainsi que tous les contenus du site
          (textes, images, son…) font l'objet d'une protection par le Code de la
          propriété intellectuelle et plus particulièrement par le droit
          d'auteur. La marque Curcumamas est une marque déposée. Toute
          représentation et/ou reproduction et/ou exploitation partielle ou
          totale de cette marque, de quelque nature que ce soit, est totalement
          prohibée. L'Utilisateur doit solliciter l'autorisation préalable du
          site pour toute reproduction, publication, copie des différents
          contenus. Il s'engage à une utilisation des contenus du site dans un
          cadre strictement privé, toute utilisation à des fins commerciales et
          publicitaires est strictement interdite.
        </p>
        <p>
          Toute représentation totale ou partielle de ce site par quelque
          procédé que ce soit, sans l’autorisation expresse de l’exploitant du
          site Internet constituerait une contrefaçon sanctionnée par l’article
          L 335-2 et suivants du Code de la propriété intellectuelle. Il est
          rappelé conformément à l’article L122-5 du Code de propriété
          intellectuelle que l’Utilisateur qui reproduit, copie ou publie le
          contenu protégé doit citer l’auteur et sa source.
        </p>
        <Article>ARTICLE 5 : Responsabilité</Article>
        <p>
          Les sources des informations diffusées sur le site
          https://curcumamas.com/ sont réputées fiables mais le site ne garantit
          pas qu’il soit exempt de défauts, d’erreurs ou d’omissions. Les
          informations communiquées sont présentées à titre indicatif et général
          sans valeur contractuelle. Malgré des mises à jour régulières, le site
          https://curcumamas.com/ ne peut être tenu responsable de la
          modification des dispositions administratives et juridiques survenant
          après la publication. De même, le site ne peut être tenue responsable
          de l’utilisation et de l’interprétation de l’information contenue dans
          ce site. Le site https://curcumamas.com/ ne peut être tenu pour
          responsable d’éventuels virus qui pourraient infecter l’ordinateur ou
          tout matériel informatique de l’Internaute, suite à une utilisation, à
          l’accès, ou au téléchargement provenant de ce site. La responsabilité
          du site ne peut être engagée en cas de force majeure ou du fait
          imprévisible et insurmontable d'un tiers.
        </p>
        <Article>ARTICLE 6 : Liens hypertextes</Article>
        <p>
          Des liens hypertextes peuvent être présents sur le site. L’Utilisateur
          est informé qu’en cliquant sur ces liens, il sortira du site
          https://curcumamas.com/. Ce dernier n’a pas de contrôle sur les pages
          web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas,
          être responsable de leur contenu.
        </p>
        <Article>ARTICLE 7 : Cookies</Article>
        <p>
          L’Utilisateur est informé que lors de ses visites sur le site, aucun
          cookie n'est utilisé sur son logiciel de navigation. Les cookies sont
          de petits fichiers stockés temporairement sur le disque dur de
          l’ordinateur de l’Utilisateur par votre navigateur. Les cookies ne
          contiennent pas d’information personnelle et ne peuvent pas être
          utilisés pour identifier quelqu’un. Un cookie contient un identifiant
          unique, généré aléatoirement et donc anonyme. Certains cookies
          expirent à la fin de la visite de l’Utilisateur, d’autres restent.
        </p>
        <p>
          En naviguant sur le site, L’Utilisateur n'a pas à les accepter car
          aucun n'est utilisé. L’Utilisateur pourra désactiver ces cookies par
          l’intermédiaire des paramètres figurant au sein de son logiciel de
          navigation.
        </p>
        <Article>
          ARTICLE 8 : Droit applicable et juridiction compétente
        </Article>
        <p>
          La législation française s'applique au présent contrat. En cas
          d'absence de résolution amiable d'un litige né entre les parties, les
          tribunaux français seront seuls compétents pour en connaître.
        </p>
        <p>
          Pour toute question relative à l’application des présentes CGU, vous
          pouvez joindre l’éditeur aux coordonnées inscrites à l’ARTICLE 1.
        </p>
      </Section>
      <Footer isCGU />
    </BasePage>
  );
};

export default CGU;
