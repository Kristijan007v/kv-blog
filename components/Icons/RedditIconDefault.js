import React from "react";
import { IconContext } from "react-icons";
import { BsReddit } from "react-icons/bs";

export default function RedditIconDefault({ onclick }) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "icon",
        }}
      >
        <BsReddit onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
