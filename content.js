let lcp;

const po = new PerformanceObserver((entryList) => {
  const entries = entryList.getEntries();
  const lastEntry = entries[entries.length - 1];
  lcp = lastEntry.startTime;
});

po.observe({ type: 'largest-contentful-paint', buffered: true });

window.addEventListener('load', () => {
    setTimeout(() => {
        const performance = window.performance;
  
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;  
        const domCount = document.getElementsByTagName('*').length;
        const fcp = performance.getEntriesByName('first-contentful-paint')[0].startTime;

        chrome.runtime.sendMessage({
            type: 'PERF_METRICS',
            data: { loadTime, domCount, fcp, lcp}
        });
        
    }, 0)  // Had to make this async cause for some reason performance API isn't available at the begining
  });
  