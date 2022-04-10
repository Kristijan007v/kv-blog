import React from "react";
import { IconContext } from "react-icons";
import { AiFillLinkedin } from "react-icons/ai";

export default function LinkedInIcon({ onclick }) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "icon__social",
        }}
      >
        <AiFillLinkedin onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
