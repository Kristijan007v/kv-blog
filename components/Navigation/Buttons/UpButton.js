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
          className: "text-white dark:text-black",
        }}
      >
        <button
          className="btn__fixed"
          onClick={scrollToTop}
          aria-label="Go to the top"
        >
          <AiOutlineArrowUp />
        </button>
      </IconContext.Provider>
    </>
  );
}
