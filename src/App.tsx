import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import ProjectIntro from "@/pages/ProjectIntro";
import GameEcology from "@/pages/GameEcology";
import Technology from "@/pages/Technology";
import Tokenomics from "@/pages/Tokenomics";
import Whitepaper from "@/pages/Whitepaper";
import OpenSource from "@/pages/OpenSource";
import Cooperation from "@/pages/Cooperation";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<ProjectIntro />} />
            <Route path="/game" element={<GameEcology />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/tokenomics" element={<Tokenomics />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
            <Route path="/opensource" element={<OpenSource />} />
            <Route path="/cooperation" element={<Cooperation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
