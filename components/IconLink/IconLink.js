import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";

export default function IconLink({ onclick, link, iconComponent }) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "link__icon",
        }}
      >
        <Link href={`${link}`}>{iconComponent}</Link>
      </IconContext.Provider>
    </>
  );
}
