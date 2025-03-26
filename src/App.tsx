import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { TeamDetail } from "./pages/TeamDetail";
import TermsOfService from "./modules/TermsOfService";
import PrivacyPolicy from "./modules/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team/:id" element={<TeamDetail />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
