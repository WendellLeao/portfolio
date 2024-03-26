import React, { lazy, Suspense } from "react";
import BackgroundParticles from "./components/BackgroundParticles";
import './App.css';

const Header = lazy(() => import ("./components/Header"));
const Home = lazy(() => import ("./components/Home"));
const Games = lazy(() => import ("./components/Games"));
const Footer = lazy(() => import ("./components/Footer"));

function App() : JSX.Element {
  return (
      <div>
        {/*<BackgroundParticles />*/}
        <Suspense>
          <Header />
          <Home />
          <Games />
          <Footer />
        </Suspense>
      </div>
  )
}

export default App;
