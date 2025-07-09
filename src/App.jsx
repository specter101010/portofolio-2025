import { useState } from "react";
import Navbar from './view/HEADER/header';
import Train from './components/train/train';
import './App.css';

import Skills from "./view/SKILLS/skills";
import About from "./view/ABOUT/about";
import Project from "./view/PROJECT/project";
import Education from "./view/EDUCATION/education";
import Experience from "./view/EXPERIENCE/experience";
import { Contact } from "./view/CONTACT/contact";

// Komponen dummy

function App() {
  const [selectedMenu, setSelectedMenu] = useState("About"); // Default pertama: About (Home)
  const [trainStart, setTrainStart] = useState(false);
  const [trainLocked, setTrainLocked] = useState(false);
  const [nextMenu, setNextMenu] = useState(null);
  const [showContent, setShowContent] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleMenuClick = (menu) => {
    if (trainLocked) return;

    if (menu === "Home") {
      // ⬅️ Reset ke About, tanpa kereta & tanpa kontainer animasi
      setSelectedMenu("About");
      setHasInteracted(false);
      setShowContent(true);
      setTrainStart(false);
      return;
    }

    if (!hasInteracted) setHasInteracted(true); // User sudah interaksi

    setTrainLocked(true);
    setShowContent(false);

    setTimeout(() => {
      setTrainStart(true);
      setNextMenu(menu);
    }, 300);
  };

  const handleTrainDone = () => {
    setTrainStart(false);
    setTrainLocked(false);
    setSelectedMenu(nextMenu);
    setTimeout(() => setShowContent(true), 100);
  };

  const renderComponent = () => {
    switch (selectedMenu) {
      case "Project": return <Project />;
      case "Skills": return <Skills />;
      case "Experience": return <Experience />;
      case "Education": return <Education />;
      case "Contact": return <Contact />;
      case "About": return <About />;
      default: return null;
    }
  };

  return (
    <div className="bg-[#402E7A] min-h-screen w-full overflow-hidden">
      <Navbar
        onSelect={handleMenuClick}
        disabled={trainLocked}
        activeMenu={selectedMenu === "About" && !hasInteracted ? "Home" : selectedMenu}
      />

      {/* Tampilkan kereta hanya setelah interaksi (bukan Home) */}
      {hasInteracted && <Train start={trainStart} onDone={handleTrainDone} />}

      {/* Tampilkan konten */}
      {hasInteracted ? (
        <div className="flex w-full justify-center transition-all duration-500">
          <div
            className={`bg-[#17153B] w-230 h-100 flex justify-center items-center rounded-xl 
            ${showContent ? "content-enter content-enter-active" : "content-exit content-exit-active"}`}
          >
            {renderComponent()}
          </div>
        </div>
      ) : (
        // Tampilan awal Home/About
        <div className="flex w-full justify-center mt-10">
          <About />
        </div>
      )}
    </div>
  );
}

export default App;
