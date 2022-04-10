import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineGithub } from "react-icons/ai";

export default function GithubIcon({ onclick, link }) {
  return (
    <>
      {link ? (
        <AiOutlineGithub />
      ) : (
        <IconContext.Provider
          value={{
            className: "icon__social",
          }}
        >
          <AiOutlineGithub />
        </IconContext.Provider>
      )}
    </>
  );
}
