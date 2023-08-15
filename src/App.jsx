import Hero from "./components/hero";
import Navbar from "./components/navbar";
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
      </div>
    </>
  );
}

export default App;
