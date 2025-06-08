import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainComponent } from "./components/main-component";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <MainComponent />
    </HashRouter>
  </StrictMode>
);
