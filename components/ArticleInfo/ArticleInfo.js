import React from "react";
import Calendar from "../Calendar/Calendar";
import Time from "../Time/Time";

export default function ArticleInfo() {
  return (
    <>
      <div className="flex justify-between pb-4">
        <Calendar />
        <Time />
      </div>
    </>
  );
}
