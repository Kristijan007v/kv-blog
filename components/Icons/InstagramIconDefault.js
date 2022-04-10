import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineInstagram } from "react-icons/ai";

export default function InstagramIconDefault({ onclick }) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "icon__social",
        }}
      >
        <AiOutlineInstagram onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
