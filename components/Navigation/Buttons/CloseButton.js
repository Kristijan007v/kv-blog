import React from "react";
import { IconContext } from "react-icons";
import { MdOutlineClose } from "react-icons/md";

export default function CloseButton({ onclick }) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "icon",
        }}
      >
        <MdOutlineClose onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
