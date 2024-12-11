import React from 'react';
import {ScrollView, View} from 'react-native';
import MyShapes from './_shapes';
import Hexagon from './styles';

function App() {
  return (
    <ScrollView>
      <View style={{alignItems: 'center'}}>
        <MyShapes /> <Hexagon />
        <MyShapes />
        <MyShapes />
      </View>
    </ScrollView>
  );
}

export default App;
