import React from "react";

export default function Tag({ text, special }) {
  return (
    <>
      <p
        className={`text-white text-sm pt-2 pr-4 pb-2 pl-4 w-1/4 text-center ${
          special == "yes" ? "bg-special" : "bg-secondary"
        } rounded-md`}
      >
        {text}
      </p>
    </>
  );
}
