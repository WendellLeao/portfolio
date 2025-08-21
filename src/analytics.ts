import ReactGA from "react-ga4";

let initialized = false;

export function initAnalytics() {
    if (initialized) return;
    ReactGA.initialize([{ trackingId: "G-009YD8N6BH" }]);
    initialized = true;
}

export function trackHomePageView() {
    ReactGA.send({ hitType: "pageview", page: "/", title: "Home" });
}

export function trackAboutButtonClick(section: string = "home", language?: string) {
    trackEvent("about_button_click", {
        section,
        language: language ?? (navigator.language || "unknown"),
    });
}

export function trackEvent(name: string, params?: Record<string, any>) {
    ReactGA.event(name, params);
}

export function trackGameButtonClick(gameName: string, store: string) {
    const lowerCaseName = (gameName ?? "").toLowerCase();
    const fixedName = lowerCaseName.replace(/\s+/g, "_");

    trackEvent("game_button_click", {
        game: fixedName,
        store,
    });
}
