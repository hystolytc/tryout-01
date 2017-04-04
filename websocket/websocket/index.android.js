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
    this.state = {
      serverChat: 'Wait for server info...'
    }
  }

  componentDidMount() {
    this.socket = io('http://192.168.30.90:7654');
    this.socket.on('message', message => {
      this.setState({serverChat: message})
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          "This data below obtained from websocket server"
        </Text>
        <Text style={styles.instructions}>
          Server Message : "{this.state.serverChat}"
        </Text>
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
    color: '#ff9800'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('websocket', () => websocket);
