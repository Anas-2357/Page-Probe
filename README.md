# 🔍 Page Probe Chrome Extension

A lightweight Chrome Extension that tracks and displays real-time page performance metrics like:

- 🚀 **Load Time**
- 🏗️ **DOM Elements Count**
- ⚡ **First Contentful Paint (FCP)**
- 🖼️ **Largest Contentful Paint (LCP)**
- 📈 **Load Speed Status (Good / Acceptable / Bad)**

---

## 📸 Demo


![Screenshot 2025-04-22 103632](https://github.com/user-attachments/assets/7c443eaf-38b1-47d9-8932-2775aa986a6c)
![Screenshot 2025-04-22 103650](https://github.com/user-attachments/assets/899f81b9-ee7b-4472-ac38-45c69f3b1c10)
![Screenshot 2025-04-22 103855](https://github.com/user-attachments/assets/dfada971-de32-4fb9-b954-dc5bd3be1940)


---

## 📦 Features

✅ Real-time page performance tracking  
✅ Clean UI with tooltips explaining each metric  
✅ Uses the `PerformanceObserver` API for accurate LCP  
✅ No external dependencies — pure JS + Chrome APIs  
✅ Tooltip-style descriptions appear instantly on hover  

---

## 🧠 Why I Built This

While revising core JavaScript concepts, I decided to challenge myself with something practical. This Chrome Extension helped me apply:

- DOM manipulation
- Asynchronous operations
- Chrome extension message passing
- Performance APIs (`performance.timing`, `getEntriesByName`, and `PerformanceObserver`)

---

## 🧪 How to Use

1. **Download the ZIP:**

   - Click the green `Code` button on this repo
   - Choose **Download ZIP**
   - Extract the folder to your computer

2. **Load the Extension in Chrome:**

   - Open Chrome and go to `chrome://extensions`
   - Turn on **Developer Mode** (top right toggle)
   - Click **Load unpacked**
   - Select the extracted folder

3. **Use the Extension:**

   - Visit any website
   - Click the extension icon (📊)
   - Instantly view the performance data for that page

---

## 🛠️ Built With

- JavaScript (Vanilla)
- HTML / CSS
- Chrome Extension APIs
- Performance API (`performance.timing`, `getEntriesByName`, `PerformanceObserver`)

---
