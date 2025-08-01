import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PayazaLandingPage from "./components/PayazaLandingPage";
import ApplicationFormFlow from "./components/Application Form/ApplicationFormFlow";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PayazaLandingPage />} />
        <Route path="/apply/*" element={<ApplicationFormFlow />} />
      </Routes>
    </Router>
  );
}

export default App;
