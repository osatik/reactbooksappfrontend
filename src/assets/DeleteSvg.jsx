import React from "react";

function DeleteSvg({color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ msFilter: "" }}
      fill={color || "rgba(0, 0, 0, 1)"}
    >
      <path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 001 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm.706 13.293l-1.414 1.414L12 13.415l-3.292 3.292-1.414-1.414 3.292-3.292-3.292-3.292 1.414-1.414L12 10.587l3.292-3.292 1.414 1.414-3.292 3.292 3.292 3.292z"></path>
    </svg>
  );
}

export default DeleteSvg;

