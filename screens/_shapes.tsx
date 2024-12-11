import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function MyShapes() {
  return (
    <View style={{padding: 30}}>
      <View style={myStyles.firstScreenContainer}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            textAlign: 'justify',
            paddingHorizontal: 10,
            // fontWeight: 'bold',
          }}>
          Hello world HERE I AM TYPING NEW
        </Text>
      </View>
      <View style={myStyles.triangle}></View>
    </View>
  );
}
// shapes styles

const myStyles = StyleSheet.create({
  firstScreenContainer: {
    padding: 30,
    height: 200,
    width: 200,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#eb7734',
    elevation: 30,
    shadowColor: '#000000',
    shadowOffset: {height: 5, width: 5},
    shadowOpacity: 2,
    shadowRadius: 10,
  },
 
    triangle: {
      width: 0,
      height: 0,
      borderLeftWidth: 30,
      borderRightWidth: 30,
      borderBottomWidth: 60,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'red',
    }
  
});

export default MyShapes;
