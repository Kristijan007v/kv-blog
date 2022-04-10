import React from "react";

export default function DefaultButton({ text, centerMode }) {
  return (
    <>
      {centerMode ? (
        <div className="flex justify-center items-center">
          <button className="btn">{text}</button>
        </div>
      ) : (
        <button className="btn">{text}</button>
      )}
    </>
  );
}
