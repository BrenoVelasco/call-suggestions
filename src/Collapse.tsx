import React, { useState } from "react";

export default function Collapse({ enabled, title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex" onClick={() => setOpen((prev) => !prev)}>
        <p>{enabled}</p>
        <h2>{title}</h2>
        {children && <div>\/</div>}
      </div>
      <div className="ml-16">{open && children}</div>
    </div>
  );
}
