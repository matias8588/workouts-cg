import React, { useEffect } from "react";
import CardWorkout from "../../components/CardWorkout";
import { Content, Wrapper, WrapperTitle } from "./Home.styles";
import { useWorkout } from "../../context/workoutsContext";
import { IWorkoutOBJ } from "../../components/CardWorkout/types";

const Home = () => {
  const { workouts }: any = useWorkout();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Wrapper>
        <WrapperTitle>
          <h1> </h1>
        </WrapperTitle>
        <Content id="content-cards">
          {workouts
            ? workouts.map((workout: IWorkoutOBJ) => {
                return <CardWorkout key={workout.id} workout={workout} />;
              })
            : null}
        </Content>
      </Wrapper>
    </>
  );
};

export default Home;
