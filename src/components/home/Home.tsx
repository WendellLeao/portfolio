import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import HomeDescription from './HomeDescription';
import AboutDescription from './AboutDescription';
import AboutButton from './AboutButton';
import DownwardArrows from './DownwardArrows';
import './Home.css';

export function ShowAboutDescription() : void {

    const aboutDescription : HTMLElement | null = document.getElementById("aboutDescription");
    
    if(aboutDescription){
        aboutDescription.style.display = "grid";
    }

    const homeDescription : HTMLElement | null = document.getElementById("homeDescription");
    
    if(homeDescription){
        homeDescription.style.display = "none";
    }
}

export function ShowHomeDescription() : void {
    const homeDescription : HTMLElement | null = document.getElementById("homeDescription");

    if(homeDescription){
        homeDescription.style.display = "flex";
    }

    const aboutDescription : HTMLElement | null = document.getElementById("aboutDescription");

    if(aboutDescription){
        aboutDescription.style.display = "none";
    }
}

const Home = () => {
    useEffect(() => {
        ReactGA.send("pageview");
    }, []);

    return (
        <div id="home">
            <HomeDescription />
            <AboutDescription />
            <AboutButton />
            <DownwardArrows />
        </div>
    )
}

export default Home;