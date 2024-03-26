import BackgroundParticles from "./components/BackgroundParticles";
import Header from "./components/Header";
import Home from "./components/Home";
import Games from "./components/Games";
import Footer from "./components/Footer";
import './App.css';

function App() : JSX.Element {
  return (
      <div>
          <BackgroundParticles />
          <Header />
          <Home />
          <Games />
          <Footer />
      </div>
  )
}

export default App;
