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
    fetch('http://192.168.30.90:7654/graphql?query={name nationality}')
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
          Name and Nationality data below obtained from graphql
        </Text>
        <Text style={styles.instructions}>
          Hello, My Name is : {this.state.value.name}
        </Text>
        <Text style={styles.instructions}>
          I am from : {this.state.value.nationality}
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
    fontSize: 25,
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

AppRegistry.registerComponent('graphqlclient', () => graphqlclient);
