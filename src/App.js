import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./components/AboutMe";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Navigation";
// import Project from "./components/ProjectCard";
import AllProjects from "./components/AllProjects";

function App() {
  const [page, setPage] = useState("About");
  function renderPage() {
    if (page === "About") {
      return <About></About>;
    } else if (page === "Contact") {
      return <Form></Form>;
    } else if (page === "AllProjects") {
      return <AllProjects></AllProjects>;
    }
  }

  return (
    <div className="App">
      <div>
        <Header>
          <Nav setPage={setPage} page={page}></Nav>
        </Header>
        {renderPage()}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
