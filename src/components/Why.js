import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Why() {
  return (
  <>
    <div id="why" className="features-8 cashless-features bg-sunset">
      <Container>
        <Row>
          <Col md={7} className="pr-5">
            <h2 className="title">Why?</h2>
            <div>
              <h3 className="info-title">Build community</h3>
              <p className="lead">
               Community organizers have long known that interest free mutual credit is an amazing tool for helping communities grow and become self reliant. But until now, such communities have lacked the extra liquidity and transparency that cashless credit can provide.
              </p>
              <img alt="money" src={require("assets/img/graphic-money.svg")} width={60} className="mr-4"></img>
              <img alt="time" src={require("assets/img/graphic-time.svg")} width={60}></img>
            </div>
          </Col>
          <Col md={5}>
            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_fjv8qxqn.json"  background="transparent"  speed="0.6"  style={{width: "100%", height: "auto"}}  loop  autoplay></lottie-player>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <div>
              <div>
                <h3 className="info-title">End Poverty</h3>
                <p className="lead">
                  Credit unions, micro-credit and community banks are well known to be effective ways to lift communities out of poverty. Cashless leverages recent advances in distributed finance and cryptography to do the same thing without banks, and without interest, in a much more scalable way.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} className="order-md-first">
            <img
              alt="work together"
              src={require("assets/img/clip-brainstorm.png")}
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  </>
  );
}

export default Why;
