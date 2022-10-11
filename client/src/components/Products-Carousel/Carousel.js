import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Carousel(props) {
  return (
    <div>
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="products-carousel">
              <div className="col-lg-12">
                <div className="product-item"></div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
