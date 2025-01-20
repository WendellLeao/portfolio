import GameItem from "./GameItem";

const PetShopGameItem = () => {
    const petShopUrl: string = "https://play.google.com/store/apps/details?id=com.tapps.virtual.pet.hotel.games.world&hl=en";
    const petShopVideoUrl: string = "videos/pet-shop.webm";

    return (
        <GameItem id="petShop" title="Pet Shop Fever: Animal Hotel" synopses="petShopSynopsis" description="petShopDescription" store="google-play"
                  side="left" url={petShopUrl} videoUrl={petShopVideoUrl} />
    )
}

export default PetShopGameItem;