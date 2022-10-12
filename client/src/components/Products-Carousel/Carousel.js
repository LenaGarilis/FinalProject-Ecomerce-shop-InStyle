import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import data from "./productsData";
import "./carousel.css";

export default function Carousel(props) {
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <div>
      <section className="carousel-section">
        <div className="row">
          <OwlCarousel className="owl-carousel owl-theme " {...options}>
            {data.map(({ id, image }) => {
              return (
                <div className="col-lg-12" key={id}>
                  <div className="product-item">
                    <img
                      key={image}
                      src={image}
                      alt="no internet connection"
                    ></img>
                  </div>
                </div>
              );
            })}
          </OwlCarousel>
        </div>
      </section>
    </div>
  );
}
