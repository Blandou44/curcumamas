import * as React from "react";
import { ThankYou } from "../../components/ThankYou";
import { BasePage } from "../../components/BasePage";

const ContactSuccess = () => {
  return (
    <BasePage title={"Merci !"}>
      <ThankYou
        heading="Merci pour votre message !"
        message="Nous vous recontacterons très bientôt pour répondre à toutes vos
            questions !"
      />
    </BasePage>
  );
};

export default ContactSuccess;
