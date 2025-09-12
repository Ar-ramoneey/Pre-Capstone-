import AuthPage from "../component/AuthPage";
import LandingPage from "../component/LandingPage";
import Dashboard from "../component/Dashboard";
import Step1 from "../component/Step 1";
import Step2 from "../component/Step 2";
import Step3 from "../component/Step 3";
import Step4 from "../component/Step 4";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/step1" element={<Step1 />} />
      <Route path="/step2" element={<Step2 />} />
      <Route path="/step3" element={<Step3 />} />
      <Route path="/step4" element={<Step4 />} />
      <Route path="/Auth" element={<AuthPage />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
}
