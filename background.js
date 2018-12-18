chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({}, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
            chrome.tabs.sendMessage(tabs[i].id, {pause: true}); 
        }
    });
});