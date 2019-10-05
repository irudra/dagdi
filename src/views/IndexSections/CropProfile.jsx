import React from "react";
import { Col, Button, Row, Container, Card } from "reactstrap";
class CropProfile extends React.Component {
    render() {
        return (
            <>
         
                <main className="profile-page" ref="main">
                    <section className="section section-shaped ">
                        <div className="shape shape-style-1 shape-primary">
                            <span />
                            <span />
                            <span />
                        </div>
                    </section>
                    <section className="section">
                        <Container>
                            <Card className="card-profile shadow mt-sm">
                                <div className="px-4">
                                    <Row className="justify-content-center">
                                        <Col className="order-lg-2" lg="3">
                                            <div className="card-profile-image">
                                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                                    <img
                                                        alt="..."
                                                        className="rounded-circle"
                                                        src={require("assets/img/theme/413287.jpg")}
                                                    />
                                                </a>
                                            </div>
                                        </Col>
                                        <Col
                                            className="order-lg-3 text-lg-right align-self-lg-center"
                                            lg="4"
                                        >
                                            <div className="card-profile-actions py-4 mt-lg-0">
                                                <Button
                                                    className="mr-4"
                                                    color="info"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                    size="sm"
                                                >
                                                    Connect
                        </Button>
                                                <Button
                                                    className="float-right"
                                                    color="default"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                    size="sm"
                                                >
                                                    Message
                        </Button>
                                            </div>
                                        </Col>
                                        <Col className="order-lg-1" lg="4">
                                            <div className="card-profile-stats d-flex justify-content-center">
                                                <div>
                                                    <span className="heading">22</span>
                                                    <span className="description">Friends</span>
                                                </div>
                                                <div>
                                                    <span className="heading">10</span>
                                                    <span className="description">Photos</span>
                                                </div>
                                                <div>
                                                    <span className="heading">89</span>
                                                    <span className="description">Comments</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="text-center mt-5">
                                        <h3>
                                            Jessica Jones{" "}
                                            <span className="font-weight-light">, 27</span>
                                        </h3>
                                        <div className="h6 font-weight-300">
                                            <i className="ni location_pin mr-2" />
                                            Bucharest, Romania
                    </div>
                                        <div className="h6 mt-4">
                                            <i className="ni business_briefcase-24 mr-2" />
                                            Solution Manager - Creative Tim Officer
                    </div>
                                        <div>
                                            <i className="ni education_hat mr-2" />
                                            University of Computer Science
                    </div>
                                    </div>
                                    <div className="mt-5 py-5 border-top text-center">
                                        <Row className="justify-content-center">
                                            <Col lg="9">
                                                <p>
                                                    An artist of considerable range, Ryan — the name taken
                                                    by Melbourne-raised, Brooklyn-based Nick Murphy —
                                                    writes, performs and records all of his own music,
                                                    giving it a warm, intimate feel with a solid groove
                                                    structure. An artist of considerable range.
                        </p>
                                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                                    Show more
                        </a>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Card>
                        </Container>
                    </section>
                </main>
            </>
        );
    }
}

export default CropProfile;