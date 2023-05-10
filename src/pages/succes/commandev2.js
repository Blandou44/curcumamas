import * as React from "react";
import { Link } from "gatsby";
import { BasePage } from "../../components/BasePage";
import { Heading, MotifWrapper, NewButton } from "../../styles/theme";
import styled from "styled-components";
import { NewNavBar } from "../../components/NewNavBar";

const NotFoundWrapper = styled.div`
  background: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 4rem;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0px 0px 15px 4px #00000033;
`;
const OrderSuccess = () => {
  const [lienpaiment, setLienpaiment] = React.useState(null);

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const lienpaiment = urlParams.get("lienpaiement");
    setLienpaiment(lienpaiment);
  }, []);

  return (
    <BasePage noindex>
      <NewNavBar />
      <MotifWrapper
        style={{ height: "100vh", display: "flex", alignItems: "center" }}
      >
        <NotFoundWrapper>
          <Heading>Merci !</Heading>
          {lienpaiment ? (
            <NewButton as={Link} to={lienpaiment}>
              Payer votre commande
            </NewButton>
          ) : (
            <p>
              Nous vous recontacterons très bientôt pour vous indiquer comment
              procéder à votre paiement.
            </p>
          )}
          <Link to="/">Retour à l'accueil</Link>
        </NotFoundWrapper>
      </MotifWrapper>
    </BasePage>
  );
};

export default OrderSuccess;
