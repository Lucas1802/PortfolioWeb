import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MouseGlow from "./components/MouseGlow";

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">

      <MouseGlow />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;
