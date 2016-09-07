import React, { Component } from 'react';
import Element from './app/main';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

class foodToLove extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Element />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

AppRegistry.registerComponent('foodToLove', () => foodToLove);
