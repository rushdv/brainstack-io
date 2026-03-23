import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Apps from "./pages/Apps";
import AppDetails from "./pages/AppDetails";
import Installation from "./pages/Installation";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/apps/:id" element={<AppDetails />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
      </div>
    </Router>
  );
}

export default App;
