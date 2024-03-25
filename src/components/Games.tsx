import React, {lazy, Suspense} from "react";
import './Games.css';

const RogueGameItem = lazy(() => import ("./RogueGameItem"));
const HorrorGameItem = lazy(() => import ("./HorrorGameItem"));
const OrigensGameItem = lazy(() => import ("./OrigensGameItem"));
const ArrowGameItem = lazy(() => import ("./ArrowGameItem"));
const TopDownShooterGameItem = lazy(() => import ("./TopDownShooterGameItem"));
const OverthrowGameItem = lazy(() => import ("./OverthowGameItem"));
const FruitsGameItem = lazy(() => import ("./FruitsGameItem"));
const BloodlustGameItem = lazy(() => import ("./BloodlustGameItem"));
const FunkinFighterGameItem = lazy(() => import ("./FunkinFighterGameItem"));
const JumpGameItem = lazy(() => import ("./JumpGameItem"));

const Games = () => {
    return (
        <div className="games" id="games">
            <Suspense fallback={<h1>Loading...</h1>}>
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
            </Suspense>
        </div>
    )
}

export default Games;