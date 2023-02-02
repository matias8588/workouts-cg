import React from "react";
import { Link } from "react-router-dom";
import { Content, Image, Wrapper } from "./Card.styles";
import { IWorkout } from "./types";

const CardWorkout = ({ workout }: IWorkout) => (
  <Wrapper data-testid="card-workout">
    <div className="wrapper-img">
      <Link to={`/${workout?.id}`}>
        <Image img={workout.thumbnail} id="image-1"></Image>
      </Link>
    </div>
    <Content>
      <h3>{workout.title}</h3>
      <div className="info">
        <div className="data">
          <span className="data-title">Level</span>
          <span>{workout.levelTag}</span>
        </div>
        <div className="data">
          <span className="data-title">Impact</span>
          <span>{workout.impactTag}</span>
        </div>
        <div className="data">
          <span className="data-title">Duration</span>
          <span> {workout.duration}m</span>
        </div>
      </div>
      <p className="description">{workout.description}</p>
    </Content>
  </Wrapper>
);

export default CardWorkout;
