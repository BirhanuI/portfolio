import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Skill from "./components/skill";
function App() {
  return (
    <>
      <div className="body">
        <div className="header">
          <Navbar />
        </div>
        <div className="hero">
          <Hero />
        </div>
        <div className="skills">
          <Skill />
        </div>
      </div>
    </>
  );
}

export default App;
