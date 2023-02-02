import React, { useEffect, useState } from "react";
import { Image, Wrapper, Content } from "./WorkoutData.styles";
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
