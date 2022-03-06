import * as React from "react";
import { BasePage } from "../../components/BasePage";
import { ThankYou } from "../../components/ThankYou";

const OrderSuccess = () => {
  return (
    <BasePage title={"Merci !"}>
      <ThankYou
        heading="Merci pour votre commande !"
        message="Nous vous recontacterons très bientôt pour vous indiquer comment
        procéder à votre paiement."
      />
    </BasePage>
  );
};

export default OrderSuccess;
