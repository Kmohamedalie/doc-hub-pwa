# 🧰 Document Utility Hub - Mobile PWA

This repository serves as the **Progressive Web App (PWA)** wrapper for the Document Utility Hub—a 36-tool "Swiss Army Knife" for document processing built with Python and Streamlit.

## 📱 What is this?
Streamlit Community Cloud does not natively support hosting PWA root files (`manifest.json` and `service-worker.js`). To bypass this limitation and provide a **native mobile app experience**, this repository acts as a lightweight, full-screen HTML shell hosted via GitHub Pages. 

It seamlessly embeds the live Streamlit application inside an `iframe` while providing the necessary web manifest to allow installation directly to an iOS or Android Home Screen, bypassing the App Stores completely.

## 🚀 Live Application
**Access the mobile app here:** `[INSERT_YOUR_GITHUB_PAGES_URL_HERE]`

*(Main Web App URL:https://document-utility.streamlit.app/)*

## 📥 How to Install on Mobile

**For iOS (iPhone/iPad):**
1. Open the Live Application link in **Safari**.
2. Tap the **Share** button at the bottom of the screen.
3. Scroll down and tap **"Add to Home Screen"**.
4. Open the app from your home screen for a full-screen, native experience without the browser UI!

**For Android:**
1. Open the Live Application link in **Chrome**.
2. A prompt should automatically appear at the bottom of the screen saying **"Install Doc Hub"**.
3. If it doesn't appear, tap the **3-dot menu** in the top right and select **"Add to Home screen"**.

## 📂 Repository Contents
* `index.html`: The full-screen iframe wrapper pointing to the Streamlit Cloud URL (utilizing `/?embed=true` to hide default Streamlit headers).
* `manifest.json`: The web app manifest defining the app's name, theme colors, and icon paths.
* `sw.js`: A lightweight Service Worker required by mobile browsers to trigger the installation prompt.
* `icon-192.png` & `icon-512.png`: The custom dark-mode application icons.

## 🛠️ Build Your Own
If you are a developer looking to wrap your own Streamlit app into a PWA:
1. Fork this repository.
2. Open `index.html` and replace the `<iframe>` `src` URL with your own Streamlit app's URL.
3. Update `manifest.json` with your app's specific name, theme colors, and descriptions.
4. Replace the PNG icons with your own designs.
5. Deploy using GitHub Pages!

---
*Looking for the Python source code? The actual Streamlit application logic and the 36 tools are hosted in a separate repository here: `[INSERT_MAIN_STREAMLIT_GITHUB_REPO_LINK_HERE]`*
