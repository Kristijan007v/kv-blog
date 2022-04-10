import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";

export default function CloseButton({ onclick }) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "icon",
        }}
      >
        <AiOutlineClose onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
