import React from "react";
import buymedata from "./buymedata.js";
import "./buymeCard.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function Buyme(props) {
  return (
    <Container className="pb-3">
      {/* <div id="portfolio" className="text-center"> */}
      <div className="section-title">
        <h4 className="text-center py-3">Best Sellers in this category</h4>
      </div>

      <div className="row">
        <div className="portfolio-items1 ">
          {buymedata.map(({ id, title, name, price, smallImage }) => (
            <div key={id} className="portfolio-item1">
              <div className="hover-bg1">
                <a href={id} title={title} data-lightbox-gallery="gallery1">
                  <div className="hover-text1">
                    <h4 className="font-logo1">{title}</h4>
                    <h4 className="font-logo1">{name}</h4>
                    <h2 className="font-logo1"> € {price}</h2>
                  </div>
                  <img
                    src={smallImage}
                    className="img-responsive1"
                    alt={title}
                  />
                  {/* <div>{name}</div>
                    <div>€{price}</div> */}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Buyme;
