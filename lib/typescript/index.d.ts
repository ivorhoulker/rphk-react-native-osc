declare const Osc: any;
/** This creates and starts the client - it doesn't return anything, just have to assume the client exists in native code
 *  @param serverAddress - your osc server's IP address
 *  @param serverPort - your osc server's listen port
 */
export declare function createClient(serverAddress: string, serverPort: number): any;
/** This creates and starts the server - it doesn't return anything, just have to assume the server exists in native code. It will bind to all interfaces.
 *  @param serverPort - the port you want to listen on.
 */
export declare function createServer(serverPort: number): any;
/** Send an osc message, which looks like: "/step/on/it", [1, 2, 3]
 * @param slashAddress - you must send any string content in the slash address, e.g. /jim/bob
 * @param content - an array of floats, ints, or booleans
 */
export declare function sendMessage(slashAddress: string, content: Array<number | boolean>): any;
/** Add a listener
 * @param eventType - the package only emits the "GotMessage" event
 * @param cb - a callback to handle osc data, that looks like {"/step/on/it", [1, 2, 3]}
 */
export declare function addListener(eventType: 'GotMessage', cb: (d: {
    address: string;
    data: Array<number | boolean>;
}) => void): any;
export declare function removeListeners(count: number): any;
export default Osc;
//# sourceMappingURL=index.d.ts.map