'use strict';

const config = {};

config.id = 'com.add0n.native_client';

config.command = () => new Promise(resolve => {
  chrome.storage.local.get({
    Mac: 'code %path;',
    Lin: 'code %path;',
    Win: 'code %path;'
  }, prefs => {
    resolve(prefs[navigator.platform.substr(0, 3)]);
  });
});
