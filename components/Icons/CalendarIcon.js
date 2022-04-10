import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineCalendar } from "react-icons/ai";

export default function CalendarIcon({ onclick }) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "icon__special",
        }}
      >
        <AiOutlineCalendar onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
