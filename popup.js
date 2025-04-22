setInterval(() => {
    chrome.runtime.sendMessage({ type: 'REQUEST_PERF_DATA' }, (response) => {
        if(response.loadTime !== undefined){
            document.getElementById('loadTime').textContent = `Load Time: ${response.loadTime} ms`;
            document.getElementById('domCount').textContent = `DOM Elements: ${response.domCount}`;
            document.getElementById('fcp').textContent = `FCP: ${response.fcp} ms`;
            document.getElementById('lcp').textContent = `LCP: ${response.lcp} ms`;
        }

        let loadSpeedStatus = '';
        let color = '';

        if (response.loadTime < 1500) {
            loadSpeedStatus = 'Good';
            color = 'green';
        } else if (response.loadTime >= 1500 && response.loadTime < 3000) {
            loadSpeedStatus = 'Acceptable';
            color = 'orange';
        } else {
            loadSpeedStatus = 'Bad';
            color = 'red';
        }
        

        const loadSpeedElement = document.getElementById('loadSpeedStatus');
        loadSpeedElement.textContent = `Load Speed: ${loadSpeedStatus}`;
        loadSpeedElement.style.color = color;



      });
}, 200)