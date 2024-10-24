import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import EmailEnviado from "./components/util/PageFormwhatsappJS.jsx";

import "./index.css";
import "./styles/backgrounds.css";
import "./styles/shapeDivs.css";
import LandingPage from "./pages/LandingPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/email-enviado" element={<EmailEnviado />} />
      {/* <Route path="/lpx1" element={<LandingPage />} /> */}
    </Routes>
  </Router>
);
