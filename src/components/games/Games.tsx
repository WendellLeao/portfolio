import {lazy, Suspense} from "react";
import Loading from "../Loading";
import './Games.css';

const PixGameItem = lazy(() => import("./PixGameItem"));
const DraftGameItem = lazy(() => import("./DraftGameItem"));
const RogueGameItem = lazy(() => import("./RogueGameItem"));
const UniqKillerGameItem = lazy(() => import("./UniqKillerGameItem"));
const PetShopGameItem = lazy(() => import("./PetShopGameItem"));
const AmazonGameItem = lazy(() => import("./AmazonGameItem"));
const HorrorGameItem = lazy(() => import("./HorrorGameItem"));
const OrigensGameItem = lazy(() => import("./OrigensGameItem"));
const MaxProGameItem = lazy(() => import("./MaxProGameItem"));
const ArrowGameItem = lazy(() => import("./ArrowGameItem"));
const PlaneGameItem = lazy(() => import("./PlaneGameItem"));
const OverthrowGameItem = lazy(() => import("./OverthrowGameItem"));
const FruitsGameItem = lazy(() => import("./FruitsGameItem"));

const Games = () => {
    return (
        <div className="games" id="games">
            <Suspense fallback={<Loading />}>
                <PixGameItem />
                <DraftGameItem />
                <RogueGameItem />
                <UniqKillerGameItem />
                <PetShopGameItem />
                <AmazonGameItem />
                <HorrorGameItem />
                <OrigensGameItem />
                <MaxProGameItem />
                <ArrowGameItem />
                <PlaneGameItem />
                <OverthrowGameItem />
                <FruitsGameItem />
            </Suspense>
        </div>
    )
}

export default Games;
