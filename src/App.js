import React from "react";
import "./App.css";
import {
  About,
  Contact,
  Feature,
  Footer,
  Header,
  Hero,
  Service,
  Teacher,
} from "./components";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Feature />
      <About />
      <Service />
      <Teacher />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
