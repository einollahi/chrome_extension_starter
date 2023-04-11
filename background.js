chrome.action.onLoad

chrome.action.onClicked.addListener((tab) => {
  console.log("Button clicked.");
  
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
});
