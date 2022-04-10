import React from "react";
import { IconContext } from "react-icons";
import { BsInstagram } from "react-icons/bs";

export default function InstagramIconDefault({ onclick }) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "icon",
        }}
      >
        <BsInstagram onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
