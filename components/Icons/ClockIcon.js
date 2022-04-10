import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function ClockIcon({ onclick }) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "icon__special",
        }}
      >
        <AiOutlineClockCircle onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
