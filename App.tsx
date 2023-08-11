/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';

import {WhiteLabelConfig} from './src/modules';

function App() {
  console.log('THEME', WhiteLabelConfig.THEME);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>{WhiteLabelConfig.APP_NAME}</Text>
    </View>
  );
}
export default App;
