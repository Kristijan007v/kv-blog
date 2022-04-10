import React from "react";
import { IconContext } from "react-icons";
import { BsWhatsapp } from "react-icons/bs";

export default function WhatsappIconDefault({ onclick }) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "icon",
        }}
      >
        <BsWhatsapp onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
