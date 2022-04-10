import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchButton({ onclick }) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "icon",
        }}
      >
        <AiOutlineSearch onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
