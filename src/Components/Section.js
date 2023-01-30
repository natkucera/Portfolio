import React from "react";

export default function Section({ title, subtitle, id, main=false }) {
  return (
    <div className={"section"}>
      <div className="section-content" id={id}>
        {main
          ? <h1>{title}</h1>
          : <h2>{title}</h2>
        } 
        
        {subtitle}
      </div>
    </div>
  );
}
