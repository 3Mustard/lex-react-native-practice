
import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

export default class App extends React.Component {
render() {
  var data = [
    { framework: 'React JS' },
    { framework: 'Angular JS' },
    { framework: 'Ember JS' },
    { framework: 'Knockout JS' },
    { framework: 'Polymer JS' },
    { framework: 'Node JS' },
    { framework: 'Express JS' },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item,index)=> index}
        renderItem={({ item,index }) => (
          <View style={styles.itemContainer} key={index.toString()}>
            <Text>{item.framework}</Text>
          </View>
        )}
      />
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
  itemContainer: {
    height:100,
    backgroundColor:'skyblue',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    borderColor:'black',
    borderWidth:1,
    margin:25
  },
});
