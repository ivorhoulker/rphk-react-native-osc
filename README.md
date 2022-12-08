# Forked from [react-native-osc](https://github.com/luiscript/react-native-osc)

Open Sound Control support for sending and receiving OSC messages in React Native. This fork is iOS ONLY! The java package for android is replaced with empty methods.

This fork adds support for typescript.

This uses [SwiftOSC](https://github.com/ExistentialAudio/SwiftOSC) for iOS.

## Getting started:

`$ npm install react-native-osc --save`

In ios/Podfile add: `use_frameworks!`

`$ cd ios && pod install`

## Usage

### Send OSC message (OSC client):

```javascript
import osc from 'react-native-osc';

var portOut = 9090;

//OSC server IP address like "192.168.1.80" or "localhost"
var address = 'localhost';

//create the client only once in componentDidMount
osc.createClient(address, portOut);

//now you can send OSC messages like this (only after creating a client)
osc.sendMessage('/address/', [1.0, 0.5]);

//send any combination of integers, floats, bool & string values:
osc.sendMessage('/address/', ['string value', 1, false, 0.5]);
```

### Receive OSC messages (OSC server):

```javascript
import { NativeEventEmitter } from 'react-native';

import osc from 'react-native-osc';

//create an event emiter sending the native osc module as parameter
const eventEmitter = new NativeEventEmitter(osc);

//subscribe to GotMessage event to receive OSC messages
eventEmitter.addListener('GotMessage', (oscMessage) => {
  console.log('message: ', oscMessage);
});

var portIn = 9999;

//iOS can listen to specific "/adress/", leave it emtpy to listen to all
var addressToListen = '';

// to start listening to OSC messages (iOS):
osc.createServer(portIn);

//to receive OSC messages your client should be addressing your device IP address
```

## Supported types:

i Integer: two’s complement int32.

f Float: IEEE float32.

~~s NULL-terminated ASCII string.~~

~~b Blob, (aka byte array) with size.~~

T True.

F False.

~~N Null: (aka nil, None, etc).~~

~~I Impulse: (aka “bang”).~~

## Tested with:

Xcode:11.3.1 - iOS_SDK: 13 - RN: 0.61.5

## License (of forked repo)

The MIT License (MIT)

Copyright (C) 2020 Luis Fernando Garcia Perez
contacto@luiscript.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## SwiftOSC

The MIT License (MIT)

Copyright (c) 2017 Devin Roth (devin@devinrothmusic.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
