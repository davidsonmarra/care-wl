/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components/native';

import {WhiteLabelConfig} from '@modules';
import {Login} from '@presentational';

function App() {
  return (
    <ThemeProvider theme={WhiteLabelConfig.THEME}>
      <SafeAreaProvider>
        <Login />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
export default App;
