import { NativeModule, NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package '@rphk/react-native-osc' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const Osc = NativeModules.Osc
  ? NativeModules.Osc
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      },
    );
export type OSCMessage = { address: string; data: Array<number | boolean> };

interface OscModule extends NativeModule {
  /** Add a listener for the "GotMessage" event
   *  @param eventType - should be "GotMessage"
 
   */
  addListener: (eventType: string) => void;
  removeListeners: (count: number) => void;
  /** This creates and starts the client - it doesn't return anything, just have to assume the client exists in native code
   *  @param serverAddress - your osc server's IP address
   *  @param serverPort - your osc server's listen port
   */
  createClient: (serverAddress: string, serverPort: number) => void;
  /** This creates and starts the server - it doesn't return anything, just have to assume the server exists in native code. It will bind to all interfaces.
   *  @param serverPort - the port you want to listen on.
   */
  createServer: (serverPort: number) => void;
  /** Send an osc message, which looks like: "/step/on/it", [1, 2, 3]
   * @param message - with an address and data
   */
  sendMessage: (message: OSCMessage) => void;
}

export default Osc as OscModule;
