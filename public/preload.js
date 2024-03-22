const { contextBridge } = require("electron");

// Get versions number. It can be accessed in React using window.versions
process.once("loaded", () => {
  contextBridge.exposeInMainWorld("versions", process.versions);
});
