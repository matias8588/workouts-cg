import React from "react";
import Home from "./templates/Home";
import { GlobalStyles } from "./global-styled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkoutData from "./components/WorkoutData";
import { AuthProvider } from "./context/workoutsContext";
import Header from "./components/Header";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <GlobalStyles />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:workoutId" element={<WorkoutData />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
