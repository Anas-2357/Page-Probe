setInterval(() => {
    chrome.runtime.sendMessage({ type: 'REQUEST_PERF_DATA' }, (response) => {
        if(response.loadTime !== undefined){
            document.getElementById('loadTime').textContent = `${response.loadTime} ms`;
            document.getElementById('domCount').textContent = `${response.domCount}`;
            document.getElementById('fcp').textContent = `${response.fcp} ms`;
            document.getElementById('lcp').textContent = `${response.lcp} ms`;
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
        loadSpeedElement.textContent = `${loadSpeedStatus}`;
        loadSpeedElement.style.color = color;



      });
}, 200)