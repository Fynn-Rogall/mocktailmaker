// electron.js
const { app, BrowserWindow,globalShortcut, ipcMain  } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const nodeChildProcess = require('child_process');
const nodePath = require("path");

let mainWindow;

function createWindow() {
  if (!mainWindow) {
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
         enableRemoteModule: true,
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

function runScript() {
  let script = nodeChildProcess.spawn('bash', [`kiba.sh`]);

  console.log('PID: ' + script.pid);
   script.stdout.on('data', (data) => {
        console.log('stdout: ' + data);
    });

    script.stderr.on('data', (err) => {
        console.log('stderr: ' + err);
    });

    script.on('exit', (code) => {
        console.log('Exit Code: ' + code);
    });
}

app.whenReady().then(() => {
  ipcMain.on('pressKiBa', runScript)
})

app.on('ready', () => {
  createWindow();
  globalShortcut.register('CommandOrControl+K', runScript)
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