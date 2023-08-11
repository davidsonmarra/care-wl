/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import './environments';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components/native';

import {theme} from './src/global';
import {Login} from '@presentational';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Login />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
export default App;
