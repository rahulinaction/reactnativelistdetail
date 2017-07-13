import React, {Component} from 'react';
import { Animated, ListView, TouchableHighlight, Image,StyleSheet, Text, View } from 'react-native';
import { connect} from 'react-redux';
import {ActionCreators} from '../actions';
import {bindActionCreators} from 'redux';
import List from './List';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


class AppContainer extends Component {
  render() {
    //@Home listing page
    console.log("the props obtained here is",this.props);
    return (
        <List {...this.props} />
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}

//export default AppContainer;
export default connect((state) => { return {} }, mapDispatchToProps ) (AppContainer);
