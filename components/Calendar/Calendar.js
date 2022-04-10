import React from "react";
import CalendarIcon from "../Icons/CalendarIcon";

export default function Calendar() {
  return (
    <div className="flex items-center space-x-4 text-gray-700 dark:text-grayInfo font-bold text-lg">
      <CalendarIcon />
      <p>Dec 5, 2022</p>
    </div>
  );
}
