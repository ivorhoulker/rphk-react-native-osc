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
const LINKING_ERROR = `The package '@rphk/react-native-osc' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const Osc = _reactNative.NativeModules.Osc ? _reactNative.NativeModules.Osc : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
/** This creates and starts the client - it doesn't return anything, just have to assume the client exists in native code
 *  @param serverAddress - your osc server's IP address
 *  @param serverPort - your osc server's listen port
 */
function createClient(serverAddress, serverPort) {
  return Osc.createClient(serverAddress, serverPort);
}

/** This creates and starts the server - it doesn't return anything, just have to assume the server exists in native code. It will bind to all interfaces.
 *  @param serverPort - the port you want to listen on.
 */
function createServer(serverPort) {
  return Osc.createServer(serverPort);
}

/** Send an osc message, which looks like: "/step/on/it", [1, 2, 3]
 * @param slashAddress - you must send any string content in the slash address, e.g. /jim/bob
 * @param content - an array of floats, ints, or booleans
 */
function sendMessage(slashAddress, content) {
  return Osc.sendMessage(slashAddress, content);
}

/** Add a listener
 * @param eventType - the package only emits the "GotMessage" event
 * @param cb - a callback to handle osc data, that looks like {"/step/on/it", [1, 2, 3]}
 */
function addListener(eventType, cb) {
  return Osc.addListener(eventType, cb);
}
function removeListeners(count) {
  return Osc.removeListeners(count);
}
var _default = Osc;
exports.default = _default;
//# sourceMappingURL=index.js.map