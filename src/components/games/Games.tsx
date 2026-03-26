import {lazy, Suspense} from "react";
import Loading from "../Loading";
import './Games.css';

const DraftGameItem = lazy(() => import("./DraftGameItem"));
const RogueGameItem = lazy(() => import("./RogueGameItem"));
const PixGameItem = lazy(() => import("./PixGameItem"));
const UniqKillerGameItem = lazy(() => import("./UniqKillerGameItem"));
const PetShopGameItem = lazy(() => import("./PetShopGameItem"));
const AmazonGameItem = lazy(() => import("./AmazonGameItem"));
const ArrowGameItem = lazy(() => import("./ArrowGameItem"));
const PlaneGameItem = lazy(() => import("./PlaneGameItem"));
const OrigensGameItem = lazy(() => import("./OrigensGameItem"));
const HorrorGameItem = lazy(() => import("./HorrorGameItem"));
const MaxProGameItem = lazy(() => import("./MaxProGameItem"));
const OverthrowGameItem = lazy(() => import("./OverthrowGameItem"));
const FruitsGameItem = lazy(() => import("./FruitsGameItem"));

const Games = () => {
    return (
        <div className="games" id="games">
            <Suspense fallback={<Loading />}>
                <DraftGameItem />
                <RogueGameItem />
                <PixGameItem />
                <UniqKillerGameItem />
                <PetShopGameItem />
                <AmazonGameItem />
                <ArrowGameItem />
                <PlaneGameItem />
                <OrigensGameItem />
                <HorrorGameItem />
                <MaxProGameItem />
                <OverthrowGameItem />
                <FruitsGameItem />
            </Suspense>
        </div>
    )
}

export default Games;
