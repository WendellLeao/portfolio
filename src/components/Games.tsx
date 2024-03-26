import RogueGameItem from "./RogueGameItem";
import HorrorGameItem from "./HorrorGameItem";
import OrigensGameItem from "./OrigensGameItem";
import ArrowGameItem from "./ArrowGameItem";
import TopDownShooterGameItem from "./TopDownShooterGameItem";
import OverthrowGameItem from "./OverthrowGameItem";
import FruitsGameItem from "./FruitsGameItem";
import BloodlustGameItem from "./BloodlustGameItem";
import FunkinFighterGameItem from "./FunkinFighterGameItem";
import JumpGameItem from "./JumpGameItem";
import './Games.css';

const Games = () => {
    return (
        <div className="games" id="games">
            <RogueGameItem />
            <HorrorGameItem />
            <OrigensGameItem />
            <ArrowGameItem />
            <TopDownShooterGameItem />
            <OverthrowGameItem />
            <FruitsGameItem />
            <BloodlustGameItem />
            <FunkinFighterGameItem />
            <JumpGameItem />
        </div>
    )
}

export default Games;