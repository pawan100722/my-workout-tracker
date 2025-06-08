import { Routes, Route } from "react-router-dom";
import { WorkoutHistory } from "../pages/workout-history";
import { HomeComponent } from "../components/home-component";

export const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/history" element={<WorkoutHistory />} />
      {/* sidebar routes starts */}
      <Route path="/chest" element={<h1>Chest</h1>} />
      <Route path="/back" element={<h1>Back</h1>} />
      <Route path="/shoulders" element={<h1>Shoulders</h1>} />
      <Route path="/bicep" element={<h1>Bicep</h1>} />
      <Route path="/tricep" element={<h1>Tricep</h1>} />
      <Route path="/legs" element={<h1>Legs</h1>} />
      {/* sidebar routes ends */}
    </Routes>
  );
};
