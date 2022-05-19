# React-Native-TextStroke

### Installation
``npm install --save react-native-textstroke``

or

``yarn add react-native-textstroke``

### Usage

Here's a simple example. To render output like this:

![example](https://github.com/dvinfosys/React-Native-TextStroke/blob/main/example.png)

```javascript
import * as React from 'react';
import TextStroke from 'react-native-textstroke';

export default () => (
  <TextStroke stroke={1} color="#21C57F">
    <Text style={{
     fontFamily: 'SFUIDisplay-SemiBold',
     fontSize: 16,
     marginLeft: 20,
     paddingLeft: 2,
     marginBottom: 20,
     letterSpacing: 2,
     color: 'white',
     fontWeight: '600',
     lineHeight: 17
    }}>React Native TextStroke Example</Text>
  </TextStroke>
);
```

### License

- [Apache-2.0](https://github.com/dvinfosys/React-Native-TextStroke/blob/main/LICENSE).  © DV Infosys
