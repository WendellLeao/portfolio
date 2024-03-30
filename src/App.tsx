import {lazy, Suspense} from "react";
import './App.css';

const BackgroundParticles = lazy(() => import("./components/BackgroundParticles"));
const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./components/Home"));
const Games = lazy(() => import("./components/Games"));
const Footer = lazy(() => import("./components/Footer"));

function App() : JSX.Element {
  return (
      <div>
          <Suspense fallback={<div>Loading...</div>}>
              <BackgroundParticles />
              <Header />
              <Home />
              <Games />
              <Footer />
          </Suspense>
      </div>
  )
}

export default App;
