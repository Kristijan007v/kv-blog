import React from "react";
import ClockIcon from "../Icons/ClockIcon";

export default function Time() {
  return (
    <div className="flex items-center space-x-4 text-gray-700 dark:text-grayInfo font-bold text-lg">
      <ClockIcon />
      <p>01 min read</p>
    </div>
  );
}
