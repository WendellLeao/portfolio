import ReactGA from "react-ga4";

let initialized = false;

export function initAnalytics() {
    if (initialized) return;
    ReactGA.initialize([{ trackingId: "G-009YD8N6BH" }]);
    initialized = true;
}

export function trackHomePageView() {
    console.log("pageview");
    ReactGA.send({ hitType: "pageview", page: "/", title: "Home" });
}

export function trackAboutButtonClick() {
    console.log("about_button_click");
    trackEvent("about_button_click");
}

export function trackGameButtonClick(gameName: string, store: string) {
    const lowerCaseName = (gameName ?? "").toLowerCase();
    const fixedGameName = lowerCaseName.replace(/\s+/g, "_");

    console.log("game_button_click: " + fixedGameName);
    trackEvent("game_button_click: " + fixedGameName);
}

export function trackEvent(name: string, params?: Record<string, any>) {
    ReactGA.event(name, params);
}
