import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import { createBottomTabNavigator} from 'react-navigation-tabs'

// You can import from local files
import InstagramScreen from './Screen/InstagramScreen';
import FacebookScreen from './Screen/FacebookScreen';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends Component {
  render() {
    return (
        <Appcontainer />
    )
  }
}

var tabContainer = createBottomTabNavigator({
  Home: {screen:InstagramScreen},
  Issue: {screen:FacebookScreen}
})
const Appcontainer = createAppContainer(tabContainer)