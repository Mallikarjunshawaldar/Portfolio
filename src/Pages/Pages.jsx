import React from 'react';
import Home from '../Components/Home/Home';
import About from '../Components/About/About';
import Skills from '../Components/Skills/Skills';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';

const Pages = () => {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
        <Footer/>
      </section>
    </>
    
  );
}

export default Pages;
