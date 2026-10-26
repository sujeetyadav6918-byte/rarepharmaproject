import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import ScrollAnimations from "./components/ScrollAnimations/ScrollAnimations";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Chatbot from "./components/Chatbot/Chatbot";

function App() {
  return (
    <div className="app">
      <SmoothScroll />
      <ScrollAnimations />
      <Navbar />
      <ScrollToTop/>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Products />} />

        <Route
          path="/products/:slug"
          element={<ProductDetails />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route path="/insights" element={<Insights />} />
      </Routes>

      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;