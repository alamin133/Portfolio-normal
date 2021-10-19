
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Intro from './components/Intro';


import {BrowserRouter as Router,Route,Switch } from "react-router-dom";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Router>
      
        
          <Navbar/>
          <Intro/>
           
            <Switch>
              
           
         
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/testimonials">
            <Testimonials />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
           
        </Router>
      
    
    
      
    </main>
  );
}