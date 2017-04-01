import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class graphqlclient extends Component {

  constructor() {
    super();
    this.state = {
      value: '',
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    fetch('http://192.168.40.49:7654/graphql?query={name}')
    .then(resp => {
      let response = JSON.parse(resp._bodyText)
      this.setState({ value: response.data });
    })
    .catch()
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Data Response from Server
        </Text>
        <Text style={styles.instructions}>
          Response name =  {this.state.value.name}
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('graphqlclient', () => graphqlclient);
