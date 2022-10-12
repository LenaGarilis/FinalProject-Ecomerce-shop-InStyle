import React from "react";
import reviews from "./reviewsdata.js";
import { Container } from "react-bootstrap";

function Reviews(props) {
  return (
    <Container className="py-3">
      <div id="testimonials">
        <div className="container">
          <div className="section-title text-center">
            <h2>CRITIC REVIEWS</h2>
          </div>
          <div className="row">
            {reviews.map(({ id, img, text, name }) => (
              <div key={id} className="col-md-4">
                <div className="testimonial">
                  <div className="testimonial-image">
                    <img key={img} src={img} alt="" />
                  </div>
                  <div className="testimonial-content">
                    <p key={text}>"{text}"</p>
                    <div key={name} className="testimonial-meta">
                      {" "}
                      - {name}{" "}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Reviews;
