import React from 'react';
import App from './src/App.js'
import {
  AppRegistry,
  View,
} from 'react-vr';

export default class vr_react extends React.Component {
  render() {
    return (
      <View>
        <App />
      </View>
    );
  }
};

AppRegistry.registerComponent('vr_react', () => vr_react);
