import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import ucsc from "../../images/ucsc.png";
import ufm from "../../images/ufm.png";
import nh from "../../images/nh.jpg";
import nactar from "../../images/nactar.jpg";
import ccna from "../../images/CCNA_Certificate.jpg";
import cbta from "../../images/CBT&A.pdf";
import skill from "../../images/skill.png";
import c from "../../images/c.jpg";
import iq from "../../images/IQ_Test.jpg";
import fabric from "../../images/fabric.png";
import stanford from "../../images/stanford.png";
import google from "../../images/google.png";
import computer from "../../images/Computer_knowledge.jpg";
import graphics from "../../images/Graphics_Design.jpg";
import Particle from "../../Particle";
export default function CertificatePage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176" }}>Certificates</h1>
            </Zoom>
          </div>
          <div>
            <div>
              <Container fluid className="certificate-section" id="about">
                <Container>
                  <Row>
                    <Col md={12} className="mt-5">
                      <Row className="g-5">
                        <Col md={4} className="col-sm-12 col-md4">
                          <Fade bottom duration={2000} distance="20px">
                            <div className="cert-card">
                              <div className="content">
                                <a
                                  href="https://learn.microsoft.com/api/credentials/share/en-us/KaushalJavangula-3212/32646BBD44647E6D?sharingId"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div
                                    className="cert-header"
                                    style={{ backgroundColor: "white" }}
                                  >
                                    {
                                      <img
                                        className="logo_img"
                                        src={fabric}
                                        alt={fabric}
                                      />
                                    }
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <h3
                                      className="content-title"
                                      style={{ color: "black" }}
                                    >
                                      Certificate
                                    </h3>
                                  </div>
                                </a>
                              </div>
                              <div className="cert-body">
                                <h2
                                  className="cert-body-title"
                                  style={{ fontWeight: 700, color: "#fbd9ad" }}
                                >
                                  Microsoft Certified: Fabric Analytics Engineer Associate
                                </h2>
                                <h3
                                  className="cert-body-subtitle"
                                  style={{
                                    color: "#eb90ff",
                                    marginBottom: "0px",
                                  }}
                                >
                                  - Microsoft
                                                          </h3>
                                                        </div>
                                                      </div>
                                                    </Fade>
                                                  </Col>
                                                  <Col md={4}>
                                                    <Fade bottom duration={2000} distance="20px">
                                                      <div className="cert-card">
                                                        <div className="content">
                                                          <a
                                                            href="https://www.coursera.org/account/accomplishments/specialization/certificate/ND5FS8W6CZW6"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                          >
                                                            <div className="content-overlay"></div>
                                                            <div
                                                              className="cert-header"
                                                              style={{ backgroundColor: "white" }}
                                                            >
                                                              {<img className="logo_img" src={google} alt={google} />}
                                                            </div>
                                                            <div className="content-details fadeIn-top">
                                                              <h3
                                                                className="content-title"
                                                                style={{ color: "black" }}
                                                              >
                                                                Certificate
                                                              </h3>
                                                            </div>
                                                          </a>
                                                        </div>
                                                        <div className="cert-body">
                                                          <h2
                                                            className="cert-body-title"
                                                            style={{ fontWeight: 700, color: "#fbd9ad" }}
                                                          >
                                                            Introduction to Statistics by Stanford
                                                          </h2>
                                                          <h3
                                                            className="cert-body-subtitle"
                                                            style={{ color: "#eb90ff", marginBottom: "0px" }}
                                                          >
                                                            - Coursera
                                                          </h3>
                                                        </div>
                                                      </div>
                                                    </Fade>
                                                  </Col>
                                                  <Col md={4}>
                                                    <Fade bottom duration={2000} distance="20px">
                                                      <div className="cert-card">
                                                        <div className="content">
                                                          <a
                                                            href="https://www.coursera.org/account/accomplishments/certificate/U9R2M5CNKZJS"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                          >
                                                            <div className="content-overlay"></div>
                                                            <div
                                                              className="cert-header"
                                                              style={{ backgroundColor: "white" }}
                                                            >
                                                              {<img className="logo_img" src={stanford} alt={stanford} />}
                                                            </div>
                                                            <div className="content-details fadeIn-top">
                                                              <h3
                                                                className="content-title"
                                                                style={{ color: "black" }}
                                                              >
                                                                Certificate
                                                              </h3>
                                                            </div>
                                                          </a>
                                                        </div>
                                                        <div className="cert-body">
                                                          <h2
                                                            className="cert-body-title"
                                                            style={{ fontWeight: 700, color: "#fbd9ad" }}
                                                          >
                                                            Google Data Analytics Professional Certificate
                                                          </h2>
                                                          <h3
                                                            className="cert-body-subtitle"
                                                            style={{ color: "#eb90ff", marginBottom: "0px" }}
                                                          >
                                                            - Coursera
                                </h3>
                              </div>
                            </div>
                          </Fade>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </div>
          </div>
          <div className="blog--viewAll"></div>
        </Container>
      </Container>
    </section>
  );
}
