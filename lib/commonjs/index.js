"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
var _default = Osc;
exports.default = _default;
//# sourceMappingURL=index.js.map