import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { poseImages } from "../../utils/pose_images";
import { useNavigate } from "react-router-dom";

export default function Home({ poseList, currentPose, setCurrentPose }) {
  const cardInfo = [
    { image: "", title: "Tree", text: "er" },
    { image: "", title: "chair", text: "wer" },
    { image: "", title: "cobra", text: "sdd" },
    { image: "", title: "warrior", text: "asdf" },
    { image: "", title: "dog", text: "er" },
    { image: "", title: "shoulderstand", text: "wer" },
    { image: "", title: "triangle", text: "sdd" },
    { image: "", title: "ggg", text: "asdf" },
  ];
  const navigate = useNavigate();
  const renderCard = (card, index) => {
    const routeChange = () => {
      // let path = `newPath`;
      //navigate("/start", index);
      navigate("/start", { state: index });
      console.log(index);
    };
    return (
      <Card
        style={{ width: "18rem" }}
        key={index}
        className="box"
        onClick={routeChange}
      >
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };
  return (
    <div>
      <div className="home-container">
        <div className="home-header">
          <h1 className="home-heading">Yoga Buddy</h1>
          <div className="home-list">
            <Link to="/start">
              <button className="btn btn-secondary" id="about-btn">
                Let's Start
              </button>
            </Link>
            <Link to="/about">
              <button className="btn btn-secondary" id="about-btn">
                About
              </button>
            </Link>

            <Link to="/tutorials">
              <button className="btn btn-secondary" id="about-btn">
                Tutorials
              </button>
            </Link>
          </div>
        </div>

        <h1 className="description">Yoga Buddy</h1>
        {/*<div className="home-main">
        <div className="btn-section">
          <div className="para-class"></div>
        </div>
      </div>*/}
      </div>
      {/*
      <div style={{ width: "230px", height: "230px", cursor: "pointer" }}>
        <Card
          style={{
            color: "black",
            maxWidth: "5000px",
            boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
            border: "2px solid #0b5ed7",
            // borderColor: "#0b5ed7",
            //  borderRadius: "10px",
            paddingBottom: "10px",
            marginTop: 20,
            backgroundColor: "#fafafa",
          }}
        >
          <div></div>

          <CardContent>
            <Typography color="primary" variant="h5" type="bold">
              hello
            </Typography>
          </CardContent>
        </Card>
      </div>
      */}
      <div className="grid">{cardInfo.map(renderCard)}</div>
    </div>
  );
}
