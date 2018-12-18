chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var videos = document.getElementsByTagName('video');
                    
    for (var i = 0; i < videos.length; i++) {
        videos[i].pause();
    }
});