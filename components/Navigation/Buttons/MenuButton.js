import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineMenu } from "react-icons/ai";

export default function MenuButton({ onclick }) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "icon",
        }}
      >
        <AiOutlineMenu onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
