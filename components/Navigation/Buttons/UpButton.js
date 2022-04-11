import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function CloseButton({ onclick }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <IconContext.Provider
        value={{
          className: "",
        }}
      >
        <button className="btn__fixed" onClick={scrollToTop}>
          <AiOutlineArrowUp />
        </button>
      </IconContext.Provider>
    </>
  );
}
