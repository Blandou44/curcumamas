import * as React from "react";
import styled from "styled-components";
import { Footer } from "../components/Footer";
import {
  applySidePadding,
  Heading,
  MotifWrapper,
  newSecondaryColor,
  secondaryColor,
} from "../styles/theme";
import { BasePage } from "../components/BasePage";
import { NewNavBar } from "../components/NewNavBar";
import { StaticImage } from "gatsby-plugin-image";

const Article = styled.h2`
  font-size: 1.5rem;
  color: ${newSecondaryColor};
  margin-top: 3rem;
`;

const ArticlesContainer = styled.div`
  ${applySidePadding("3rem")};
`;

const Section = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0px 0px 15px 4px #00000033;
  padding: 3rem;

  p {
    color: black;
    word-break: break-word;
  }

  span {
    font-size: 1.2rem;
    text-align: center;
    display: block;
    width: 100%;
  }

  .image-wrapper {
    margin: 0 auto;
    width: fit-content;
  }
`;
const CreditImpots = () => {
  return (
    <BasePage
      title={"50% de Crédit d'impôt sur les prestations de repas à domicile"}
      description={
        "Vos repas à domicile sont elligibles à un crédit d'impôt de 50% sur le prix des repas. Découvrez comment vous pouvez bénéficier de cette réduction."
      }
    >
      <NewNavBar />
      <MotifWrapper>
        <ArticlesContainer>
          <Section>
            <Heading>CREDIT D'IMPOTS</Heading>
            <p>
              La prestation de préparation de repas à domicile est déductible de
              vos impôts à hauteur de 50%. La partie "Curcumamas fait les
              courses pour vous" ne l'est pas. La prestation doit avoir lieu à
              votre domicile et la facture doit être à votre nom et votre
              adresse. <br />
              <br />
              En mars de l'année N+1, je vous envoie une attestation fiscale
              annuelle qui vous permet un crédit d’impôt sur le revenu égal à 50
              % des dépenses engagées pour des prestations de services à la
              personne, dans la limite de 12 000 € par an (loi de finances
              2017). <br />
              Cette attestation vous servira aussi de justificatif à conserver
              en cas de contrôle fiscal.
            </p>
          </Section>
        </ArticlesContainer>
        <ArticlesContainer>
          <Section>
            <span>
              Pour les clients réguliers (dès la deuxième prestation):
            </span>
            <Heading>BÉNÉFICIEZ DE L'AVANCE IMMÉDIATE</Heading>
            <div className="image-wrapper">
              <StaticImage
                src={"../images/credit-impots.jpg"}
                alt="Mon crédit d'impôt pour les aides à la personne c'est immédiat"
              />
            </div>
            <p>
              L’Urssaf et la Direction générale des Finances publiques ont mis
              en place le service Avance immédiate qui vous permet de déduire
              immédiatement votre crédit d’impôt du montant que Curcumamas vous
              facture pour les prestations réalisées à votre domicile.
              <br /> Il s’agit d’un service optionnel, gratuit et dématérialisé.
            </p>
            <Article>Comment ça marche ?</Article>
            <p>
              Une fois que nous vous avons inscrit, vous disposez d’un compte
              sur le site{" "}
              <a
                href="http://particulier.urssaf.fr/"
                target="_blank"
                rel="noreferrer"
              >
                particulier.urssaf.fr
              </a>{" "}
              <br />
              Celui-ci vous permet de consulter les demandes de paiement reçues
              et de suivre votre consommation de crédit d’impôt.
              <br />
              <br />
              La demande de paiement vous indique :
              <ul>
                <li>
                  Le montant total dû pour les prestations réalisées à votre
                  domicile
                </li>
                <li>Le montant du crédit d’impôt auquel vous avez droit</li>
                <li>
                  Le montant de votre reste à charge après déduction du crédit
                  d’impôt (montant total – crédit d’impôt).
                </li>
              </ul>
              Concrètement, avec ce service, c’est l’Urssaf qui prélève le
              montant du reste à charge sur votre compte bancaire. Ensuite,
              l’Urssaf nous verse la totalité de la prestation et nous
              rémunérons l’intervenant.
              <br />
              <br />
              Nous vous proposons de bénéficier de ce nouveau service, si vous
              remplissez les conditions d’éligibilité suivantes :
              <ul>
                <li>Un numéro fiscal est associé à votre état civil</li>
                <li>
                  Vous avez déjà effectué au moins une déclaration de revenus
                </li>
              </ul>
              <br />
              Si vous souhaitez en bénéficier, ou pour toute question à ce
              sujet, merci de nous contacter par mail à{" "}
              <a href="mailto:curcumamas@gmail.com">curcumamas@gmail.com</a>
              <br />
              <br />
              Pour en savoir plus, consultez{" "}
              <a
                href="https://www.urssaf.fr/portail/home/services-a-la-personne/client-dorganisme-de-service-a-l/client-de-prestataire/foire-aux-questions-1.html"
                target="_blank"
                rel="noreferrer"
              >
                la foire aux questions de l’Urssaf
              </a>
              .
              <br />
              <br />
              Page d'information sur les plafonds de crédit d'impôt :
              <a
                href="https://www.impots.gouv.fr/portail/particulier/emploi-domicile"
                target="_blank"
                rel="noreferrer"
              >
                https://www.impots.gouv.fr/portail/particulier/emploi-domicile
              </a>
            </p>
          </Section>
        </ArticlesContainer>
      </MotifWrapper>
      <Footer />
    </BasePage>
  );
};

export default CreditImpots;
