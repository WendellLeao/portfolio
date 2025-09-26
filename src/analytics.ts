import ReactGA from "react-ga4";

let initialized = false;

export function initAnalytics() {
    if (initialized) return;
    ReactGA.initialize([{ trackingId: "G-009YD8N6BH" }]);
    initialized = true;
}

export function trackContactButtonClick(buttonName: string) {
    console.log("trackContactButtonClick:"+buttonName);
    trackEvent("click:" + buttonName);
}

export function trackAboutButtonClick() {
    trackEvent("click:about_me");
}

export function trackGameButtonClick(gameName: string, store: string) {
    const lowerCaseName = (gameName ?? "").toLowerCase();
    const fixedGameName = lowerCaseName.replace(/\s+/g, "_");

    trackEvent("click:" + fixedGameName);
}

export function trackEvent(name: string, params?: Record<string, any>) {
    ReactGA.event(name, params);
}
