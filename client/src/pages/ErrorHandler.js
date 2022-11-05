import React from "react";
import { useLocation } from "react-router-dom";

function ErrorHandler() {
  const url = useLocation().pathname.slice(1);
  return (
    <div>
      <p>{`sorry! this ´${url}´ not found`}</p>
    </div>
  );
}

export default ErrorHandler;
