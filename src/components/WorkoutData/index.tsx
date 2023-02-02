import React, { useEffect, useState } from "react";
import { Image, Wrapper, Content, Text } from "./WorkoutData.styles";
import { useWorkout } from "../../context/workoutsContext";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { IWorkoutOBJ } from "../../types";

const WorkoutData = () => {
  const { getWorkout }: any = useWorkout();
  const { workoutId } = useParams();
  const [workout, setWorkout] = useState<IWorkoutOBJ>();

  useEffect(() => {
    setWorkout(getWorkout(workoutId));
  }, [workoutId, getWorkout]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper backdrop={workout?.thumbnail} data-testid="workout-data">
      <Content>
        <Image src={workout?.thumbnail} alt="workout-thumb" />
        <Text>
          <a href={workout?.media} target="_blank" rel="noopener noreferrer">
            <h1>{workout?.title}</h1>
          </a>

          <p>{workout?.description}</p>
          <div className="wrapper-info">
            <div>
              <h3>Level: {workout?.levelTag}</h3>
              <h3>Impact: {workout?.impactTag}</h3>
              <h3>Duration: {workout?.duration}</h3>
            </div>
          </div>
        </Text>
        <div className="media">
          <div className="player-wrapper">
            <ReactPlayer
              url={workout?.media}
              width={"100%"}
              height={"100%"}
              controls
              className="react-player"
            />
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default WorkoutData;
