import React from "react";
import CalendarIcon from "../Icons/CalendarIcon";

export default function Calendar({ date }) {
  return (
    <div className="flex items-center space-x-4 text-gray-700 dark:text-grayInfo font-bold text-lg">
      <CalendarIcon />
      <p>{date}</p>
    </div>
  );
}
