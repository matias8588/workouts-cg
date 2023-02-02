import React from "react";
import { Link } from "react-router-dom";
import { Content, Image, Wrapper } from "./CardWorkout.styles";
import { IWorkout } from "../../types";
import video from "../../assets/video.png";

const CardWorkout = ({ workout }: IWorkout) => (
  <Wrapper data-testid="card-workout">
    <div className="wrapper-img">
      <Link to={`/${workout?.id}`}>
        <Image img={workout.thumbnail} id="image-1"></Image>
      </Link>
    </div>
    <Content>
      <a href={workout.media} target="_blank" rel="noopener noreferrer">
        <h3>{workout.title}</h3>
      </a>

      <div className="info">
        <div className="data">
          <span className="data-title">Level: {workout.levelTag}</span>
        </div>
        <div className="data">
          <span className="data-title">Impact: {workout.impactTag}</span>
        </div>
        <div className="data">
          <span className="data-title">Duration: {workout.duration}m</span>
        </div>
      </div>
      <p className="description">{workout.description}</p>
      <a href={workout.media} target="_blank" rel="noopener noreferrer">
        <img src={video} alt="media" className="icon-media" width={30} height={"100%"} />
      </a>
    </Content>
  </Wrapper>
);

export default CardWorkout;
