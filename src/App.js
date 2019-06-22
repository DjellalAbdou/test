import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Subtotal from "./components/Subtotal";
import TotalPrice from "./components/TotalPrice";
import ItemDetails from "./components/ItemDetails";
import Promo from "./components/Promo";
import Data from "./components/data";
import PickupWithTooltip from "./components/pickupWithTooltip";
import TaxesFees from "./components/TaxesFees";

function App() {
  return (
    <Container className="container">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div className="mycard">
            <Subtotal price={Data.subtotal} />
            <PickupWithTooltip saving={Data.savings} />
            <TaxesFees
              price={Data.subtotal}
              saving={Data.savings}
              tax={Data.tax}
            />
            <hr />
            <TotalPrice
              price={Data.subtotal}
              saving={Data.savings}
              tax={Data.tax}
            />
            <ItemDetails />
            <Promo />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
