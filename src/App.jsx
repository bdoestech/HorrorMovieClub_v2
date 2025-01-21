import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom"; // Import Router components

import "./App.css";

import Home from "./components/Home";
import Discussion from "./components/Discussion";
import About from "./components/About";
import Links from "./components/Links";

function App() {
  const base = "/HorrorMovieClub_v2/";

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <BrowserRouter basename="/HorrorMovieClub_v2">
      <div className="App">
        <header className="header">
          {/* <h1>My Website</h1> */}
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
        </header>
        <nav className={`menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/discussion">Discussion</Link>
            </li>
            <li>
              <Link to="/links">Links</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/discussion" element={<Discussion />} />
            <Route path="/links" element={<Links />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
