import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.boxLarge}>
          <Text style={styles.text}>안녕하세요</Text>
        </View>
        <ScrollView horizontal>
          <View style={styles.boxSmall}></View>
          <View style={styles.boxSmall}></View>
          <View style={styles.boxSmall}></View>
        </ScrollView>
        <View style={styles.boxSmall}></View>
        <View style={styles.boxLarge}></View>
        <Image style={styles.image} source={require('./assets/chae.jpg')}/>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  boxSmall: {
    width: 200,
    height: 200,
    marginBottom: 5,
    marginRight: 5,
    backgroundColor: 'skyblue'
  },
  boxLarge: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300,
    marginBottom: 5,
    marginRight: 5,
    backgroundColor: 'steelblue'
  },
  text: {
    textAlign: 'center',
    backgroundColor: 'yellow'
  },
  image: {
    width: 400
  }
})
