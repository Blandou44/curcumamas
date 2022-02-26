import * as React from "react";
import { ThankYou } from "../../components/ThankYou";
import { GlobalStyle } from "../../styles/theme";

const OrderSuccess = () => {
  return (
    <main>
      <GlobalStyle />
      <title>Merci !</title>
      <ThankYou
        heading="Merci pour votre commande !"
        message="Nous vous recontacterons très bientôt pour vous indiquer comment
            procéder à votre paiement."
      />
    </main>
  );
};

export default OrderSuccess;
