import ComputerVision from "./pages/ComputerVision";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import AIDrivenWebsites from "./pages/AIDrivenWebsites";
import IntelligentSolutions from "./pages/IntelligentSolutions";
import Products from "./pages/Products";
import NeuralBackground from "./components/NeuralBackground";

const Placeholder = ({ title }) => (
  <div style={{ padding: "80px", textAlign: "center" }}>
    <h1>{title}</h1>
    <p>Page coming soon.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <NeuralBackground />
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* redirect /Home → / */}
        <Route path="/Home" element={<Navigate to="/" replace />} />

        {/* SERVICES */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/ai-driven-websites" element={<AIDrivenWebsites />} />
        <Route path="/services/intelligent-solutions" element={<IntelligentSolutions />} />

        {/* ✅ COMPUTER VISION PAGE */}
        <Route path="/computer-vision" element={<ComputerVision />} />

        {/* PRODUCTS */}
        <Route path="/Products" element={<Products />} />
        <Route path="/Blog/*" element={<Blog />} />
        <Route path="/contact" element={<Placeholder title="Contact" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
