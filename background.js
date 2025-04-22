let performanceData = {};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "PERF_METRICS") {
        performanceData = message.data;
    }

    if (message.type === "REQUEST_PERF_DATA") {
        sendResponse(performanceData);
    }
});
