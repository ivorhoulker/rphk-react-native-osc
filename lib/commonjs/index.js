"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addListener = addListener;
exports.createClient = createClient;
exports.createServer = createServer;
exports.default = void 0;
exports.removeListeners = removeListeners;
exports.sendMessage = sendMessage;
var _reactNative = require("react-native");
const LINKING_ERROR = `The package 'react-native-android-package' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const Osc = _reactNative.NativeModules.Osc ? _reactNative.NativeModules.Osc : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
function createClient(serverAddress, serverPort) {
  return Osc.createClient(serverAddress, serverPort);
}
;
function createServer(serverPort) {
  return Osc.createServer(serverPort);
}
;
function sendMessage(slashAddress, content) {
  return Osc.sendMessage(slashAddress, content);
}
function addListener(eventType) {
  return Osc.addListener(eventType);
}
function removeListeners(count) {
  return Osc.removeListeners(count);
}
var _default = Osc;
exports.default = _default;
//# sourceMappingURL=index.js.map