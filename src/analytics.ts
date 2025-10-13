import ReactGA from "react-ga4";

let initialized = false;

export function initAnalytics() {
    if (initialized) return;
    ReactGA.initialize([{ trackingId: "G-009YD8N6BH" }]);
    //trackPageView();
    initialized = true;
}

export function trackPageView() {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
}

export function trackButtonClick(buttonName: string) {
    trackEvent("click:" + buttonName);
}

export function trackGameButtonClick(gameName: string) {
    const lowerCaseName = (gameName ?? "").toLowerCase();
    const fixedGameName = lowerCaseName.replace(/\s+/g, "_");

    trackButtonClick(fixedGameName);
}

export function trackEvent(name: string, params?: Record<string, any>) {
    ReactGA.event(name, params);
}
