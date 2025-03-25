import { Root, Portal, Overlay, Content, Close } from "@radix-ui/react-dialog";
import React, { useEffect, useState } from "react";
import "./modal.css";

export default () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openModalAfterDelay = async () => {
      await new Promise((resolve) => setTimeout(resolve, 8000));
      setOpen(true);
    };
    openModalAfterDelay();
  }, []);

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Portal>
        <Overlay className="DialogOverlay" />
        <Content className="DialogContent">
          <iframe
            width="640"
            height="800"
            src="https://37841823.sibforms.com/serve/MUIFAAlnFGuNd7I0wpjoTep_XQAqcOcoPrpPYn5iwuUhSK0pN0Xf4dESStk6GAe5rLEeg_CzfhmgIkaAsstj4fXAGbYhfQpqYCW8UfOriV6cwDF1X_wQ1B8YVHhwyXj3TSGoUN-r9EgieSd2jtovl4m9bSpi7KRMrr-oV9CfiPU8WatslMcaCKMCebtSo6ab-Nf73aAdnLjqwVz1"
            frameborder="0"
            scrolling="auto"
            allowfullscreen
          ></iframe>
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
