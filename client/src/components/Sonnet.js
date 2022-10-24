import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Sonnet() {
  return (
    <div className=" md-3 ">
      <Card>
        <Card.Header className="font-logo1">
          <strong>
            {" "}
            <h5> BEARS 💛 HONEY </h5>{" "}
          </strong>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            Shoes made by hand in St. Petersburg from the best Italian
            materials!
          </Card.Title>
          <Card.Text>
            <p>
              We create not just shoes, but functional works of art. We invite
              you to become a collector! Subscribe to our page VKontakte, follow
              the news and special offers.
            </p>
            <p variant="success">
              If you do not like the purchased item, and you would like to
              return or exchange it, please let us know by phone or email within
              14 days from the date of receipt of the order (no later). A
              prerequisite for the exchange and return is that the product was
              not in use, has labels, packaging is preserved and has a
              presentation.
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

export default Sonnet;
