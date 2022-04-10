import React from "react";
import CloseButton from "../Navigation/Buttons/CloseButton";

export default function Search() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-primary p-6 z-20 flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <input type="text" className="p-2" placeholder="Search..." />
        <CloseButton />
      </div>
      <p>See posts by tags</p>
      <p>See posts by categories</p>
    </div>
  );
}
