import Link from "next/link";
import React from "react";
import { IconContext } from "react-icons";

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
