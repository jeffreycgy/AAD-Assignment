import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class JButton extends React.Component {
  onPress() {
    console.log('Pressed');
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>{this.props.text.toUpperCase()}</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    backgroundColor: '#841581',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 6,
    paddingTop: 6,
    paddingBottom: 6,
    width: 300,
    marginTop: 30,
  }
});