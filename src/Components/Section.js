import React from "react";

export default function Section({ subtitle, id }) {
  return (
    <div className={"section"}>
      <div className="section-content" id={id}>
        {subtitle}
      </div>
    </div>
  );
}
