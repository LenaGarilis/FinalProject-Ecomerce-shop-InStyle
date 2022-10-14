import React from "react";
import "./papercut.scss";
import { Container } from "react-bootstrap";

function PaperCut({ value }) {
  return (
    <Container className="py-3">
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
    </Container>
  );
}

export default PaperCut;
