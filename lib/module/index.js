import { NativeModules, Platform } from 'react-native';
const LINKING_ERROR = `The package '@rphk/react-native-osc' doesn't seem to be linked. Make sure: \n\n` + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const Osc = NativeModules.Osc ? NativeModules.Osc : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
export default Osc;
//# sourceMappingURL=index.js.map