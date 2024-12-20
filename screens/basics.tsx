import React from 'react';
import { Text, View, StyleSheet, TextStyle, ViewStyle } from 'react-native';

function AppPro(): React.JSX.Element {
  return (
    <View style={appProStyles.screenContainer}>
      // !  here simple method for overriding flex only from function StyleSheet create method
      <View style={[appProStyles.containerBox,{flex:2}]}>
        <Text style={appProStyles.textStyle}>Hello World</Text>
      </View>
      <View style={appProStyles.containerBox}>
        <Text style={appProStyles.textStyle}>Hello every 1</Text>
      </View>
    </View>
  );
}

let appProStyles: { screenContainer: ViewStyle; containerBox: ViewStyle; textStyle: TextStyle }= StyleSheet.create({
  screenContainer: {
    flex: 1, // Full screen for the parent container
    backgroundColor: 'white', // Set background color if needed
  },
  containerBox: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40, // This creates space outside the box (similar to padding, but external)
    padding: 15, // Padding inside the box
    borderTopLeftRadius:70,
    borderBottomRightRadius:71,   shadowColor: 'black', // Shadow color
    shadowOffset: { width: 10, height: 200 }, // Offset the shadow to the bottom-right
    shadowOpacity:0.8, // Shadow opacity (controls transparency)
    shadowRadius: 5.1, // Radius of the shadow blur
    elevation: 20, // For Android (shadow effect)
  },
  textStyle: {
    textAlign: 'center',//aligning text
    color: 'purple',//textcolor
    fontSize: 60,
    fontWeight:'500',
    textShadowColor: 'black',
    textShadowRadius: 45,  textShadowOffset: { width: 10, height: 10 }
  },
});

export default AppPro;