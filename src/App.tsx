import { lazy, Suspense, useEffect } from "react";
import Loading from "./components/Loading";
import './App.css';
import { trackHomePageView } from "./analytics";

const BackgroundParticles = lazy(() => import("./components/BackgroundParticles"));
const Header = lazy(() => import("./components/header/Header"));
const Home = lazy(() => import("./components/home/Home"));
const Games = lazy(() => import("./components/games/Games"));
const Footer = lazy(() => import("./components/footer/Footer"));

function App() : JSX.Element {
    useEffect(() => {
        trackHomePageView();
    }, []);
    
    return (
      <div>
          <Suspense fallback={<Loading />}>
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
