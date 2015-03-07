// listen for our browserAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(tab.ib, { file: 'jquery-2.1.3.min.js' }, function() {
		chrome.tabs.executeScript(tab.ib, { file: "inject.js" });	
	});
});