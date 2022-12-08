import { NativeModules, Platform } from 'react-native';

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
/** This creates and starts the client - it doesn't return anything, just have to assume the client exists in native code
 *  @param serverAddress - your osc server's IP address
 *  @param serverPort - your osc server's listen port
 */
export function createClient(serverAddress: string, serverPort: number) {
  return Osc.createClient(serverAddress, serverPort);
}

/** This creates and starts the server - it doesn't return anything, just have to assume the server exists in native code. It will bind to all interfaces.
 *  @param serverPort - the port you want to listen on.
 */
export function createServer(serverPort: number) {
  return Osc.createServer(serverPort);
}

/** Send an osc message, which looks like: "/step/on/it", [1, 2, 3]
 * @param slashAddress - you must send any string content in the slash address, e.g. /jim/bob
 * @param content - an array of floats, ints, or booleans
 */
export function sendMessage(slashAddress: string, content: Array<number | boolean>) {
  return Osc.sendMessage(slashAddress, content);
}

/** Add a listener
 * @param eventType - the package only emits the "GotMessage" event
 * @param cb - a callback to handle osc data, that looks like {"/step/on/it", [1, 2, 3]}
 */
export function addListener(
  eventType: 'GotMessage',
  cb: (d: { address: string; data: Array<number | boolean> }) => void,
) {
  return Osc.addListener(eventType, cb);
}

export function removeListeners(count: number) {
  return Osc.removeListeners(count);
}

export default Osc;
