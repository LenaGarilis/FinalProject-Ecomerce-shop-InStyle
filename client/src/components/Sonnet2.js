import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function Sonnet2() {
  return (
    <div className="  md-3 ">
      <Card>
        <Card.Header>
          <strong>BEARS 💛 HONEY</strong>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            Shoes made by hand in St. Petersburg from the best Italian
            materials!
          </Card.Title>
          <Card.Text>
            <p>
              <ListGroup variant="flush">
                <ListGroup.Item variant="primary">
                  Design: handmade in St. Petersburg
                </ListGroup.Item>
                <ListGroup.Item variant="success">
                  Color: colored
                </ListGroup.Item>
                <ListGroup.Item variant="primary">
                  Outer Material: Genuine Leather Printed Genuine Leather
                </ListGroup.Item>
                <ListGroup.Item variant="success">
                  Inner material: beige genuine leather
                </ListGroup.Item>
                <ListGroup.Item variant="primary">
                  Insole: genuine leather beige
                </ListGroup.Item>
                <ListGroup.Item variant="success">
                  Sole: special wear-resistant velor
                </ListGroup.Item>
              </ListGroup>
            </p>
            <p>
              A joint collaboration between rxbshoes and Andrey Bartenev, one of
              the most recognizable contemporary artists. His work refers us to
              childish sincerity, to pure emotions and the joy of life that goes
              on, no matter what. This collection is beautiful and
              life-affirming. And the bears turned out to be not only childishly
              cute, but also mysterious: smiling slyly, they know something, but
              do not speak.
            </p>
            <p>
              The return of the goods to the warehouse of the seller is carried
              out by the Buyer. The Seller shall send the goods to the Buyer as
              a replacement at his own expense.
            </p>
            <Card.Body>
              <Card.Title>
                If you really like the products of this company,{" "}
              </Card.Title>
              <Card.Text>then you can buy it here:</Card.Text>
              <Card.Link href="https://rxbshoes.com/">
                <Button size="sm" variant="success">
                  WebPage
                </Button>{" "}
              </Card.Link>
            </Card.Body>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Sonnet2;
