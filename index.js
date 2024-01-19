// electron.js
const { app, BrowserWindow,globalShortcut  } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const {createSpotlightSearch} = require('./SpotlightAi');
const main = require("gpti");

let mainWindow;

function createWindow() {
  if (!mainWindow) {
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
      },
      frame: false,
      autoHideMenuBar: true,
      titleBarStyle: 'hidden',
    });
    const startURL = isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`;

    mainWindow.loadURL(startURL);

    mainWindow.on('closed', () => (mainWindow = null));

  }
}

app.on('ready', () => {
  globalShortcut.register('CommandOrControl+K', createWindow)
  globalShortcut.register('CommandOrControl+H', createSpotlightSearch)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});