import React from "react";
import "./papercut.scss";

function PaperCut() {
  const Text = ({ value }) => (
    <div className="banner-heading">
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
      <Text value="*slippers*" />
    </div>
  );
}

export default PaperCut;
