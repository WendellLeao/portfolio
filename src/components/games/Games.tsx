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
                <DraftGameItem />
                <PetShopGameItem />
                <AmazonGameItem />
                <MaxProGameItem />
                <OrigensGameItem />
                <ArrowGameItem />
                <PlaneGameItem />
                <HorrorGameItem />
            </Suspense>
        </div>
    )
}

export default Games;
