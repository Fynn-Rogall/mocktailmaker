const { app, BrowserWindow,globalShortcut  } = require('electron');
const isDev = require("electron-is-dev");
const path = require("path");
let SpotlightSearch;
function createSpotlightSearch() {
  if (!SpotlightSearch) {
    SpotlightSearch = new BrowserWindow({
      width: 500,
      height: 40,
      webPreferences: {
        nodeIntegration: true,
      },
      frame: false,
      autoHideMenuBar: true,
      titleBarStyle: 'hidden',
      skipTaskbar: true
    });
    const URL = isDev
      ? 'http://localhost:3000/spotlight'
      : `file://${path.join(__dirname, '../build/index.html')}`;
    SpotlightSearch.loadURL(URL);
  }
}

module.exports = {createSpotlightSearch}