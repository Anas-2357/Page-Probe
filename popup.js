setInterval(() => {
    chrome.runtime.sendMessage({ type: 'REQUEST_PERF_DATA' }, (response) => {
        document.getElementById('loadTime').textContent = `Load Time: ${response.loadTime} ms`;
        document.getElementById('domCount').textContent = `DOM Elements: ${response.domCount}`;
      });
}, 50)