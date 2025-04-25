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
  const urlParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );
  const lienpaiment = urlParams.get("lienpaiement");
  React.useEffect(() => {
    const asyncRedirect = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      window.location.href = lienpaiment;
    };
    if (lienpaiment) {
      asyncRedirect();
    }
  }, [lienpaiment]);

  return (
    <BasePage noindex>
      <NewNavBar />
      <MotifWrapper
        style={{ height: "100vh", display: "flex", alignItems: "center" }}
      >
        <NotFoundWrapper>
          <Heading>Merci !</Heading>
          <p>
            Vous allez être redirigé.e vers le site de paiement pour finaliser
            votre commande.
          </p>
          <p>
            Si ce n'est pas le cas, vous pouvez cliquer sur le bouton ci-dessous
          </p>
          <NewButton to={lienpaiment}>Vers le site de paiement</NewButton>
          <Link to="/">Retour à l'accueil</Link>
        </NotFoundWrapper>
      </MotifWrapper>
    </BasePage>
  );
};

export default OrderSuccess;
