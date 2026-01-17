import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";

const Placeholder = ({ title }) => (
  <div style={{ padding: "80px", textAlign: "center" }}>
    <h1>{title}</h1>
    <p>Page coming soon.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/training" element={<Placeholder title="Training" />} />
        <Route path="/insights" element={<Placeholder title="Insights" />} />
        <Route path="/stocks/*" element={<Placeholder title="Stock Analysis" />} />
        <Route path="/about" element={<Placeholder title="About Us" />} />
        <Route path="/contact" element={<Placeholder title="Contact" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
