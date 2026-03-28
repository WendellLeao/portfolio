import {lazy, Suspense} from "react";
import Loading from "../Loading";
import './Games.css';

const RogueGameItem = lazy(() => import("./RogueGameItem"));
const UniqKillerGameItem = lazy(() => import("./UniqKillerGameItem"));
const PixGameItem = lazy(() => import("./PixGameItem"));
const DraftGameItem = lazy(() => import("./DraftGameItem"));
const PetShopGameItem = lazy(() => import("./PetShopGameItem"));
const AmazonGameItem = lazy(() => import("./AmazonGameItem"));
const MaxProGameItem = lazy(() => import("./MaxProGameItem"));
const ArrowGameItem = lazy(() => import("./ArrowGameItem"));
const PlaneGameItem = lazy(() => import("./PlaneGameItem"));
const OrigensGameItem = lazy(() => import("./OrigensGameItem"));
const HorrorGameItem = lazy(() => import("./HorrorGameItem"));
const OverthrowGameItem = lazy(() => import("./OverthrowGameItem"));
const FruitsGameItem = lazy(() => import("./FruitsGameItem"));

const Games = () => {
    return (
        <div className="games" id="games">
            <Suspense fallback={<Loading />}>
                <RogueGameItem />
                <UniqKillerGameItem />
                <PixGameItem />
                <DraftGameItem />
                <PetShopGameItem />
                <AmazonGameItem />
                <MaxProGameItem />
                <ArrowGameItem />
                <PlaneGameItem />
                <OrigensGameItem />
                <HorrorGameItem />
                <OverthrowGameItem />
                <FruitsGameItem />
            </Suspense>
        </div>
    )
}

export default Games;
