import React from "react";

export default function ErrorFallback({ moduleName, error }) {
  return (
    <div>
      There was an error in loading {moduleName} module. Please try to refresh
      the page and try again.
    </div>
  );
}
