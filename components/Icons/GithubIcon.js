import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";
import IconLink from "../IconLink/IconLink";

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
