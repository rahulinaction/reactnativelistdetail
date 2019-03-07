/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import globalConstants from './constants';
import Item from './components/Item';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';
import {connect, Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import AppContainer from './containers/AppContainer';
import {AppRegistry,Image,ScrollView, Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";


const loggerMiddleware = createLogger({predicate:(getState, action) => __DEV__ });

function configureStore(initialState) {
  const enhancer =  compose(
                      applyMiddleware(thunkMiddleware,loggerMiddleware)
                    );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
 class App extends Component {
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




class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}


class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}



const AppNavigator = createStackNavigator(
  {
    Home: App,
    Details: DetailsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge; 
        } else if (routeName === 'Details') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(AppNavigator);
