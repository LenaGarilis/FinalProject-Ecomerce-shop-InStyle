import { useEffect, useRef } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../features/productList/productListSlice";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Banner from "../components/Banner";
import PaperCut from "../components/PaperCut/PaperCut";

import Carousel from "../components/Products-Carousel/Carousel";
import Offer from "../components/Offer";
import Reviews from "../components/Reviews/Reviews";

function HomeScreen(props) {
  const { isLoading, isError, products, message } = useSelector(
    (state) => state.productList
  );

  const dispatch = useDispatch();
  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      dispatch(listProducts());
      console.log("effect ran");
      return () => {
        effectRan.current = true;
        console.log(`unmounted`);
      };
    }
  }, [dispatch]);

  return (
    <div>
      <Banner />
      <div className="mainPage-top">
        <PaperCut value="*slippers*" />
        <div className="main-container">
          <Container className="products-container">
            <div className="py-3">
              {/* <h1>Latest Products</h1> */}
              {isLoading ? (
                <Loader />
              ) : isError ? (
                <Message>{message}</Message>
              ) : (
                <Row>
                  {products.map((product, i) => (
                    <Col key={i} sm={12} md={6} lg={4} xl={3}>
                      <Product product={product} />
                    </Col>
                  ))}
                </Row>
              )}
            </div>
          </Container>

          <Carousel />
          <Offer />
          <PaperCut value="*blouses*" />
          <Reviews />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
