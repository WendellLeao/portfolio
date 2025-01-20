import {lazy, Suspense} from "react";
import Loading from "../Loading";
import './Games.css';

const RogueGameItem = lazy(() => import("./RogueGameItem"));
const DraftGameItem = lazy(() => import("./DraftGameItem"));
const PetShopGameItem = lazy(() => import("./PetShopGameItem"));
const AmazonGameItem = lazy(() => import("./AmazonGameItem"));
const HorrorGameItem = lazy(() => import("./HorrorGameItem"));
const OrigensGameItem = lazy(() => import("./OrigensGameItem"));
const ArrowGameItem = lazy(() => import("./ArrowGameItem"));
const OverthrowGameItem = lazy(() => import("./OverthrowGameItem"));
const TopDownShooterGameItem = lazy(() => import("./TopDownShooterGameItem"));
const FruitsGameItem = lazy(() => import("./FruitsGameItem"));
const BloodlustGameItem = lazy(() => import("./BloodlustGameItem"));
const JumpGameItem = lazy(() => import("./JumpGameItem"));

const Games = () => {
    return (
        <div className="games" id="games">
            <Suspense fallback={<Loading />}>
                <RogueGameItem />
                <DraftGameItem />
                <PetShopGameItem />
                <AmazonGameItem />
                <HorrorGameItem />
                <OrigensGameItem />
                <ArrowGameItem />
                <OverthrowGameItem />
                <TopDownShooterGameItem />
                <FruitsGameItem />
                <BloodlustGameItem />
                <JumpGameItem />
            </Suspense>
        </div>
    )
}

export default Games;