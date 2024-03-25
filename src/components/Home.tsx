import HomeDescription from './HomeDescription';
import AboutDescription from './AboutDescription';
import AboutButton from './AboutButton';
import Arrows from './Arrows';
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
    return (
        <div id="home">
            <HomeDescription />
            <AboutDescription />
            <AboutButton />
            <Arrows />
        </div>
    )
}

export default Home;