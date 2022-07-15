import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./components/AboutMe";
import Contact from "./components/ContactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Navigation";
import Project from "./components/Project";
import AllProjects from "./components/AllProjects";

function App() {
  const [page, setPage] = useState("About");
  function renderPage() {
    if (page === "About") {
      return <About></About>;
    } else if (page === "Contact") {
      return <Contact></Contact>;
    } else if (page === "AllProjects") {
      return <AllProjects></AllProjects>;
    }
  }

  return (
    <div className="App">
      <Header>
        <Nav setPage={setPage} page={page}></Nav>
      </Header>
      {renderPage()}
      <Footer></Footer>
    </div>
  );
}

export default App;
