import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

function FlatListExample() {
  const itemList: JSX.Element[] = [
    <View style={[FlatListExampleStyle.CardBox, FlatListExampleStyle.cardOne]} key="1">
      <Text>Box1</Text>
    </View>,
    <View style={[FlatListExampleStyle.CardBox, FlatListExampleStyle.cardTwo]} key="2">
      <Text>Box2</Text>
    </View>,
    <View style={[FlatListExampleStyle.CardBox, FlatListExampleStyle.cardthree]} key="3">
      <Text>Box3</Text>
    </View>,
    <View style={[FlatListExampleStyle.CardBox, FlatListExampleStyle.cardfour]} key="4">
      <Text>Box4</Text>
    </View>,
  ];

  return (
    <View style={[FlatListExampleStyle.container, { padding: 15 }]}>
      <Text style={FlatListExampleStyle.textHeading}>Flat List </Text>
      <FlatList
        horizontal
        data={itemList}
        renderItem={({ item }) => item}
        keyExtractor={(_item, index) => index.toString()}
      />
    </View>
  );
}

const FlatListExampleStyle = StyleSheet.create({
  textHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
  },
  container: {
    flex: 1,
    margin: 5
  },
  CardBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    margin: 10,
    borderRadius: 15,

  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardthree: {
    backgroundColor: 'green',
  },
  cardfour: {
    backgroundColor: 'yellow',
  },
});

export default FlatListExample;
