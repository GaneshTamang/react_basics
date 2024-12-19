import React from 'react';
// reaact elements we use for app
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
// ! type decalration for ensuring js element
function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={firstScreenStyle.centerAlignItems}>
        <Text style={firstScreenStyle.appWelcomePageTExt}>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}

const firstScreenStyle = StyleSheet.create({
  appWelcomePageTExt: {
    textAlign: 'center',

    color: 'purple',
    fontSize: 30,
    fontWeight: '600',
    
  },

  centerAlignItems: {alignItems: 'center'},
});

export default App;


