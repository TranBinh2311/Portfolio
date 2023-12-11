import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My fullname is <span className="purple"> Tran Van Binh </span>
            from <span className="purple"> Ha Noi, VietNam.</span>
            <br />
            I am currently employed as a software developer at <span className="purple"> Imocha-Alpha.</span>
            <br />
            I have completed Control and Automation Engineering Technology at HaNoi university of Industry ( GPA 3.3/4 ).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Modern Web
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you don’t walk today. You”ll have to to run tomorrow!"{" "}
          </p>
          <footer className="blockquote-footer">Binh Tran</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
