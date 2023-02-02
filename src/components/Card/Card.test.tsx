import React from "react";
import { render, screen } from "@testing-library/react";
import CardWorkout from "./index";
import { BrowserRouter } from "react-router-dom";

window.scrollTo = jest.fn();

const workout = {
  description:
    "Enjoy a fun and low impact workout with Kelsey. We will engage a full body workout and get your heart rate up!",
  thumbnail: "https://cgcdn.s3.amazonaws.com/nation/users/UID-V1421773844UID-54be8c1417ad6.png",
  levelTag: "beginner",
  media: "https://virtual-library.s3.amazonaws.com/Week4-RuthMallory.mp4",
  title: "Endurance by Kelsey Sage",
  impactTag: "low",
  id: "1",
  trainerId: "1",
  duration: 60,
};
describe("initial card workout state", () => {
  beforeEach(() => {
    global.window = window;
    window.scroll = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
  });
  test("The card workout displays the correct title", () => {
    render(
      <BrowserRouter>
        <CardWorkout workout={workout} />
      </BrowserRouter>,
    );
    const cardWorkout = screen.getByTestId("card-workout");
    expect(cardWorkout.textContent).toBe(
      "Endurance by Kelsey SageLevelbeginnerImpactlowDuration 60mEnjoy a fun and low impact workout with Kelsey. We will engage a full body workout and get your heart rate up!",
    );
  });

  test("The card workout displays the correct workoutId", () => {
    render(
      <BrowserRouter>
        <CardWorkout workout={workout} />
      </BrowserRouter>,
    );
    const cardWorkout = screen.getByTestId("card-workout");
    expect(cardWorkout?.querySelector("a")?.href).toBe("http://localhost/1");
  });
});
