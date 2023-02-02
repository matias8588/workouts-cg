export interface IWorkoutOBJ {
  description: string;
  thumbnail: string;
  levelTag: string;
  media: string;
  title: string;
  impactTag: string;
  id: string;
  trainerId: string;
  duration: number;
}

export interface IWorkout {
  workout: IWorkoutOBJ;
}
