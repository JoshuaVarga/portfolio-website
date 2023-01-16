import React, { useState } from "react";

import { Article, Sidebar, Topbar } from "./components";
import { about, projects, footer } from "./data";

import "./App.css";

function App() {
  const [projectIndex, setProjectIndex] = useState(-1);
  const handleProjectIndex = (index) => {
    setProjectIndex(index === projectIndex ? -1 : index);
  };

  const content = projects[projectIndex] || about;
  const projectHeaders = projects.map((project) => project.header);

  return (
    <div className="app">
      <Topbar handleLogoClick={handleProjectIndex} />
      <main>
        <div className="article__wrapper">
          <Article content={content} />
        </div>
        <div className="sidebar__wrapper">
          <Sidebar
            projectHeaders={projectHeaders}
            currentIndex={projectIndex}
            onClick={handleProjectIndex}
          />
        </div>
      </main>
      <footer>
        <p>{footer}</p>
      </footer>
    </div>
  );
}

export default App;
