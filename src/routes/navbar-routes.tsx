import { Route, Routes } from "react-router";
import '../styles/routes.css';
import { HomeComponent } from "../components/home-component";
import { WorkoutHistory } from "../pages/workout-history";


export default function NavbarRoutes() {
  return (
    <div className="navbar-routes-container">
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/history" element={<WorkoutHistory/>} />
      </Routes>
    </div>
  );
}

