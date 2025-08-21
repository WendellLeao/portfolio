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
