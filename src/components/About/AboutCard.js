import React from "react";
import Card from "react-bootstrap/Card";
import { ImArrowRight2, ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My fullname is
            <span className="purple"> Tran Van Binh </span>
            from<span className="purple"> Ha Noi, VietNam.</span>
            <br />
            <br />
            <ImArrowRight2 /> I am currently employed as a software developer at
            <span className="purple"> Imocha-Alpha.</span>
            <br />
            <ImArrowRight2 /> I have completed Control and Automation
            Engineering Technology at HaNoi university of Industry ( GPA 3.3/4
            ).
            <a
              className="purple"
              style={{ textDecoration: "none" }}
              href="https://vbcc.haui.edu.vn/?sc=3959a48229"
            >
              {" "}
              ( Here ){" "}
            </a>
            <br />
            <ImArrowRight2 /> Udacity Nanodegree Program - Cloud Developer
            <a
              className="purple"
              style={{ textDecoration: "none" }}
              href="https://graduation.udacity.com/confirm/A26DKJPZ"
            >
              {" "}
              ( Here ){" "}
            </a>
            <br /> <ImArrowRight2 /> Udacity Nanodegree Program - Data
            Structures & Algorithms
            <a
              className="purple"
              style={{ textDecoration: "none" }}
              href="https://graduation.udacity.com/confirm/3GHPUUD2"
            >
              {" "}
              ( Here ){" "}
            </a>
            <br /> <ImArrowRight2 /> Certified Professional Scrum Master I (PSM
            I) by Scrum.org, achieved Sep 29, 2022. - typing:
            binhlinh473@gmail.com
            <a
              className="purple"
              style={{ textDecoration: "none" }}
              href="https://www.scrum.org/certificates/820727"
            >
              {" "}
              ( Here ){" "}
            </a>
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
          <br></br>
          <p style={{ color: "rgb(155 126 172)" , fontSize: '22px'}}>
            "If you want to sit where nobody can sit, you must endure the feeling that
            nobody can't endure"{" "}
          </p>
          <footer className="blockquote-footer">MTP </footer> 
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
