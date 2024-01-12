import React from "react";
import Header from "./component/Head/Header";
import Home from "./component/Hero/Home";
import Portfolio from "./component/Portfolio/Portfolio";
import Resume from "./component/Resume/Resume";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer";
import "./App.css";
import Skills from "./component/skills/Skills";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Portfolio />
      <Resume />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
