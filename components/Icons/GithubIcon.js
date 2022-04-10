import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineGithub } from "react-icons/ai";

export default function GithubIcon({ onclick }) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "icon__social",
        }}
      >
        <AiOutlineGithub onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
