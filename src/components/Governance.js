import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components

function Governance() {
  return (
    <div className="features-8 govern section-image"
      style={{
        backgroundImage: "url(" + require("assets/img/bg22.jpg") + ")",
      }}>
      <Col className="mr-auto ml-auto text-center" md="8">
        <h2 className="title">Governance
</h2>
        <h4 className="description">
          <p className="comment dark">Cashless is a Distributed Autonomous Organisation</p>
        </h4>
      </Col>
      <Container fluid>
        <Row>
          <Col className="px-0" md="6">
            <Col sm="12">
              <div className="info info-horizontal">
                <div className="icon">
                  <i className="now-ui-icons design-2_html5"></i>
                </div>
                <div className="description">
                  <h5 className="info-title">DAO to differ</h5>
                   <p className="description">Join Cashless and you're not joining a company, you're joining a community of like minded individuals building software and communities that matter.</p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon">
                  <i className="now-ui-icons design_palette"></i>
                </div>
                <div className="description">
                  <h5 className="info-title">Committed to Open Source</h5>
                  <p className="description">
                    Cashless is an open source MPL licensed protocol with a truly open source reference implementation. There are no 'hooks' or embedded crypto tokens required to run it. We want anyone and everyone to be able to build on this protocol. 
                  </p>
                </div>
              </div>
 <div className="info info-horizontal">
                <div className="icon">
                  <i className="now-ui-icons design_palette"></i>
                </div>
                <div className="description">
                  <h5 className="info-title">Business model</h5>
                  <p className="description">
                    Cashless hopes to create a million communities that build on top of the open protocol. Their success directly influences our success and vice versa. Cashless will make early investments (and eventually automated investments) in the communities that issue community tokens on top of Cashless protocol, using Cashless software.
                    </p>
                    <p className="description">Cashless will be building an AI recommendation business, which will essentially act as a concierge to facilitate credit worthy  transactions. It won't be necessary to use this particular app, but it will be an option amongst many that allows you to interact with the protocol in a way optimized for your success.
                  </p>
                </div>
              </div>
            </Col>
          </Col>
          <Col className="px-0" md="6">
            <Col sm="12">
              <div className="info info-horizontal">
                <div className="icon">
                  <i className="now-ui-icons design-2_ruler-pencil"></i>
                </div>
                <div className="description">
                  <h5 className="info-title">The Cashless DAO</h5>
                  <p className="description">
                    Cashless is an organisation of people building software and communities that run on top of that protocol. You don't have to be part of our organisation to contribute to the protocol, but if you want to become a member of the DAO you can earn governance tokens that will give you voting rights in the DAO and a share of any profits generated down the line. 
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon">
                  <i className="now-ui-icons design-2_ruler-pencil"></i>
                </div>
                <div className="description">
                  <h5 className="info-title">Coin offering</h5>
                  <p className="description">
                    Governance tokens are not currently available for sale, but there will eventually be a coin offering that will also allow investors to take part in our success. 
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon">
                  <i className="now-ui-icons design-2_ruler-pencil"></i>
                </div>
                <div className="description">
                  <h5 className="info-title">Current status</h5>
                  <p className="description">
                    Right now we are just a group of people building apps that matter. We are still evaluating the best ways to establish our DAO. This is a decision that needs to be made carefully. Once we launch the DAO, anyone with an interest in becoming a part of our innovation community will be able to sign the agreement, become a member and start earning (or investing in) governance tokens. 
                  </p>
                </div>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Governance;

