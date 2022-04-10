import React from "react";
import { IconContext } from "react-icons";
import { BsFacebook } from "react-icons/bs";

export default function FacebookIconDefault({ onclick }) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "icon",
        }}
      >
        <BsFacebook onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
