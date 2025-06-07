import { BrowserRouter, Route, Routes } from "react-router";
import '../styles/routes.css';
import { HomeComponent } from "../components/home-component";


export default function NavbarRoutes() {
  return (
    <div className="navbar-routes-container">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/history" element={<h1> WORKOUT HISTORY</h1>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

