import React, {Component} from 'react';
import {AppRegistry, Image,ScrollView, StyleSheet, Text, View } from 'react-native';
import globalConstants from './constants';
import Item from './components/Item';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
//import { Provider } from 'react-redux';
import reducer from './reducers';
import {connect, Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import AppContainer from './containers/AppContainer';

const loggerMiddleware = createLogger({predicate:(getState, action) => __DEV__ });

function configureStore(initialState) {
  const enhancer =  compose(
                      applyMiddleware(thunkMiddleware,loggerMiddleware)
                    );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

export default class App extends Component {
  render() {
    let pic = {
      "uri": 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
        <Provider store={store}>
          <AppContainer />
        </Provider>
    );
  }
}

/*const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
*/
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
AppRegistry.registerComponent('AwesomeProject', () => App);
