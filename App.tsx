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

import {theme} from '@global';
import {Login} from '@presentational';
import {makeServer} from '@server';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

if (window.server) {
  server.shutdown();
}

makeServer();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaProvider>
          <Login />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

export default App;
