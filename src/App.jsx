import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import BusinessCard from "./pages/BusinessCard";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import PromoBanner from "./components/PromoBanner";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/businessCard" element={<BusinessCardLayout />} />
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/about"
            element={
              <MainLayout>
                <About />
              </MainLayout>
            }
          />
          <Route
            path="/services"
            element={
              <MainLayout>
                <ServicesPage />
              </MainLayout>
            }
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

// Layout for the Business Card page without NavBar and Footer
function BusinessCardLayout() {
  return <BusinessCard />;
}

// Main layout including NavBar, Home page, and Footer
function MainLayout({ children }) {
  return (
    <>
      <PromoBanner />
      <NavBar />
      {children}
      <Footer />
      <FloatingLogo />
    </>
  );
}

// Floating WhatsApp logo
function FloatingLogo() {
  const whatsappURL =
    "https://wa.me/+573106942538?text=Hola!%20Estoy%20interesado%20en%20agendar%20una%20cita.";
  return (
    <div
      className="floating-logo"
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        zIndex: "9999",
      }}
    >
      <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
        <i className="bx bxl-whatsapp-square"></i>
      </a>
    </div>
  );
}

export default App;
