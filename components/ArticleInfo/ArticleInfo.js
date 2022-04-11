import React from "react";
import Calendar from "../Calendar/Calendar";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Time from "../Time/Time";

export default function ArticleInfo() {
  return (
    <>
      <ErrorBoundary>
        <div className="flex justify-between pb-4">
          <Calendar />
          <Time />
        </div>
      </ErrorBoundary>
    </>
  );
}
