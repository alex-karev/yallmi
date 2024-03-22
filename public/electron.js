// Module to control the application lifecycle and the native browser window.
const { app, BrowserWindow, protocol } = require("electron");
const path = require("path");
const url = require("url");
 
// Create the native browser window.
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // Add preload script
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
 
  // Load 127.0.0.1:3000 in development, load static build in production.
  const appURL = app.isPackaged
    ? url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file:",
        slashes: true,
      })
    : "http://localhost:3000";
  mainWindow.loadURL(appURL);
 
  // Automatically open DevTools in development mode.
  if (!app.isPackaged) {
    mainWindow.webContents.openDevTools();
  }
}
 
// Setup a local proxy to adjust the paths
function setupLocalFilesNormalizerProxy() {
  protocol.registerHttpProtocol(
    "file",
    (request, callback) => {
      const url = request.url.substr(8);
      callback({ path: path.normalize(`${__dirname}/${url}`) });
    },
    (error) => {
      if (error) console.error("Failed to register protocol");
    },
  );
}
 
// Crete electorn window when it's ready
app.whenReady().then(() => {
  createWindow();
  setupLocalFilesNormalizerProxy();
  app.on("activate", function () {
    // MacOS fix
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
 
// Quit when all windows are closed.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
