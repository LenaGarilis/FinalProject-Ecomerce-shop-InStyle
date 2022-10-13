import React from "react";
import "./papercutBlouses.scss";

function PaperCutBlouses() {
  const Text = ({ value }) => (
    <div className="banner-heading-b">
      <div className="text-banner">
        {value.split("").map((char, i) => (
          <div className="letter" style={{ "--delay": `${i * 0.2}s` }}>
            <span className="source">{char}</span>
            <span className="shadow">{char}</span>
            <span className="overlay">{char}</span>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div>
      <Text value="*blouses*" />
    </div>
  );
}

export default PaperCutBlouses;
