import "./App.css";
import About from "./components/About";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navebar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Tokenomics from "./components/Tokenomics";

function App() {
  return (
    <>
      <Navebar />
      <Hero />
      <About />
      <Demo />
      <Team />
      {/* <Tokenomics /> */}
      <Roadmap />
      <Footer />
    </>
  );
}

export default App;
