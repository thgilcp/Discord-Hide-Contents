"use strict";

chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("Turning " + tab.url + " red!");
  chrome.tabs.executeScript({
    code:
      "let elm = document.querySelectorAll('div[class*=\"avatar-\"]');elm.forEach(e => e.querySelector('svg').style.display = 'none');elm.forEach(e => e.style.background = 'black');elm.forEach(e => e.style.borderRadius  = '50%');elm = document.querySelectorAll('span[class*=\"username-\"]');elm.forEach(e => e.style.color = 'black');elm.forEach(e => e.style.background = 'black');elm.forEach(e => e.style.borderRadius  = '5px');elm = document.querySelectorAll('span[class*=\"mention\"]');elm.forEach(e => e.style.color = 'black');elm.forEach(e => e.style.background = 'black');elm.forEach(e => e.style.borderRadius  = '5px');"
  });
});
