// popup.js
const walletIframe = document.getElementById('walletIframe');

// Load the appropriate URL based on the app version setting.
chrome.storage.sync.get(['appVersion'], function (result) {
  const appVersion = result.appVersion || 'production'; // Default to production if setting not found.
  let walletUrl = 'https://coinos.io/';

  if (appVersion === 'beta') {
    walletUrl = 'https://coinos.io/';
  }

  walletIframe.src = walletUrl;
});
