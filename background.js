chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.supportsEcashPayments) {
    // Set the badge text to display the green dot.
    chrome.action.setBadgeText({ text: "•", tabId: sender.tab.id });
    // Change the extension logo image.
    chrome.action.setIcon({ path: "https://coinos.io/favicon.svg", tabId: sender.tab.id });
  } else {
    // Clear the badge text.
    chrome.action.setBadgeText({ text: "", tabId: sender.tab.id });
    // Reset the extension logo image to default.
    chrome.action.setIcon({ path: "https://coinos.io/favicon.svg", tabId: sender.tab.id });
  }
});
