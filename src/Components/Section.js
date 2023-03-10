import React from "react";

export default function Section({ title, subtitle, id }) {
  return (
    <div className={"section"}>
      <div className="section-content" id={id}>
        <h3>{title}</h3>
        {subtitle}
      </div>
    </div>
  );
}
