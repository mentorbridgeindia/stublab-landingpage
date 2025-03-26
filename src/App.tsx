import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { TeamDetail } from "./pages/TeamDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team/:id" element={<TeamDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
