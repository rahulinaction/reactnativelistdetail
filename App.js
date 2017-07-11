import React from 'react';
import {AppRegistry, Image,ScrollView, StyleSheet, Text, View } from 'react-native';
import globalConstants from './constants';
import Item from './components/Item';
import {connect} from 'reat-redux';
export default class App extends React.Component {
  render() {
    let pic = {
      "uri": 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
        <View style={styles.container}>
            <Image style={{width: 150, height: 150}} source={pic} />
            <Text>Open up hel App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => App);
