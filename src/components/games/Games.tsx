import {lazy, Suspense} from "react";
import Loading from "../Loading";
import './Games.css';

const RogueGameItem = lazy(() => import("./RogueGameItem"));
const UniqKillerGameItem = lazy(() => import("./UniqKillerGameItem"));
const PixGameItem = lazy(() => import("./PixGameItem"));
const PetShopGameItem = lazy(() => import("./PetShopGameItem"));
const DraftGameItem = lazy(() => import("./DraftGameItem"));
const ThePlatformItem = lazy(() => import("./ThePlatform"));
const AmazonGameItem = lazy(() => import("./AmazonGameItem"));
const OrigensGameItem = lazy(() => import("./OrigensGameItem"));
const ArrowGameItem = lazy(() => import("./ArrowGameItem"));
const PlaneGameItem = lazy(() => import("./PlaneGameItem"));
const HorrorGameItem = lazy(() => import("./HorrorGameItem"));

const Games = () => {
    return (
        <div className="games" id="games">
            <Suspense fallback={<Loading />}>
                <RogueGameItem />
                <UniqKillerGameItem />
                <PixGameItem />
                <PetShopGameItem />
                <DraftGameItem />
                <ThePlatformItem />
                <AmazonGameItem />
                <OrigensGameItem />
                <ArrowGameItem />
                <PlaneGameItem />
                <HorrorGameItem />
            </Suspense>
        </div>
    )
}

export default Games;
