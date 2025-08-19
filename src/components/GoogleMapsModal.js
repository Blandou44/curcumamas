import {
  Root,
  Portal,
  Overlay,
  Content,
  Close,
  Trigger,
} from "@radix-ui/react-dialog";
import React, { useEffect, useState } from "react";
import "./modal.css";

export default () => {
  return (
    <Root>
      <Trigger asChild>
        <button style={{ textDecoration: "underline", cursor: "help" }}>
          (Où ?)
        </button>
      </Trigger>
      <Portal>
        <Overlay className="DialogOverlay" />
        <Content className="DialogContent">
          <p className="header">
            Je viens jusqu'à vous si vous êtes dans cette zone :
          </p>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=13eENyTabGTMb1UlF4P6eizldMSEbbkk&ehbc=2E312F"
            width="640"
            height="480"
          ></iframe>
          <p className="footer">
            Vous êtes en dehors de cette zone ?<br /> Écrivez-nous à{" "}
            <a href="mailto:curcumamas@gmail.com">curcumamas@gmail.com</a> Je
            serai ravie de voir ce que je peux faire pour vous
          </p>
          <Close asChild>
            <button className="closeButton" aria-label="Close">
              X
            </button>
          </Close>
        </Content>
      </Portal>
    </Root>
  );
};
