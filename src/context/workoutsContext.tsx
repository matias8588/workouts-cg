import { createContext, useContext } from "react";
import React, { useEffect, useState } from "react";

export const WorkoutContext = createContext({});

export const useWorkout = () => {
  const context = useContext(WorkoutContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};
interface WorkoutContextProps {
  children?: React.ReactNode;
}

export const AuthProvider = ({ children }: WorkoutContextProps) => {
  const [workouts, setWorkouts] = useState<any | null>(null);

  const getWorkouts = async () => {
    const response = await (await (await fetch("workouts.json",{
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })).json());
    setWorkouts(response.data);
  };

  const getWorkout = (workoutId: string) => {
    return workouts?.find((workout: any) => workout.id === workoutId);
  };

  useEffect(() => {
    getWorkouts();
  }, []);

  return (
    <WorkoutContext.Provider
      value={{
        workouts,
        getWorkout,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default AuthProvider;
