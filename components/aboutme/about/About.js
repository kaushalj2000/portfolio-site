import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Kaushal Javangula </b> 
                  and I am a <b className="purple">Data Analyst </b> 
                    student at <b className="purple">San Francisco State University </b>
                      in San Francisco, California.
                <br />
                <br />
                        I am proficient in various programming languages and databases such as &nbsp;
                  <b className="purple">
                    {" "}
                    Python, R, SQL, and Java, and tools like Power BI, Tableau, and Advanced MS Excel.{" "}
                  </b>
                <br />
                <br />
                I also have experience working with data science frameworks/libraries &nbsp;

                  <b className="purple">
                    {" "}
                    (Pandas, NumPy, Scikit-learn) and cloud platforms (AWS, Azure), as well as data engineering tools (PySpark, Docker, Git).{" "}
                  </b>
                <br />
                <br />
                Whenever possible, I also apply my passion for data-driven solutions
                through machine learning, &nbsp;
                  <b className="purple">
                    {" "}
                    ETL pipelines, and modern data warehousing (Snowflake, Redshift).
                  </b>
                <br />
                <br />In my free time, I enjoy learning new technologies and &nbsp;
                  <b className="purple">building projects in data analysis and engineering. </b>
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
