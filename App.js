
import * as React from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';

export default class App extends React.Component {
  state = {
    showName: false,
    // displayText: 'OFF',
  };
  onSwitchChange(value) {
    this.setState({
      showName: !this.state.showName,
      // displayText: this.state.displayText == 'OFF' ? 'ON' : 'OFF',
    });
  }
  render() {
    return (
      <View style={styles.container}>
        { this.state.showName ? (
          <Text>ON</Text>
        ) : 
          <Text>OFF</Text> 
        }
        <Switch
          value={this.state.showName}
          onValueChange={value => this.onSwitchChange(value)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center'
  }
});