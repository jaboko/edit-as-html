'use strict';

if (chrome.devtools.panels.elements.createSidebarPane) {
  chrome.devtools.panels.elements.createSidebarPane('Visual Studio Code', sidebar => {
    sidebar.setPage('/data/devtools/index.html');
  });
}
