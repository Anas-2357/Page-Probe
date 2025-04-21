window.addEventListener('load', () => {
    setTimeout(() => {
      if (window.performance && window.performance.timing) {
        const timing = window.performance.timing;
  
        const loadTime = timing.loadEventEnd - timing.navigationStart;
  
        if (loadTime > 0) {
          const domCount = document.getElementsByTagName('*').length;
  
          chrome.runtime.sendMessage({
            type: 'PERF_METRICS',
            data: { loadTime, domCount }
          });
        } else {
          console.error("Invalid load time:", loadTime);
        }
      } else {
        console.error("Performance timing API not available.");
      }
    }, 500);  // Had to add this delay cause for some reason performance API isn't available at the begining
  });
  