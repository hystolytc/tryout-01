/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

import './UserAgent'
import io from 'socket.io-client'

export default class websocket extends Component {

  constructor(props){
    super(props)

    this.socket = io('http://localhost:7654');
    this.state = {
      text: null
    }

  }

  handleChange(event){
    this.setState({
      text: event.nativeEvent.text
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
            value={this.state.text}
            onChange={this.handleChange.bind(this)} />
        <TouchableHighlight onPress={() => {
          this.socket.emit('text', this.state.text)
          this.setState({text: ''})
          }}>
        <Text>test</Text></TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('websocket', () => websocket);
