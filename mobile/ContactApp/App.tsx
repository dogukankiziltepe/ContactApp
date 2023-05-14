/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './src/store/reducer';
import RootNavigation from './src/navigation/rootNavigation';
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';

Ionicons.loadFont().then();
const store = createStore(rootReducer, applyMiddleware(thunk));
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigation/>
  </Provider>
  );
}


export default App;
