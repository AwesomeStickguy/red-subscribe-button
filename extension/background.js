const defaultFilters = [
  "*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*"
]
chrome.webReqest.onBeforeRequest.addListener(
  function(details) {
    return {
     cancel: true 
    },
    {urls: defaultFilters},
    ["blocking']
  }
)
